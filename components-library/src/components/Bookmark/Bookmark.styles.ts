import styled, {css} from 'styled-components';
import {DynamicComponent} from '../DynamicComponent';

const StyledBookmark = styled(DynamicComponent)<{
  primary?: boolean;
}>(
  ({
    theme: {
      colors: {primary600, primaryBg},
      transition,
    },
    primary: isPrimary,
  }) => css`
    color: unset;
    text-decoration: none;

    box-sizing: border-box;
    position: relative;
    left: 0;
    top: 0;
    fill: none;
    display: flex;
    flex-direction: row;
    min-height: 80px;

    background-color: ${(isPrimary && primary600) || primaryBg};
    border-radius: 10px;

    transition: ${transition};

    &:hover {
      /* box-shadow: 0px 10px 15px -5px rgba(0, 101, 166, 0.4); */
    }
  `
);

const BmIconContainer = styled.div<{
  primary?: boolean;
}>(
  ({
    theme: {
      colors: {primary: primaryColor, primary100},
      transition,
    },
    primary: isPrimary,
  }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;

    width: 76px;

    transition: ${transition};
    pointer-events: 'none';

    &.before {
      border-right: 4px dashed ${isPrimary ? primaryColor : primary100};
    }

    &.after {
      border-left: 4px dashed ${isPrimary ? primaryColor : primary100};
    }
  `
);

export {BmIconContainer};
export default StyledBookmark;
