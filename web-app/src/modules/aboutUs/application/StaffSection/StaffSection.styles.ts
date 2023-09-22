import styled, {css} from 'styled-components';
import {Typography, respondAbove} from 'tetraimpacts-components-library';

export const StyledContainer = styled.div(
  ({
    theme: {
      colors: {primary25},
    },
  }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 20px 100px;
    gap: 40px;
    background: ${primary25};

    ${respondAbove('tablet', {
      padding: '50px 20px 100px',
    })}
  `
);

export const StaffContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1500px;
  gap: 50px;
`;

export const StaffTitle = styled(Typography)(
  ({
    theme: {
      colors: {primaryLight},
    },
  }) => css`
    font-family: 'Teko';
    font-weight: 500;
    font-size: 60px;
    line-height: 100%;
    text-align: center;
    color: ${primaryLight};
  `
);

export const PersonCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 80px;
  justify-content: center;

  ${respondAbove('tablet', {
    columnGap: '20px',
    rowGap: '50px',
  })}
`;
