import { ReactNode, FC } from 'react';
import { BaseProps } from '../../Base.interface';
import { CustomIconProps } from '../../Icon/Icon.interface';
export interface SocialButtonProps extends BaseProps<HTMLButtonElement> {
    /** Switch the main color in use, relative to theme context */
    primary?: boolean;
    /** Internal `Icon` to use */
    icon?: FC<CustomIconProps>;
    /** React functional component to use instead of `icon` prop */
    iconComponent?: ReactNode | ReactNode[];
    /** Preset sizes to control icon size and padding, does not have effect if using `iconComponent` */
    presetSize?: 'large' | 'normal' | 'small';
    /** Round borders */
    rounded?: boolean;
}
