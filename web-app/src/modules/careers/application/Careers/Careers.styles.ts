import styled, {css} from 'styled-components';
import {Typography, respondAbove} from 'tetraimpacts-components-library';

export const CareersStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px 105px;

  ${respondAbove('tablet', {
    padding: '0px 40px 105px',
  })}
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 0px;
  gap: 30px;
  width: 100%;
  max-width: 1180px;
  position: relative;

  ${respondAbove('tablet', {
    padding: '50px 0px 50px',
  })}
`;

export const PageTitle = styled(Typography)`
  font-family: 'Teko';
  font-size: 80px;
  line-height: 100%;
  font-weight: 500;
  align-self: center;

  ${respondAbove('tablet', {
    alignSelf: 'flex-start',
  })}
`;

export const DescriptionContainer = styled.div(
  ({
    theme: {
      colors: {primary800},
    },
  }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    row-gap: 30px;

    ${respondAbove('laptopL', {
      maxWidth: '686px',
    })}

    div {
      color: ${primary800};
      font-size: 20px;
    }
  `
);

export const IllustrationContainer = styled.div`
  display: flex;
  position: relative;
  width: 250px;
  height: 250px;
  align-self: center;

  ${respondAbove('laptopL', {
    display: 'flex',
    position: 'absolute',
    width: '468px',
    height: '563px',
    top: '30px',
    right: '0px',
  })}
`;

export const SkillBookmarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  max-width: 1080px;
  align-self: center;
`;

export const StepsContainer = styled.div(
  ({
    theme: {
      colors: {primary800},
    },
  }) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    border-radius: 40px;
    padding: 40px 20px;
    background: ${primary800};
    overflow: hidden;
    row-gap: 72px;

    ${respondAbove('tablet', {
      padding: '60px 57px 72px',
    })}
    ${respondAbove('laptopL', {
      marginTop: '70px',
    })}
  `
);

export const StepCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

export const StepsContainerTitle = styled(Typography)(
  ({
    theme: {
      colors: {support1},
    },
  }) => css`
    font-weight: 700;
    font-size: 36px;
    line-height: 65.63px;
    text-align: center;
    color: ${support1};
    z-index: 2;

    ${respondAbove('tablet', {
      fontSize: '56px',
    })}
  `
);

export const SkillsBookmarksTitle = styled(Typography)`
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  align-self: center;
  line-height: 100%;
  padding: 66px 0px 0px;

  ${respondAbove('tablet', {
    fontSize: '56px',
  })}
`;

export const FilterTagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  max-width: 1180px;
  width: 100%;
  margin: 19px 10px;
  height: 28px;
`;
