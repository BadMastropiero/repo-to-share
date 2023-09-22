import styled, {css} from 'styled-components';
import {Typography} from '../Typography';
import {flexAlignment} from '../../utils/styleMixins';

// Not in use, WIP
export const InputFieldset = styled.fieldset<{primary: boolean}>(
  ({
    theme: {
      colors: {primary, primary100},
      transition,
    },
  }) => css`
    transition: ${transition};
    position: absolute;
    inset: -5px 0px 0px;
    pointer-events: none;
    margin: 0;
    padding: 0;
    border: none;
    border-bottom: 4px dashed ${primary};
    &:disabled {
      border-bottom-color: ${primary100};
    }
  `
);

// Not in use, WIP
export const InputLegend = styled.legend<{primary: boolean}>(
  ({theme: {transition}}) => css`
    transition: ${transition};
    transform: scale(0.8);
    &.as-placeholder {
      //transform: translate(14px, 16px) scale(1);
      transform: translate(14px, 50%) scale(1);
    }
  `
);

export const InputLabel = styled(Typography)<{disabled?: boolean; primary?: boolean}>(
  ({
    theme: {
      colors: {primary, primary200, primaryDark, primaryBg},
      transition,
    },
    primary: isPrimary,
    disabled,
  }) => css`
    transition: ${transition};
    position: absolute;
    bottom: 100%;
    transform: translateY(50%);
    font-size: 11px;
    left: 0;
    pointer-events: none;

    color: ${() => {
      if (isPrimary) return disabled ? primary200 : primary;
      return disabled ? primaryDark : primaryBg;
    }};
    &.as-placeholder {
      bottom: 50%;
      font-size: 100%;
    }
  `
);

export const StyledInput = styled.input<{disabled?: boolean; $primary?: boolean}>(
  ({
    theme: {
      colors: {primary, caret, primaryBg, primary200, primaryDark},
      transition,
    },
    $primary: isPrimary,
    disabled,
  }) => css`
    transition: ${transition};
    pointer-events: all;

    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;

    width: 100%;
    padding: 0px;
    border-width: 0;

    font: inherit;
    caret-color: ${caret};
    color: ${() => {
      if (isPrimary) return disabled ? primary200 : primary;
      return disabled ? primaryDark : primaryBg;
    }};
    background-color: transparent;

    &:focus,
    &.noEmpty {
      outline: none;
    }
  `
);

export const InputWrapper = styled.div<{disabled?: boolean; primary?: boolean}>(
  ({
    theme: {
      colors: {primary, primaryBg, primary200, primaryDark},
      transition,
    },
    disabled,
    primary: isPrimary,
  }) => css`
    ${flexAlignment('row-center')}
    height: 52px;
    transition: ${transition};
    border-bottom: 4px dashed;
    border-color: ${() => {
      if (isPrimary) return disabled ? primary200 : primary;
      return disabled ? primaryDark : primaryBg;
    }};
  `
);

export const InputLabelWrapper = styled.div`
  position: relative;
  align-self: end;
  /* width: 100%; */
  flex: 1;
`;

export default StyledInput;
