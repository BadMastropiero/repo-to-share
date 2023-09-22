import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';

// Interfaces
import {TooltipProps} from './Tooltip.interface';

// Styles
import StyledTooltip from './Tooltip.styles';

import {Typography} from '../Typography';

const Tooltip: React.FC<TooltipProps> = ({
  children,
  /**
   * TODO Use id to cloneChildren with something like `data-for={id}` and set
   * it on StyledTooltip id, so children and ReactTooltip can be bound properly
   */
  id,
  /** The value of the main theme */
  primary = false,
  /** The text that will be shown in the tooltip */
  text,
  /** Preferred position of the tooltip, auto-overridden if edge conflicts */
  place,
  /** Time for showing the tooltip */
  delayShow = 500,
  /** Time for hiding the tooltip */
  delayHide = 500,
  // TODO Use the type to change the theme colors (if defined)
  /** Set the inner color theme of the tooltip */
  // type = 'dark',
  /** Prevent click events to be received in children */
  clickable = false,
  /** Tooltip's text color */
  customTextColor,
  /** Tooltip's background color */
  customBackColor,
  /** Tooltip's border color */
  customBorderColor,
  /** Tooltip's box-shadow color (rgba format recommended) */
  customShadowColor,
  ...rest
}) => {
  const {colors, tooltip} = useContext(ThemeContext);

  return (
    <>
      {children}
      <StyledTooltip
        primary={primary}
        place={place}
        id={id}
        effect="solid"
        border
        borderColor="black"
        delayShow={delayShow}
        delayHide={delayHide}
        clickable={clickable}
        customBackColor={customBackColor}
        customBorderColor={customBorderColor}
        customShadowColor={customShadowColor}
        className="ti-tooltip"
        role="tooltip"
        {...rest}
      >
        <Typography
          colorPreset="primary"
          customColor={
            (customTextColor && customTextColor) ||
            (primary ? colors.primaryBg : tooltip.colors.tooltipText)
          }
          fontFamily="Roboto Flex"
          fontSize="14px"
          fontWeight="400"
          lineHeight="18px"
          preset="content"
          textAlign="center"
          variant=""
        >
          {text}
        </Typography>
      </StyledTooltip>
    </>
  );
};

export default Tooltip;
