import {IS_PRODUCTION} from 'config/constants';
import {pagesWithoutReact} from 'config/pagesUrls';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // Run the React rendering logic synchronously
      ctx.renderPage = () =>
        originalRenderPage({
          // Useful for wrapping the whole react tree
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
          enhanceComponent: Component => Component,
        });

      // Run the parent `getInitialProps`, it now includes the custom `renderPage`
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const {__NEXT_DATA__} = this.props;
    const renderOnlyHtml = !IS_PRODUCTION && pagesWithoutReact.includes(__NEXT_DATA__.page);
    return (
      <Html>
        {renderOnlyHtml && (
          <head>
            {/* This meta tags are due imposibility to add them in layouts,
            due missing `Head` in `_document.tsx` when rendering email related pages in development */}
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {this.props.styles}
          </head>
        )}

        {!renderOnlyHtml && (
          <Head>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto+Flex:300,400,500,700,800&display=swap"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Teko:300,400,500,700,800&display=swap"
            />
            <link rel="icon" href="/favicon.svg" />
          </Head>
        )}

        <body>
          <Main />
          {!renderOnlyHtml && <NextScript />}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
