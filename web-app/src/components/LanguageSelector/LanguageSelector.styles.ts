import styled, {css} from 'styled-components';
import {Typography} from 'tetraimpacts-components-library';

export const StyledSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  height: 21px;
`;

export const Option = styled(Typography)<{
  isSelected?: boolean;
  isPrimary?: boolean;
  hoverable?: boolean;
}>(
  ({
    theme: {
      colors: {primaryBg, primary, primary800},
    },
    isSelected,
    isPrimary,
    hoverable,
  }) => css`
    cursor: ${hoverable ? 'pointer' : 'default'};
    font-weight: 400;
    font-size: 18px;
    line-height: 21.09px;
    color: ${isPrimary ? primary : primaryBg};
    opacity: ${isSelected ? '1' : '.5'};
    text-shadow: ${isPrimary ? primaryBg : primary800} 0px 0px 5px;

    &:hover {
      opacity: ${hoverable && '.7'};
    }
  `
);

export const Divider = styled.div<{isPrimary?: boolean}>(
  ({
    theme: {
      colors: {primary, primaryBg, primary800},
    },
    isPrimary,
  }) => css`
    border: 1px solid ${isPrimary ? primary : primaryBg};
    box-shadow: ${isPrimary ? primaryBg : primary800} 0px 0px 5px;
    height: 100%;
  `
);
