import styled, {css} from 'styled-components';
import Button from '../Button';
import {StyledIconContainer} from '../Button.styles';

export const StyledSocialButton = styled(Button)<{primary: boolean; rounded: boolean}>(
  ({
    theme: {
      colors: {primary, primaryDark, primary50, primary100},
    },
    primary: isPrimary,
    rounded,
  }) => css`
    box-shadow: none;
    border-radius: ${rounded ? '50%' : null};
    border-color: ${isPrimary ? primaryDark : primary100};

    ${StyledIconContainer} {
      background: ${isPrimary ? primary : primary50};
    }

    &:disabled {
      ${StyledIconContainer} {
        background: ${isPrimary ? primary : primary50};
      }
    }
    &:hover:not(:disabled) {
      border-color: ${isPrimary ? primary : primary50};
      box-shadow: 0px 10px 15px -5px ${primaryDark};
      ${StyledIconContainer} {
        background: ${isPrimary ? primaryDark : primary100};
      }
    }
    &:active:not(:disabled) {
      box-shadow: none;
    }
  `
);

export default StyledSocialButton;
