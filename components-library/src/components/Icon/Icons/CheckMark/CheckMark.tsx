import React from 'react';
import IconBase from '../../IconBase';
import {CustomIconProps} from '../../Icon.interface';

const CheckMark: React.FC<CustomIconProps> = ({
  primary,
  customColor: color,
  disabled,
  width = '24px',
  height = '24px',
  className = '',
}) => (
  <IconBase
    className={`ticons-check_mark ${className}`}
    primary={primary}
    color={color}
    disabled={disabled}
    height={height} // "24px"
    width={width} // "24px"
    viewBox="0 0 20 20"
  >
    <path d="M15 7.49999L8.76106 13.7389L5 9.97786L6.23894 8.73892L8.76106 11.261L13.7611 6.26105L15 7.49999Z" />
  </IconBase>
);

export default CheckMark;
