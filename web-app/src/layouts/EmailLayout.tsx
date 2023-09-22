import {ReactNode} from 'react';
import {createGlobalStyle} from 'styled-components';

export const EmailFontConfig = createGlobalStyle`
  p, h1, h2, div, a {
    font-family: 'Roboto', sans-serif !important;
  }
  body {
    margin: 0;
  }
`;

export default function EmailLayout({children}: {children: ReactNode | ReactNode[]}) {
  return (
    <>
      <EmailFontConfig />
      {children}
    </>
  );
}
