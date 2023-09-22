import { ReactNode } from 'react';
import { BaseProps } from '../Base.interface';
import { CustomIconProps } from '../Icon/Icon.interface';
declare type Mask = false | (string | RegExp)[];
export interface InputProps extends BaseProps<HTMLInputElement> {
    primary?: boolean;
    maskPreset?: 'phone' | 'email' | 'text' | 'number';
    text?: string;
    mask?: Mask | ((val: string) => Mask);
    afterIcon?: React.FC<CustomIconProps>;
    afterComponent?: ReactNode;
    labelLineNumbers?: number;
}
export {};
