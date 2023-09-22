import styled, {css} from 'styled-components';
import {respondAbove} from '../../utils';
import {Button} from '../Button';
import {Modal} from '../Modal';

const StyledAlert = styled(Modal)<{primary?: boolean}>(
  ({
    theme: {
      colors: {primary: primaryColor, primaryBg, primary100, primary600},
    },
    primary: isPrimary,
  }) => css`
    border: 4px solid ${isPrimary ? primary600 : primary100};
    padding: 26px;
    border-radius: 10px;
    background: ${isPrimary ? primaryColor : primaryBg};
    box-shadow: 0px 10px 15px -5px rgba(0, 101, 166, 0.4);
    min-width: 150px;
    ${respondAbove('laptop', {
      maxWidth: '40%',
    })}
  `
);

export const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  gap: 20px;
  word-break: break-word;
`;

export const AlertHeader = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const AlertCloseButton = styled(Button)(
  ({
    theme: {
      colors: {primaryLight, primaryBg},
    },
    primary: isPrimary,
  }) => css`
    border: unset;
    background: transparent;
    div:first-child {
      background: transparent;
      svg:first-child {
        fill: ${isPrimary ? primaryBg : primaryLight};
      }
    }

    :hover {
      div:first-child {
        background: transparent;
        svg:first-child {
          fill: ${primaryBg};
        }
      }
    }

    box-shadow: unset;
    flex-shrink: 0;
  `
);

export const AlertButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  justify-items: flex-end;
  gap: 20px;
  align-items: center;
  background: unset;
`;

export default StyledAlert;
