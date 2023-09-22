import styled, {createGlobalStyle, css} from 'styled-components';
import {respondAbove} from 'tetraimpacts-components-library';

export const StyledTermsAndConditionsGlobalStyle = createGlobalStyle(
  ({
    theme: {
      /* @ts-ignore */
      colors: {primaryBg},
    },
  }) => css`
    body {
      background-color: ${primaryBg};
    }
  `
);

export const TermsStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 100px;
  gap: 100px;

  ${respondAbove('tablet', {
    padding: '60px 0px 100px',
  })}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1180px;
  padding: 0;
  gap: 20px;

  ${respondAbove('tablet', {
    padding: '0px 142px',
  })}
`;

export const Content = styled.div(
  ({
    theme: {
      colors: {primary, primary400},
    },
  }) => css`
    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
      color: ${primary400};
    }

    strong {
      font-size: 20px;
      font-weight: 700;
      line-height: 18.75px;
      color: ${primary};
    }
  `
);

export const TermsIllustrationContainer = styled.div`
  display: flex;
  position: relative;
  height: 221px;
  width: 193px;
  align-self: center;
`;
