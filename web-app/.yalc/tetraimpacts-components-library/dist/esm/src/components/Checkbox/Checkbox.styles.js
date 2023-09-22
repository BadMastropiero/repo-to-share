import styled, { css } from 'styled-components';
import { CheckMark } from '../Icon';
export const CheckboxContainer = styled.div `
  position: relative;
  display: flex;
  vertical-align: middle;
`;
export const Icon = styled(CheckMark) `
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
`;
export const StyledCheckbox = styled.input(({ theme: { colors: { primary, primaryDark, primaryBg, primaryBgDark }, }, primary: isPrimary, width, height, }) => css `
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    background-color: ${isPrimary ? primaryDark : primaryBgDark};
    margin: 0;
    width: ${width};
    height: ${height};
    border-radius: 5px;
    &:checked {
      background-color: ${isPrimary ? primary : primaryBg};
    }
  `);
// This is to override global theme or extra props
// StyledCheckbox.defaultProps = styledDefaultProps;
// Icon.defaultProps = styledDefaultProps;
//# sourceMappingURL=Checkbox.styles.js.map