import {ArrowLeft, ArrowRight, Button, Dots} from 'tetraimpacts-components-library';

// Hooks
import {useTranslation} from 'next-i18next';

// Components
import Link from 'components/Link/Link';

// Styles
import {ButtonContainer, HandlePagination, PaginationContainer} from './Pagination.styles';

// Interfaces
import PaginationProps from './Pagination.interface';

export default function Pagination({
  currentValue,
  dotsAmmount,
  roundedSelectors,
  extraButton,
  disableNextPageButton,
  disablePreviousPageButton,
  hidePaginationButtons = false,
  previousPage,
  nextPage,
  extraButtonAction,
  extraButtonHref,
  style,
  nextPageButtonStyle,
  previousPageButtonStyle,
  paginationClickable,
  onClickDot,
}: PaginationProps) {
  const {t} = useTranslation();
  return (
    <PaginationContainer style={style}>
      <HandlePagination>
        {!hidePaginationButtons ? (
          <ButtonContainer>
            <Button
              aria-label={`${t('previous-page')}`}
              className="pagination-prev-button"
              name="previous-button"
              style={{
                cursor: !disablePreviousPageButton ? 'pointer' : undefined,
                ...previousPageButtonStyle,
              }}
              afterIcon={ArrowLeft}
              rounded={roundedSelectors || false}
              onClick={previousPage}
              disabled={disablePreviousPageButton || false}
            />
            <Button
              aria-label={`${t('next-page')}`}
              className="pagination-next-button"
              name="next-button"
              style={{
                cursor: !disableNextPageButton ? 'pointer' : undefined,
                ...nextPageButtonStyle,
              }}
              afterIcon={ArrowRight}
              rounded={roundedSelectors || false}
              onClick={nextPage}
              disabled={disableNextPageButton || false}
            />
          </ButtonContainer>
        ) : null}
        <Dots
          ammount={dotsAmmount || 0}
          value={currentValue || 0}
          className="pagination-total-dots"
          setValue={onClickDot && paginationClickable ? val => onClickDot(val + 1) : undefined}
        />
      </HandlePagination>
      {extraButton && (
        <Link href={extraButtonHref ?? ''}>
          <Button
            text={`${t('pagination-see-more')}`}
            afterIcon={ArrowRight}
            rounded
            primary
            onClick={extraButtonAction}
            style={{cursor: extraButtonHref && 'pointer'}}
          />
        </Link>
      )}
    </PaginationContainer>
  );
}
