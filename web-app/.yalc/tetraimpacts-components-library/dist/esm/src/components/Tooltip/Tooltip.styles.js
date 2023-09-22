import ReactTooltip from 'react-tooltip';
import styled, { css } from 'styled-components';
const StyledTooltip = styled(ReactTooltip)(({ theme: { colors: { primary600, primary: primaryBorder, primaryBg }, tooltip: { colors: { tooltipBg }, }, }, primary: isPrimary, customBackColor, customBorderColor, customShadowColor, }) => css `
    min-width: 10px;
    min-height: 18px;
    padding: 5px 8px !important;

    font-size: 15px !important;

    color: ${primaryBg} !important;
    background-color: ${customBackColor || (isPrimary ? primary600 : tooltipBg)} !important;

    border: 2px solid ${customBorderColor || (isPrimary ? primaryBorder : primaryBg)} !important;
    border-radius: 5px !important;

    box-shadow: 0px 10px 15px -5px ${customShadowColor || 'rgba(0, 101, 166, 0.1)'} !important;

    &.show {
      opacity: 1 !important;
    }

    &::before {
      width: 0px !important;
    }

    &::after {
      background-color: ${customBackColor || (isPrimary ? primary600 : tooltipBg)} !important;
      border: 2px solid ${customBorderColor || (isPrimary ? primaryBorder : primaryBg)} !important;

      border-left: 2px solid ${customBackColor || (isPrimary ? primary600 : tooltipBg)} !important; // same as bg
      border-bottom: 2px solid ${customBackColor || (isPrimary ? primary600 : tooltipBg)} !important; // same as bg
      border-radius: 0px 5px 0px 10px !important;
    }

    &.place-right {
      margin-left: 15px !important;

      &:after {
        margin-top: -7px !important;
        left: -7px !important;
      }
    }

    &.place-left {
      margin-right: 15px !important;

      &:after {
        margin-top: -7px !important;
        right: -7px !important;
      }
    }

    &.place-top {
      margin-bottom: 15px !important;

      &::after {
        bottom: -7px !important;
        margin-left: -7px !important;
        box-shadow: 0px 10px 15px -5px ${customShadowColor || 'rgba(0, 101, 166, 0.1)'} !important;
      }
    }

    &.place-bottom {
      margin-top: 15px !important;

      &::after {
        transform: rotate(315deg) !important;
        top: -7px !important;
        margin-left: -7px !important;
      }
    }

    &:hover {
      visibility: visible !important;
      opacity: 1 !important;
    }
  `);
export default StyledTooltip;
//# sourceMappingURL=Tooltip.styles.js.map