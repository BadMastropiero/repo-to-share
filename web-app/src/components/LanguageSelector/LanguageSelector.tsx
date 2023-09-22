// Styles
import {Fragment} from 'react';
import ILanguageSelector from './LanguageSelector.interface';

// Interfaces
import {Option, Divider, StyledSelectorContainer} from './LanguageSelector.styles';

export default function LanguageSelector({
  options,
  setSelected,
  selected,
  primary,
  style,
}: ILanguageSelector) {
  return (
    <StyledSelectorContainer>
      {options.length &&
        options.map((lng, idx) => {
          const isLngSelected = selected?.label === lng.label;
          return (
            // eslint-disable-next-line react/jsx-fragments
            <Fragment key={lng.value}>
              {/* Using Fragment explicitly to add unique key on each child */}
              <Option
                style={style}
                isPrimary={primary}
                isSelected={isLngSelected}
                hoverable={!isLngSelected}
                onClick={() => {
                  if (isLngSelected) return;
                  setSelected(lng);
                }}
              >
                {lng.label}
              </Option>
              {idx !== options.length - 1 && <Divider isPrimary={primary} />}
            </Fragment>
          );
        })}
    </StyledSelectorContainer>
  );
}
