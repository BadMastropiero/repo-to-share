import {BaseProps} from '../../Base.interface';

export interface DeckCarouselProps extends BaseProps<HTMLDivElement> {
  showControls?: boolean;
  slideIndex?: number;
  infinite?: boolean;
  onSlideChange?: (index: number) => void;
  autoplayDelay?: number;
}
