import React, { ReactNode } from 'react';
import { BaseProps } from '../Base.interface';
export declare type IconSizeProp = 'xs' | 'small' | 'normal' | 'large' | 'xl' | 'normalBtn';
export interface SuperIconProps extends BaseProps<SVGSVGElement> {
    sizePreset?: IconSizeProp;
    icon: React.FC<CustomIconProps>;
    primary?: boolean;
    disabled?: boolean;
    width?: string;
    height?: string;
    customColor?: string;
}
export interface BaseIconProps extends BaseProps<SVGSVGElement> {
    primary?: boolean;
    disabled?: boolean;
    width?: string;
    height?: string;
    viewBox?: string;
    children: ReactNode;
}
export interface CustomIconProps extends BaseProps<SVGSVGElement> {
    primary?: boolean;
    disabled?: boolean;
    width?: string;
    height?: string;
    customColor?: string;
}
