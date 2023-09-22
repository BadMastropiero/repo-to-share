import styled, {css} from 'styled-components';

const OptionContainer = styled.div<{disabled?: boolean; primary?: boolean; noCheckbox?: boolean}>(
  ({
    theme: {
      colors: {primary: primaryColor, primary50, primary600, primaryBg},
      transition,
    },
    primary: isPrimary,
    noCheckbox,
    disabled,
  }) => css`
    position: relative;
    left: 0;
    top: 0;
    fill: none;
    display: flex;
    flex-direction: row;
    justify-content: ${noCheckbox ? 'flex-end' : 'space-between'};
    align-content: space-around;
    align-items: center;
    align-self: center;
    padding: 5px 10px 5px 5px;
    gap: 5px;
    height: 20px;
    background-color: ${isPrimary ? primaryColor : primaryBg};
    border-radius: 10px;
    /* cursor: ${disabled ? '' : 'pointer'}; */
    transition: ${transition};

    &:hover {
      fill: none;
      background-color: ${disabled || (isPrimary && primary600) || primary50};
    }
  `
);

export default OptionContainer;
