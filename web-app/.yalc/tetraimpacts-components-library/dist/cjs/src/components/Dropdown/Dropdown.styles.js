"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledDropdown = exports.getStyles = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
function getStyles({ colors, typography, }) {
    const TiDdFontStyles = {
        fontFamily: `${typography.presets.buttonSM.fontFamily}`,
        fontStyle: `${typography.presets.buttonSM.fontStyle}`,
        fontSize: `${typography.presets.buttonSM.fontSize}`,
        lineHeight: `${typography.presets.buttonSM.lineHeight}`,
    };
    const style = {
        control: (css, state) => (Object.assign(Object.assign({}, css), { padding: '6px 6px 6px 0px', background: `${state.selectProps.primary ? colors.primary : colors.primaryBg}`, boxShadow: 'none', borderStyle: 'solid', borderRadius: `${state.selectProps.menuIsOpen ? '10px 10px 0 0' : '10px'}`, borderWidth: `${state.selectProps.menuIsOpen ? '4px 4px 0px 4px' : '4px'}`, borderColor: `${state.selectProps.primary ? colors.primary600 : colors.primary100}`, minWidth: '150px', 
            // ! Disable transition due to annoying line still appearing when closing by losing focus
            transition: 'none', borderBottom: `${state.selectProps.menuIsOpen ? '0px' : ''}`, ':hover': {
                boxShadow: 'none',
                color: 'none',
                background: `${state.selectProps.primary ? colors.primary : colors.primaryBg}`,
                borderStyle: 'solid',
                borderRadius: `${state.selectProps.menuIsOpen ? '10px 10px 0 0' : '10px'}`,
                borderWidth: `${state.selectProps.menuIsOpen ? '4px 4px 0px 4px' : '4px'}`,
                borderColor: `${state.selectProps.primary ? colors.primary600 : colors.primary100}`,
            } })),
        input: (css, state) => (Object.assign(Object.assign(Object.assign({}, css), TiDdFontStyles), { color: `${state.selectProps.primary ? colors.primaryLight : colors.primary200}` })),
        loadingIndicator: (css, state) => (Object.assign(Object.assign({}, css), { color: `${state.selectProps.primary ? colors.primaryBg : colors.primaryLight}` })),
        loadingMessage: css => (Object.assign(Object.assign(Object.assign({}, css), TiDdFontStyles), { color: `${colors.primaryLight}` })),
        dropdownIndicator: (css, state) => (Object.assign(Object.assign({}, css), { padding: 0, minHeight: '36px', height: '36px', zIndex: `${state.selectProps.menuIsOpen ? '2' : 'unset'}` })),
        singleValue: (css, state) => (Object.assign(Object.assign(Object.assign({}, css), TiDdFontStyles), { color: `${state.selectProps.primary ? colors.primaryBg : colors.primary}` })),
        placeholder: css => (Object.assign(Object.assign(Object.assign({}, css), TiDdFontStyles), { color: `${colors.primaryLight}` })),
        multiValue: (css, state) => (Object.assign(Object.assign({}, css), { boxSizing: 'border-box', position: 'relative', left: 0, top: 0, fill: 'none', display: 'flex', flexDirection: 'row', width: 'max-content', justifyContent: 'center', alignContent: 'space-around', alignItems: 'center', alignSelf: 'center', height: '28px', padding: '3px 8px', gap: '5px', borderRadius: 5, border: `2px solid ${state.selectProps.primary ? colors.primary25 : colors.primary600}`, backgroundColor: `${state.selectProps.primary ? colors.primaryBg : colors.primary}`, 
            // ! Not using box-shadows since it is shrunk at bottom.
            // boxShadow: `${state.selectProps.isDisabled ? '' : '0px 10px 15px -5px rgba(0, 101, 166, 0.4)'}`,
            ':hover': {
                fill: 'none',
                backgroundColor: `${state.selectProps.primary ? colors.primary50 : colors.primary600}`,
                border: `2px solid ${state.selectProps.primary ? colors.primary25 : colors.primaryDark}`,
                // ! Not using box-shadows since it is shrunk at bottom.
                // boxShadow: `${state.selectProps.isDisabled ? '' : '0px 10px 15px -5px rgba(0, 101, 166, 0.4)'}`,
            } })),
        multiValueLabel: (css, state) => (Object.assign(Object.assign(Object.assign({}, css), TiDdFontStyles), { color: `${(state.selectProps.isDisabled && colors.primaryLight) ||
                (state.selectProps.primary ? colors.primary : colors.primaryBg)}` })),
        multiValueRemove: (css, state) => (Object.assign(Object.assign({}, css), { color: `${colors.primaryLight}`, paddingLeft: 0, paddingRight: 0, ':hover': {
                // cursor: 'pointer',
                color: `${state.selectProps.primary ? colors.primary : colors.primaryBg}`,
            } })),
        clearIndicator: (css, state) => (Object.assign(Object.assign({}, css), { padding: '8px 6px 8px 6px', color: `${colors.primaryLight}`, ':hover': {
                boxShadow: 'none',
                color: `${state.selectProps.primary ? colors.primaryBg : colors.primary}`,
            } })),
        indicatorSeparator: css => (Object.assign(Object.assign({}, css), { class: 'ti-indicatorSeparator', alignSelf: 'stretch', backgroundColor: 'none', width: 0, visibility: 'hidden' })),
        menuList: css => (Object.assign(Object.assign({}, css), { padding: '0px 6px', fontFamily: 'Roboto Flex', fontSize: '12px', fontWeight: '500' })),
        menu: (css, state) => (Object.assign(Object.assign({}, css), { class: 'ti-menu', background: `${state.selectProps.primary ? colors.primary : colors.primaryBg}`, boxShadow: 'none', backgroundColor: 'none', ':hover': { boxShadow: 'none', color: 'none', backgroundColor: 'none' }, margin: 0, padding: 0, borderRadius: `${state.selectProps.menuIsOpen ? '0 0 10px 10px' : '10px'}`, border: `4px solid ${state.selectProps.primary ? colors.primary600 : colors.primary100}`, borderTop: `${state.selectProps.menuIsOpen ? '0px' : ''}` })),
        option: css => (Object.assign(Object.assign({}, css), { margin: 0, padding: 0, background: 'none', ':hover': {
                boxShadow: 'none',
                background: 'none',
            } })),
    };
    return style;
}
exports.getStyles = getStyles;
const StyledDropdown = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  justify-items: start;
  column-gap: 10px;
`;
exports.StyledDropdown = StyledDropdown;
exports.default = getStyles;
//# sourceMappingURL=Dropdown.styles.js.map