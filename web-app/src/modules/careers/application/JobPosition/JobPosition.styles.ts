import styled, {css} from 'styled-components';
import {Typography, respondAbove} from 'tetraimpacts-components-library';

export const JobPositionLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  padding: 0px 20px 100px;
  isolation: isolate;

  ${respondAbove('tablet', {
    padding: '60px 40px 85px',
    gap: '50px',
  })}
`;

export const PageTitle = styled(Typography)`
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  text-align: center;

  ${respondAbove('tablet', {
    fontSize: '56px',
    lineHeight: '66px',
    alignSelf: 'flex-start',
  })}
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;

  ${respondAbove('tablet', {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '60px',
  })}

  ${respondAbove('laptop', {
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  })}
`;

export const PositionDetailsContainer = styled.div(
  ({
    theme: {
      colors: {primary800},
    },
  }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 0px 17px;
    gap: 20px;
    width: 100%;
    max-width: 847px;

    div,
    li {
      font-size: 20px;
      color: ${primary800};
    }

    ul {
      row-gap: 10px;
    }

    ${respondAbove('tablet', {
      minWidth: '600px',
    })}
  `
);

export const SectionTitle = styled(Typography)(
  ({
    theme: {
      colors: {primary800},
    },
  }) => css`
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    align-self: flex-start;
    color: ${primary800};
  `
);

export const ContactFloatingContainer = styled.div<{isFixed?: boolean}>(
  ({
    theme: {
      colors: {lilyWhite, primary800},
    },
    isFixed = false,
  }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 30px;
    align-items: flex-start;
    background-color: ${lilyWhite};
    border-radius: 20px;
    padding: 66px 25px;
    width: unset;

    ${respondAbove('laptop', {
      width: '284px',
      position: isFixed ? 'sticky' : 'relative',
      top: isFixed ? '90px' : '',
    })}

    div,
    li {
      font-size: 20px;
      line-height: 24px;
      color: ${primary800};
    }

    ul {
      padding-left: 15px;
      margin: 0;
      row-gap: 10px;
    }
  `
);

export const DashedDivider = styled.div`
  width: 100%;
  border-style: dashed;
`;

export const PillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px 20px;
`;
