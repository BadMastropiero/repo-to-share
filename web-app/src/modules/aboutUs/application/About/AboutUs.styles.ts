import styled, {css} from 'styled-components';
import {Typography, respondAbove} from 'tetraimpacts-components-library';

export const StyledAboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  ${respondAbove('tablet', {
    padding: '0px 40px',
  })}
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 20px;
  gap: 30px;
  width: 100%;
  max-width: 1180px;
  position: relative;

  ${respondAbove('tablet', {
    padding: '50px 0px 50px',
  })}
`;

export const HeadingTitle = styled(Typography)`
  font-family: 'Teko';
  font-size: 80px;
  line-height: 100%;
  font-weight: 500;
  align-self: center;

  ${respondAbove('tablet', {
    alignSelf: 'flex-start',
  })}
`;

export const HeadingContentContainer = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 69px;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 30px;

  ${respondAbove('laptopL', {
    justifyContent: 'space-between',
  })}
`;

export const SummaryContainer = styled.div(
  ({
    theme: {
      colors: {primaryDark},
    },
  }) => css`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    align-items: center;
    width: 100%;

    ${respondAbove('laptopL', {
      maxWidth: '975px',
    })}

    div {
      color: ${primaryDark};
      font-size: 20px;
      line-height: 40px;
      font-weight: 400;
      strong {
        font-weight: 700;
      }
    }
  `
);

export const IllustrationContainer = styled.div`
  display: flex;
  position: relative;
  width: 250px;
  height: 250px;
  order: -1;

  ${respondAbove('laptopL', {
    display: 'flex',
    position: 'absolute',
    width: '270px',
    height: '230px',
    top: '350px',
    left: '1044px',
  })}
`;
