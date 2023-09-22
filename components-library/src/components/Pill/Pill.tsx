import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {Typography} from '../Typography';

// Interfaces
import {PillProps} from './Pill.interface';
import {Icon} from '../Icon';
import PillBase from './PillBase';

const Pill: React.FC<PillProps> = ({
  text,
  onAfterIconClick,
  removable,
  clickable,
  primary,
  disabled,
  beforeIcon,
  afterIcon,
  onClick,
  afterIconStyles,
  ...rest
}) => {
  const {colors} = useContext(ThemeContext);

  return (
    <PillBase
      primary={primary}
      disabled={disabled}
      onClick={!clickable || disabled ? undefined : onClick}
      {...rest}
    >
      {beforeIcon && (
        <Icon icon={beforeIcon} primary={!primary} disabled={disabled} width="14px" height="14px" />
      )}
      <Typography
        customColor={
          (disabled && colors.primaryLight) || (primary ? colors.primaryBg : colors.primary)
        }
        fontSize="12px"
        fontStyle="normal"
        fontWeight="500"
        lineHeight="14px"
        preset="content"
        variant="p"
        style={{userSelect: 'none'}}
      >
        {text}
      </Typography>
      {afterIcon && (
        <Icon
          icon={afterIcon}
          style={afterIconStyles}
          primary={!primary}
          disabled={disabled}
          height="10px"
          width="10px"
          onClick={disabled ? undefined : onAfterIconClick}
        />
      )}
    </PillBase>
  );
};

export default Pill;
