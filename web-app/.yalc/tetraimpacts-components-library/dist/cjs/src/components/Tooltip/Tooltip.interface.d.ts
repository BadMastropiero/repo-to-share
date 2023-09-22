import React from 'react';
import { BaseProps } from '../Base.interface';
export interface TooltipProps extends BaseProps<HTMLDivElement> {
    children: React.ReactNode | React.ReactNode[];
    primary?: boolean;
    text?: string;
    id: string;
    place?: 'top' | 'right' | 'bottom' | 'left';
    delayShow?: number;
    delayHide?: number;
    clickable?: boolean;
    customTextColor?: string;
    customBackColor?: string;
    customBorderColor?: string;
    customShadowColor?: string;
}
