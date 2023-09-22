import styled, { css } from 'styled-components';
import { DynamicComponent } from '../DynamicComponent';
const PillContainer = styled(DynamicComponent)(({ theme: { colors: { primary: primaryColor, primary50, primary600, primaryBg, primary25, primaryDark }, transition, }, primary: isPrimary, disabled, }) => css `
    box-sizing: border-box;
    position: relative;
    left: 0;
    top: 0;
    fill: none;
    display: flex;
    flex-direction: row;
    width: fit-content;
    justify-content: center;
    align-content: space-around;
    align-items: center;
    align-self: center;
    padding: 3px 8px;
    gap: 5px;
    height: 28px;

    box-shadow: 0px 10px 15px -5px rgba(0, 101, 166, 0.4);
    background-color: ${(isPrimary && primaryColor) || primaryBg};
    border: 2px solid ${(isPrimary && primary600) || primary25};
    border-radius: 5px;

    transition: ${transition};

    &:hover {
      fill: none;
      background-color: ${disabled || (isPrimary && primary600) || primary50};
      border: 2px solid ${disabled || (isPrimary && primaryDark) || primary25};
      box-shadow: ${disabled ? '' : '0px 10px 15px -5px rgba(0, 101, 166, 0.4)'};
    }

    &:active {
      // TODO Fix the selectors
      // Replicates the initial scheme
      background-color: ${(isPrimary && primaryColor) || primaryBg};
      border: 2px solid ${(isPrimary && primary600) || primary25};
      box-shadow: ${disabled ? '0px 10px 15px -5px rgba(0, 101, 166, 0.4)' : 'none'};
    }

    pointer-events: ${disabled && 'none'};
  `);
export default PillContainer;
//# sourceMappingURL=Pill.styles.js.map