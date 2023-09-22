import styled, {css} from 'styled-components';
import {DynamicComponent} from '../DynamicComponent';

export const StyledIconContainer = styled.div<{primary: boolean; padding?: string}>(
  ({
    theme: {
      colors: {primary100, primaryDark},
    },
    primary: isPrimary,
    padding,
  }) => css`
    transition: all 0.3s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${isPrimary ? primaryDark : primary100};
    padding: ${padding};
  `
);

export const StyledButton = styled(DynamicComponent)<{primary: boolean; rounded: boolean}>(
  ({
    theme: {
      colors: {
        primary,
        primaryDark,
        primary50,
        primary100,
        primary200,
        primary600,
        primary800,
        primaryBg,
      },
      transition,
    },
    primary: isPrimary,
    rounded,
  }) => css`
    transition: ${transition};
    position: relative; // For the ripple effect to work
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    isolation: isolate;
    box-sizing: border-box;
    background-color: ${isPrimary ? primary : primary50};
    margin: 0;
    padding: 0;
    box-shadow: 0px 10px 15px -5px rgba(0, 101, 166, 0.4);
    border-radius: ${rounded ? '10px' : null};
    border: 4px solid ${isPrimary ? primary600 : primaryBg};
    overflow: hidden;
    height: min-content;
    &:disabled {
      background-color: ${isPrimary ? primary : primary50};
      ${StyledIconContainer} {
        background: ${isPrimary ? primaryDark : primary100};
      }
    }
    &:hover:not(:disabled) {
      background-color: ${isPrimary ? primaryDark : primary100};
      ${StyledIconContainer} {
        background: ${isPrimary ? primary800 : primary200};
      }
    }
    &:active:not(:disabled) {
      box-shadow: none;
    }
  `
);

export const StyledTextButton = styled(StyledButton)(
  ({
    theme: {
      colors: {primaryDark, primary100},
    },
    primary: isPrimary,
  }) => css`
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border: none;
    overflow: hidden;
    height: min-content;
    &:disabled {
      background-color: transparent;
    }
    &:hover:not(:disabled) {
      // TODO this line is here to update styles if needs to be differ from original button
      background-color: ${!isPrimary ? primaryDark : primary100};
    }
  `
);

export default StyledButton;
