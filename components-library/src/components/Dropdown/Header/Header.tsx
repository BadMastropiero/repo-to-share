import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {Typography} from '../../Typography';
import Button from '../../Button/Button';

// Styles
import HeaderContainer from './Header.styles';

// Interfaces
import {HeaderProps} from './Header.interface';
import {ArrowDown, Icon, Translate} from '../../Icon';

const Header: React.FC<HeaderProps> = ({
  text,
  onClick,
  primary = false,
  disabled = false,
  placeholder = '',
}) => {
  const {colors} = useContext(ThemeContext);

  return (
    <HeaderContainer
      role="menubar"
      primary={primary}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      <Typography // Placeholder
        colorPreset="disable" // seems that is always same font color
        fontSize="12px"
        fontStyle="normal"
        fontWeight="500"
        lineHeight="14px"
        preset="content"
        variant="p"
      >
        {placeholder}
      </Typography>
      <Typography // Selection
        customColor={
          (primary && (disabled ? colors.primaryDark : colors.primaryBg)) ||
          (disabled ? colors.primary100 : colors.primary)
        }
        preset="content"
        fontSize="12px"
        fontStyle="normal"
        fontWeight="500"
        lineHeight="14px"
        variant="p"
        textAlign="right"
      >
        {text}
      </Typography>
      <Icon icon={Translate} primary={!primary} disabled={disabled} sizePreset="normal" />
      <Button
        // width="36px" height="36px"
        beforeIcon={ArrowDown}
        presetSize="small"
        rounded
        disabled={disabled}
        primary={primary}
      />
    </HeaderContainer>
  );
};

export default Header;
