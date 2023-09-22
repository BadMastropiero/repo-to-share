import styled, {css} from 'styled-components';
import {Typography, respondAbove} from 'tetraimpacts-components-library';

export const IndexContainer = styled.aside<{
  floating?: boolean;
  isFixed?: boolean;
}>(
  ({
    floating = false,
    isFixed = false,
    theme: {
      colors: {primaryBg},
    },
  }) => css`
    display: none;
    background: ${primaryBg};
    position: absolute;
    transition: ease 0.3s;
    width: ${floating ? '280px' : '0px'};

    ${respondAbove('tablet', {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '0px',
      gap: '40px',
      height: '100%',

      // Pin the index sidebar position if scroll over title Y
      top: `${isFixed ? '78px' : ''}`,
      position: `${isFixed ? 'fixed' : 'absolute'}`,

      // Hide the index sidebar border under comments
      // container in tablet mode when no floating
      zIndex: `${floating ? '1' : 'unset'}`,
    })}
  `
);

export const IndexContent = styled.div(
  ({
    theme: {
      colors: {primary50},
    },
  }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0px 40px 0px 0px;
    gap: 20px;
    border-right: 4px solid ${primary50};
    width: 100%;
    box-shadow: 20px -1px 20px -30px rgb(0 101 166 / 40%);
    height: 100%;
  `
);

export const Option = styled(Typography)<{textType?: string}>(
  ({textType}) => css`
    font-weight: ${textType === 'h1' ? '700' : '400'};
    font-size: ${textType === 'h1' ? '18px' : '13px'};
    line-height: ${textType === 'h1' ? '23px' : '24px'};

    &:hover {
      text-decoration: underline;
    }
  `
);
