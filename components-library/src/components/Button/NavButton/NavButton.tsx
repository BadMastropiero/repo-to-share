import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';

// Styles
import {StyledNavButton} from './NavButton.styles';

// Interfaces
import {NavButtonProps} from './NavButton.interface';

// Components
import {Icon, Tetraimpacts} from '../../Icon';
import {StyledIconContainer} from '../Button.styles';

/**
 * NavButton component
 */
const NavButton: React.FC<NavButtonProps> = ({
  primary = false,
  icon = Tetraimpacts,
  iconComponent,
  className,
  href,
  highlight = false,
  isActive = false,
  ...rest
}) => {
  const {colors} = useContext(ThemeContext);

  return (
    <StyledNavButton
      as={StyledNavButton}
      tag={href && 'link'}
      href={href}
      className={`ti-navbutton ${className || ''}`}
      primary={primary}
      disable={rest.disabled}
      isActive={isActive}
      highlight={highlight}
      beforeIconComponent={
        iconComponent || (
          <StyledIconContainer primary={primary} padding="10px">
            <Icon
              icon={icon}
              primary={!primary}
              disabled={rest.disabled}
              customColor={primary ? colors.primaryBg : colors.primary}
            />
          </StyledIconContainer>
        )
      }
      {...rest}
    />
  );
};

export default NavButton;
