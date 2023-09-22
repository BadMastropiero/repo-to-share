import {css, createGlobalStyle} from 'styled-components';
import {respondAbove} from 'tetraimpacts-components-library';

export const GlobalStyle = createGlobalStyle(
  ({
    theme: {
      // @ts-ignore
      colors: {primary100, primary200}, // TODO WARN, check if this is working full server side
    },
  }) => css`
    html,
    div {
      &::-webkit-scrollbar {
        width: 3px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: ${primary100};
      }

      &::-webkit-scrollbar-thumb:hover {
        background: ${primary200};
      }
    }

    /* Use this className to respect Navbar distance in each page that needs it */
    .navbar-distance {
      padding-top: 100px;
      ${respondAbove('tablet', {paddingTop: '120px'})}
    }
  `
);

export const DarkBlueGlobalStyle = createGlobalStyle(
  ({
    theme: {
      // @ts-ignore
      colors: {primary800},
    },
  }) => css`
    main {
      background: linear-gradient(
          186.86deg,
          #01223a -5.74%,
          #012a49 31.43%,
          rgba(1, 62, 102, 0.299625) 77.59%,
          #01af96 102.17%
        ),
        linear-gradient(0deg, ${primary800}, ${primary800}),
        linear-gradient(45deg, #00eb87 14.64%, #0066a6 85.36%);
    }
  `
);
