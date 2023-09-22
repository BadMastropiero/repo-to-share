import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';

// Styles
import {StyledSocialButton} from './SocialButton.styles';

// Interfaces
import {SocialButtonProps} from './SocialButton.interface';

// Components
import {Facebook, Icon} from '../../Icon';
import {StyledIconContainer} from '../Button.styles';
import {IconSizeProp} from '../../Icon/Icon.interface';

const mapSizeToIconPadding = {
  large: '20px',
  normal: '16px',
  small: '10px',
};

const mapSizeToIconSize = {
  large: 'largeBtn',
  normal: 'normalBtn',
  small: 'small',
};

/**
 * SocialButton component
 */
const SocialButton: React.FC<SocialButtonProps> = ({
  primary = false,
  presetSize = 'large',
  rounded = true,
  icon = Facebook,
  iconComponent,
  ...rest
}) => {
  const {colors} = useContext(ThemeContext);

  return (
    <StyledSocialButton
      // beforeIcon={icon}
      afterIconComponent={
        iconComponent || (
          <StyledIconContainer
            primary={primary}
            padding={presetSize ? mapSizeToIconPadding[presetSize] : undefined}
          >
            <Icon
              icon={icon}
              primary={!primary}
              disabled={false}
              customColor={primary ? colors.primaryBg : colors.primary}
              sizePreset={
                (presetSize
                  ? mapSizeToIconSize[presetSize] || 'largeBtn'
                  : 'largeBtn') as IconSizeProp
              }
            />
          </StyledIconContainer>
        )
      }
      primary={primary}
      rounded={rounded}
      {...rest}
    />
  );
};

export default SocialButton;
