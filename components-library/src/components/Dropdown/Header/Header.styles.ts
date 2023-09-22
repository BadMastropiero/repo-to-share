import styled, {css} from 'styled-components';

const HeaderContainer = styled.div<{disabled?: boolean; primary?: boolean}>(
  ({
    theme: {
      colors: {primary: primaryColor, primary50, primary600, primaryBg},
      transition,
    },
    primary: isPrimary,
    disabled,
  }) => css`
    position: relative;
    left: 0;
    top: 0;
    fill: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    align-items: center;
    flex-grow: 0;
    padding: 10px;
    gap: 5px;
    // width: 184px; //for testing visual matching with figma design
    height: 51px;

    background-color: ${(isPrimary && (disabled ? primaryColor : primaryColor)) ||
    (disabled ? primaryBg : primaryBg)};

    border-radius: 10px;
    // cursor: ${disabled ? '' : 'pointer'};
    transition: ${transition};
    box-sizing: border-box;
    isolation: isolate;

    border: 4px solid
      ${(isPrimary && (disabled ? primary600 : primary600)) || (disabled ? primary50 : primary50)};

    /* &:hover {
      fill: none;
      background-color: ${disabled || (isPrimary && primary600) || primary50};
      border: 4px solid ${disabled || (isPrimary && primary50) || primary600};
    } */
  `
);

export default HeaderContainer;
