/// <reference types="react" />
import { BaseProps } from '../../Base.interface';
import { CustomIconProps } from '../../Icon/Icon.interface';
export interface NavButtonProps extends BaseProps<HTMLButtonElement> {
    /** Switch the main color in use, relative to theme context */
    primary?: boolean;
    /** Internal `Icon` to use */
    icon?: React.FC<CustomIconProps>;
    /** React functional component to use instead of `icon` prop */
    iconComponent?: React.FC;
    /** Button's href */
    href?: string;
    /** Button's text */
    text?: string;
    /** Highlight the button's border to show it's active */
    isActive?: boolean;
    /** Switch the background from transparent to colored */
    highlight?: boolean;
}
