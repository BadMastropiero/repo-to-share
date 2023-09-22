import { BaseProps } from '../Base.interface';
export interface CardProps extends BaseProps<HTMLDivElement> {
    variant?: 'service' | 'blog';
    disabled?: boolean;
    animateCardFlip?: 'flip';
}
