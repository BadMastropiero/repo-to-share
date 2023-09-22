import styled, {css, createGlobalStyle} from 'styled-components';
// import {respondAbove} from 'tetraimpacts-components-library';

export const StyledFooter = styled.footer(
  ({
    theme: {
      colors: {primary},
    },
  }) => css`
    background: ${primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
);

export const AppDataContainer = styled.div``;

export const LandingGlobalStyle = createGlobalStyle(
  ({
    theme: {
      // @ts-ignore
      colors: {primary800}, // TODO WARN, check if this is working full server side
    },
  }) => css`
    /* html {
      scroll-snap-type: y mandatory;
      .y-scroll-snap-sections {
         > div {
          scroll-snap-align: center;
        }
        > section {
         scroll-snap-align: center;
       }
      }
      footer {
        scroll-snap-align: center;
      }
    }  */
    body {
      background-color: ${primary800};
    }
  `
);
