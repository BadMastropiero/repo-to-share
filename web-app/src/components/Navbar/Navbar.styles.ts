import styled, {css, createGlobalStyle} from 'styled-components';
import {NavButton, respondAbove} from 'tetraimpacts-components-library';

export const StyledNavbarWrapper = styled.header<{
  visible?: boolean;
  isTopPosition?: boolean;
  primary?: boolean;
  backgroundStyle?: 'transparent';
}>(
  ({
    theme: {
      colors: {primaryBg, primary800},
    },
    visible,
    isTopPosition,
    primary: isPrimary,
    backgroundStyle,
  }) => {
    let navbarBackgroundColor = 'transparent';

    if (!isTopPosition) {
      navbarBackgroundColor = isPrimary ? `${primaryBg}8c` : `${primary800}8c`;
    }

    return css`
      z-index: 9;
      position: fixed;
      bottom: ${visible || isTopPosition ? '0' : '-280px'};
      left: 0;
      right: 0;
      transition: bottom, padding;
      transition-duration: 0.3s;
      display: flex;
      justify-content: center;
      width: 100%;
      pointer-events: none;
      background: transparent;

      ${respondAbove('tablet', {
        background: backgroundStyle || navbarBackgroundColor,
        backdropFilter: !isTopPosition ? 'blur(20px)' : 'none',
        borderBottom: !isTopPosition ? '1px solid rgba(237, 237, 237, 0.1)' : 'none',
        boxShadow: !isTopPosition ? '0px 10px 15px -5px rgba(0, 101, 166, 0.3)' : 'none',
        bottom: 'unset',
        padding: isTopPosition ? '50px 20px' : '15px 0px',
        top: 0,
      })}
    `;
  }
);

export const NavbarContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1180px;
`;

export const StyledNavbar = styled.div<{primary?: boolean}>(
  ({
    theme: {
      colors: {primary, primaryBg, primary25, primary600},
    },
    primary: isPrimary,
  }) => css`
    pointer-events: all;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex: 1;
    transition: all 0.3s;

    /* padding: 20px 0 20px 0px; */

    height: 71px;
    width: 100vw;

    border: 4px solid ${isPrimary ? primary600 : primary25};
    box-shadow: 0px 0px 30px rgba(0, 101, 166, 0.3);
    border-radius: 20px 20px 0px 0px;

    background: ${isPrimary ? primary : primaryBg};

    ${respondAbove('tablet', {
      background: 'none',
      borderRadius: 0,
      border: 'none',
      justifyContent: 'space-between',
      boxShadow: 'none',
      paddingLeft: '20px',
      paddingRight: '20px',
      height: '47px',
      gap: '20px',
    })}
  `
);

// Mobile navbar
export const StyledMobileNavbar = styled.div<{
  visible?: boolean;
  isTopPosition?: boolean;
  isPrimary?: boolean;
}>(
  ({
    theme: {
      colors: {primary800, primaryBg},
    },
    visible,
    isTopPosition,
    isPrimary,
  }) => css`
    display: flex;
    z-index: 10;
    position: fixed;
    left: 0;
    transition: all 0.3s;
    top: ${visible || isTopPosition ? '0' : '-280px'};
    right: 0;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    background-color: ${!isPrimary ? primary800 : primaryBg};
    background: ${isTopPosition && 'none'};
    ${!isTopPosition &&
    visible &&
    `
    box-shadow: 0px 10px 15px -5px rgba(0, 101, 166, 0.3);
    border-bottom: 1px solid rgba(237, 237, 237, 0.1);
    `};
  `
);

export const NabvarLeft = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  a {
    button {
      height: 77px;
      cursor: pointer;
    }
  }
`;

export const NavbarRightContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 25px;
`;

export const CustomNavButton = styled(NavButton)<{primary?: boolean}>(
  ({
    theme: {
      colors: {primaryBg, primary800},
    },
    primary,
  }) => css`
    p {
      text-transform: capitalize;
      font-size: 18px !important;
      font-weight: 400;
      line-height: 21px;
      text-shadow: ${primary ? primaryBg : primary800} 0px 0px 5px;
    }
  `
);

export const StyledNavbarGlobalStyle = createGlobalStyle`
  body {
    ${respondAbove('tablet', {
      paddingTop: 'calc(79px + 180px)',
      marginBottom: 'unset',
    })}
  }
`;

export const NavbarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  svg {
    height: 24px;
    width: auto;
  }
`;
