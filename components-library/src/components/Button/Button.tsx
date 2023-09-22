import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';

// Styles
import {StyledButton, StyledIconContainer, StyledTextButton} from './Button.styles';

// Interfaces
import {ButtonProps} from './Button.interface';
import {IconSizeProp} from '../Icon/Icon.interface';
// Components
import {Typography} from '../Typography';
import {Icon} from '../Icon';
import Ripple from '../Ripple/Ripple';

const mapSizeToTypographyPreset = {
  large: 'buttonLG',
  normal: 'button',
  small: 'buttonSM',
};

const mapSizeToIconPadding = {
  large: '14px',
  normal: '10px',
  small: '6px',
};

const mapSizeToIconSize = {
  large: 'normal',
  normal: 'normalBtn',
  small: 'small',
};

const mapPresetTypeToButtonType = {
  text: StyledTextButton,
  default: StyledButton,
};

const Button: React.FC<ButtonProps> = ({
  primary = false,
  disabled = false,
  afterIcon,
  afterIconComponent,
  beforeIcon,
  beforeIconComponent,
  text,
  textStyle,
  presetSize = 'normal',
  rounded = true,
  className,
  presetType = 'default',
  style,
  href,
  ...rest
}) => {
  const {colors} = useContext(ThemeContext);

  const ButtonToRender = mapPresetTypeToButtonType[presetType] || mapPresetTypeToButtonType.default;

  let textColor = 'secondary';
  if ((primary && presetType !== 'text') || (presetType === 'text' && !primary)) {
    textColor = disabled ? colors.primaryDark : 'secondary';
  } else {
    textColor = disabled ? colors.primary200 : colors.primaryDark;
  }

  let iconColor = null;
  if (primary) {
    iconColor = disabled ? colors.primary : null;
  } else {
    iconColor = disabled ? colors.primaryBg : colors.primary;
  }

  return (
    <ButtonToRender
      tag={href ? 'link' : 'button'}
      href={href}
      className={`ti-button ${className || ''}`}
      primary={primary}
      disabled={disabled}
      rounded={rounded}
      style={{
        textDecoration: href ? 'unset' : undefined,
        cursor: href ? 'pointer' : undefined,
        width: href ? 'fit-content' : undefined,
        ...style,
      }}
      {...rest}
    >
      {beforeIcon && !beforeIconComponent && presetType !== 'text' && (
        <StyledIconContainer
          primary={primary}
          padding={presetSize ? mapSizeToIconPadding[presetSize] : undefined}
        >
          <Icon
            icon={beforeIcon}
            primary={!primary}
            disabled={false}
            customColor={iconColor}
            sizePreset={
              (presetSize
                ? mapSizeToIconSize[presetSize] || 'normalBtn'
                : 'normalBtn') as IconSizeProp
            }
          />
        </StyledIconContainer>
      )}
      {beforeIconComponent}
      {text && (
        <Typography
          variant="p"
          customPreset={presetSize ? mapSizeToTypographyPreset[presetSize] || 'button' : 'button'}
          customColor={textColor}
          style={textStyle}
        >
          {text}
        </Typography>
      )}
      {afterIcon && !afterIconComponent && presetType !== 'text' && (
        <StyledIconContainer
          primary={primary}
          padding={presetSize ? mapSizeToIconPadding[presetSize] : undefined}
        >
          <Icon
            icon={afterIcon}
            primary={!primary}
            disabled={false}
            customColor={iconColor}
            sizePreset={
              (presetSize
                ? mapSizeToIconSize[presetSize] || 'normalBtn'
                : 'normalBtn') as IconSizeProp
            }
          />
        </StyledIconContainer>
      )}
      {afterIconComponent}
      <Ripple color={primary ? colors.primary200 : colors.primaryBg} duration={1000} />
    </ButtonToRender>
  );
};

export default Button;
