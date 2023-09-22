import { ReactNode, CSSProperties } from 'react';
import { CustomIconProps } from '../Icon/Icon.interface';
import { BaseProps } from '../Base.interface';
export interface ButtonProps extends BaseProps<HTMLButtonElement> {
    primary?: boolean;
    disabled?: boolean;
    afterIcon?: React.FC<CustomIconProps>;
    afterIconComponent?: ReactNode | ReactNode[];
    beforeIcon?: React.FC<CustomIconProps>;
    beforeIconComponent?: ReactNode | ReactNode[];
    presetType?: 'text' | 'default';
    text?: string;
    textStyle?: CSSProperties;
    presetSize?: 'large' | 'normal' | 'small';
    rounded?: boolean;
    href?: string;
}
