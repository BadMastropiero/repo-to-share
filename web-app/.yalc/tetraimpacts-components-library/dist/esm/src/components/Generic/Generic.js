import { jsx as _jsx } from "react/jsx-runtime";
import styled, { css } from 'styled-components';
export function WithGeneric(component) {
    const WrappedComponent = styled(component)(({ theme: { transition }, height, width, padding }) => css `
      box-sizing: border-box;
      transition: ${transition};
      height: ${height};
      width: ${width};
      padding: ${padding};
    `);
    // eslint-disable-next-line func-names
    return function (hocProps) {
        return _jsx(WrappedComponent, Object.assign({}, hocProps));
    };
}
export default WithGeneric;
//# sourceMappingURL=Generic.js.map