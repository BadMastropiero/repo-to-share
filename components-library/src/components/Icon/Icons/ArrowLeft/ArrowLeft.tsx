import React from 'react';
import IconBase from '../../IconBase';
import {CustomIconProps} from '../../Icon.interface';

const ArrowLeft: React.FC<CustomIconProps> = ({
  primary,
  customColor,
  disabled,
  width = '24px',
  height = '24px',
  className,
  ...rest
}) => (
  <IconBase
    className={`ticons-arrow_left ${className}`}
    primary={primary}
    color={customColor}
    disabled={disabled}
    height={height} // "24px"
    width={width} // "24px"
    viewBox="0 0 24 24"
    {...rest}
  >
    <path d="M14.975 21.5L6.375 12.9C6.24167 12.7666 6.146 12.6206 6.088 12.462C6.02933 12.304 6 12.1416 6 11.975C6 11.8083 6.02933 11.646 6.088 11.488C6.146 11.3293 6.24167 11.1833 6.375 11.05L15 2.42498C15.3 2.12498 15.6583 1.97498 16.075 1.97498C16.4917 1.97498 16.8583 2.13331 17.175 2.44998C17.475 2.74998 17.625 3.11664 17.625 3.54998C17.625 3.98331 17.475 4.34998 17.175 4.64998L9.85 11.975L17.2 19.325C17.5 19.625 17.65 19.9833 17.65 20.4C17.65 20.8166 17.4917 21.1833 17.175 21.5C16.875 21.8 16.5083 21.95 16.075 21.95C15.6417 21.95 15.275 21.8 14.975 21.5Z" />
  </IconBase>
);

export default ArrowLeft;
