import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';

// Interfaces
import BookmarkProps from './Bookmark.interface';

// Styles
import StyledBookmark, {BmIconContainer} from './Bookmark.styles';

// Components
import {Icon} from '../Icon';
import {Typography} from '../Typography';

const Bookmark: React.FC<BookmarkProps> = ({
  text,
  primary,
  beforeIcon,
  afterIcon,
  className,
  href,
  children,
  alwaysShowRibbon,
  ...rest
}) => {
  const {colors} = useContext(ThemeContext);

  const showRightRibbon = afterIcon || alwaysShowRibbon === 'both' || alwaysShowRibbon === 'right';
  const showLeftRibbon = beforeIcon || alwaysShowRibbon === 'both' || alwaysShowRibbon === 'left';
  return (
    <StyledBookmark
      as={StyledBookmark}
      tag={href && 'link'}
      href={href}
      primary={primary}
      className={`ti-bookmark ${className}`}
      {...rest}
    >
      {showLeftRibbon && (
        <BmIconContainer primary={primary} className="ti-bookmark-icon-container before">
          {beforeIcon && (
            <Icon
              icon={beforeIcon}
              primary={!primary}
              width="24px"
              height="24px"
              className="ti-bookmark-icon before"
            />
          )}
        </BmIconContainer>
      )}
      {text && (
        <Typography
          className="ti-bookmark-text"
          customColor={primary ? colors.primaryBg : colors.primary}
          fontSize="20px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="200%"
          preset="content"
          variant="p"
          style={{
            padding: '0 20px',
            width: '100%',
            alignSelf: 'center',
          }}
        >
          {text}
        </Typography>
      )}
      {children}
      {showRightRibbon && (
        <BmIconContainer primary={primary} className="ti-bookmark-icon-container after">
          {afterIcon && (
            <Icon
              icon={afterIcon}
              primary={!primary}
              width="24px"
              height="24px"
              className="ti-bookmark-icon after"
            />
          )}
        </BmIconContainer>
      )}
    </StyledBookmark>
  );
};

export default Bookmark;
