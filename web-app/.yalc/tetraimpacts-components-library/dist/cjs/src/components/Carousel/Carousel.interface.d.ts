import { ReactNode } from 'react';
import { BaseProps } from '../Base.interface';
export interface CarouselBaseProps extends BaseProps<HTMLDivElement> {
    className?: string;
    children: ReactNode | ReactNode[];
    variant?: 'services' | 'blogs';
    infinite?: boolean;
    disabled?: boolean;
    slidesWidth?: number;
    slideIndex?: number;
    onSlideChange?: (index: number) => void;
    /** Only used in "services" variant for now */
    autoplayDelay?: number;
}
export interface CarouselProps extends CarouselBaseProps {
    children: ReactNode | ReactNode[];
    showControls?: boolean;
    showPagination?: boolean;
    paginationClickable?: boolean;
}
