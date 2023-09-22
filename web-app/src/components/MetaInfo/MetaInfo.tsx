import {ReactNode} from 'react';
import Head from 'next/head';

type AppPropsWithLayout = {
  title?: string | null;
  description?: string | null;
  imgUrl?: string;
  url?: string;
  twitterCardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
  children?: ReactNode | ReactNode[];
};

/**
 * NextJs meta tags abstraction. Generate open graph and twitter cards related tags.
 *
 */
function MetaInfo({
  title,
  description,
  imgUrl,
  url,
  twitterCardType = 'summary',
  children,
}: AppPropsWithLayout) {
  return (
    <Head>
      {title && (
        <>
          <title key="title">{title}</title>
          <meta name="title" content={title} />
        </>
      )}
      {description && <meta key="description" name="description" content={description} />}

      {/* OG metatags */}
      {title && <meta key="og:title" property="og:title" content={title} />}
      {description && <meta key="og:description" property="og:description" content={description} />}
      {imgUrl && <meta key="og:image" property="og:image" content={imgUrl} />}

      {url && <meta key="og:url" property="og:url" content={url} />}

      {/* Twitter Cards */}
      <meta key="twitter:card" name="twitter:card" content={twitterCardType} />
      {/* <meta name="twitter:site" content="@nytimesbits" />
        <meta name="twitter:creator" content="@nickbilton" /> */}
      {children}
    </Head>
  );
}

export default MetaInfo;
