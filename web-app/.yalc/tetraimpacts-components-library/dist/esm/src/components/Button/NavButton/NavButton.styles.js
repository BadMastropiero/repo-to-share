import styled, { css } from 'styled-components';
import Button from '../Button';
import { StyledIconContainer } from '../Button.styles';
export const StyledNavButton = styled(Button)(({ theme: { colors: { primary, primary200, primaryBg, primary25, primary600 }, }, primary: isPrimary, highlight, isActive, }) => css `
    --bgHlColor: ${(highlight && (isPrimary ? primary25 : primary600)) || 'transparent'};
    --borderHlColor: ${isPrimary ? primary : primaryBg};
    --tic: 0.5s;

    flex-direction: column;
    border-radius: 0px;
    box-shadow: none;
    border: unset;
    border-top: 4px solid transparent;
    border-bottom: 4px solid
      ${(isActive && (isPrimary ? primary600 : primary25)) || `var(--bgHlColor)`};
    background: var(--bgHlColor);
    height: 80px;

    // Don't show the icon by default
    ${StyledIconContainer} {
      display: none;
    }

    p:first-of-type {
      // Set the proper typography
      padding: 10px;
      font-family: 'Roboto Flex';
      font-size: 12px;
      line-height: 14.06px;
      font-weight: 500;
      color: var(--borderHlColor);
    }

    @keyframes iconAppearance {
      0% {
        fill-opacity: 50%;
      }
      25% {
        fill-opacity: 75%;
      }
      50% {
        fill-opacity: 90%;
      }
      100% {
        fill-opacity: 100%;
      }
    }

    @keyframes floating {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(-5px);
      }
      100% {
        transform: translatey(0px);
      }
    }

    @keyframes dive {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(3px);
      }
      100% {
        transform: translatey(0px);
      }
    }

    &:hover:not(:disabled) {
      // Keep the same item's background colors
      background: var(--bgHlColor);
      border-bottom: 4px solid var(--borderHlColor);

      p:first-of-type {
        animation-name: dive;
        animation-duration: var(--tic);
      }

      ${StyledIconContainer} {
        display: flex;
        background: var(--bgHlColor);
        animation-name: floating;
        animation-duration: var(--tic);
      }

      div:first-child {
        // Set the proper paddings and icon size & color
        padding: 10px 0 0;
        svg:first-child {
          animation-name: iconAppearance;
          animation-duration: var(--tic);
          fill: var(--borderHlColor);
          width: 24px;
          height: 24px;
        }
      }
    }

    &:active:not(:disabled) {
      // Show the bottom border in the opposite color
      border-bottom: 4px solid var(--borderHlColor);
    }

    &:disabled {
      // Keep the same item's background colors
      background: var(--bgHlColor);
      ${StyledIconContainer} {
        background: var(--bgHlColor);
      }

      // Change the icon color to a disabled tone
      div:first-child {
        svg:first-child {
          fill: ${isPrimary ? primary200 : primary};
        }
      }

      p:first-of-type {
        color: ${isPrimary ? primary200 : primary};
      }
    }
  `);
export default StyledNavButton;
//# sourceMappingURL=NavButton.styles.js.map