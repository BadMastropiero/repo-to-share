import styled, {css} from 'styled-components';
import {Typography, respondAbove} from 'tetraimpacts-components-library';

export const CareersSectionLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 60px 20px 150px;

  ${respondAbove('tablet', {
    paddingTop: '100px',
  })}
`;

export const CareersSectionCard = styled.div(
  ({
    theme: {
      colors: {primaryBg},
    },
  }) => css`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: ${primaryBg};
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    isolation: isolate;
    width: 100%;
    max-width: 1244px;
  `
);

export const CardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 100%;
  min-height: 246px;
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${respondAbove('tablet', {
    flexDirection: 'row',
  })}
`;

export const ContentSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 24px 20px;
  ${respondAbove('tablet', {
    padding: '0px 60px 42px',
  })}
`;

export const ContentPositionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 24px 20px;
  background: linear-gradient(90deg, rgba(71, 178, 244, 0.1) 3.93%, rgba(71, 178, 244, 0) 90.77%);
  justify-content: space-between;

  ${respondAbove('tablet', {
    padding: '0px 60px 42px',
  })}
`;

export const CardTitle = styled(Typography)`
  font-family: 'Teko';
  font-size: 60px;
  font-weight: 500;
  line-height: 114.64px;

  ${respondAbove('tablet', {
    fontSize: '80px',
  })}
`;

export const PositionsTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  padding-top: 30px;
  padding-bottom: 30px;

  ${respondAbove('tablet', {
    paddingTop: '63px',
  })}
`;

export const PositionPillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 22px;
  column-gap: 31px;
  padding-bottom: 53px;

  ${respondAbove('tablet', {
    maxWidth: '65%',
  })}
`;
