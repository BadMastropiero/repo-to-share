import {CSSProperties} from 'react';

export default interface PaginationProps {
  dotsAmmount?: number;
  currentValue?: number;
  roundedSelectors?: boolean;
  disableNextPageButton?: boolean;
  disablePreviousPageButton?: boolean;
  hidePaginationButtons?: boolean;
  extraButton?: boolean;
  previousPage?: () => void;
  previousPageButtonStyle?: CSSProperties;
  nextPage?: () => void;
  nextPageButtonStyle?: CSSProperties;
  extraButtonAction?: () => void;
  extraButtonHref?: string;
  style?: CSSProperties;
  paginationClickable?: boolean;
  onClickDot?: (index: number) => void;
}
