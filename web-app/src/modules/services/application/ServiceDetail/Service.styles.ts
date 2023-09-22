import styled, {css} from 'styled-components';
import {Bookmark, Typography, respondAbove} from 'tetraimpacts-components-library';

export const StyledContainer = styled.div<{
  withBottomPadding?: boolean;
}>(
  ({withBottomPadding = false}) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 40px 25px;
    gap: 10px;
    width: 100%;
    max-width: 1180px;

    ${respondAbove('tablet', {
      padding: `15px 40px ${withBottomPadding ? '25px' : '0px'}`,
    })}
  `
);

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  position: relative;
  justify-content: space-between;
  gap: 20px;
  isolation: isolate;
  width: 100%;

  ${respondAbove('tablet', {
    alignItems: 'flex-start',
    flexDirection: 'row',
  })}
`;

export const PageTitle = styled(Typography)`
  font-weight: 700;
  font-size: 50px;
  line-height: 54px;

  ${respondAbove('tablet', {
    fontSize: '80px',
    lineHeight: '94px',
  })}
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 686px;
  justify-content: space-between;
  padding-bottom: 20px;

  ${respondAbove('tablet', {
    rowGap: '30px',
  })}
  div {
    line-height: 32px;
    font-size: 20px;
    font-weight: 400;
  }
`;

export const IllustrationContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 425px;
  height: 270px;
`;

export const SkillCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  max-width: 1080px;
  align-self: center;
`;

export const SkillCard = styled(Bookmark)(
  ({
    theme: {
      colors: {primary800},
    },
  }) => css`
    background-color: #e4e8ef;
    color: ${primary800};
    align-items: center;
    div {
      font-size: 20px;
      line-height: 24px;
      padding: 21.5px 24.5px 21.5px 0px;
    }
    div:first-child {
      width: 13px;
      margin-right: 15px;
      height: 90%;
      padding: 0;
    }
  `
);

export const InlineWidgetContainer = styled.div`
  min-width: 300px;
  height: 1050px;
  padding: 0px 20px;
  margin-top: 30px;
  overflow: 'hidden';
  height: 'fit-content';

  ${respondAbove('mobileL', {
    padding: '0px',
    width: '70vw',
    overflow: 'hidden',
  })}

  ${respondAbove('tablet', {
    width: '60vw',
    overflow: 'hidden',
  })}
`;
