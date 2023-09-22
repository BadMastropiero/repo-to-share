import { StylesConfig } from 'react-select';
import { TiOptions } from './Dropdown.interface';
export declare function getStyles({ colors, typography, }: {
    colors: Record<string, unknown>;
    typography: Record<string, Record<string, Record<string, unknown>>>;
}): StylesConfig<TiOptions, boolean, import("react-select").GroupBase<TiOptions>>;
declare const StyledDropdown: import("styled-components").StyledComponent<"div", any, {}, never>;
export { StyledDropdown };
export default getStyles;
