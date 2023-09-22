import React from 'react';
import IconBase from '../../IconBase';
import {CustomIconProps} from '../../Icon.interface';

const Tetraimpacts: React.FC<CustomIconProps> = ({
  primary,
  customColor,
  disabled,
  width = '24px',
  height = '24px',
  className,
  ...rest
}) => (
  <IconBase
    className={`ticons-tetraimpacts ${className}`}
    primary={primary}
    color={customColor}
    disabled={disabled}
    height={height} // "24px"
    width={width} // "24px"
    viewBox="0 0 24 24"
    {...rest}
  >
    <path d="M15.8262 1.79206C17.3391 0.522602 19.6457 1.59819 19.6457 3.57311L19.6457 20.4048C19.6457 22.5755 16.935 23.5621 15.5397 21.8993L11.1914 16.7174L4.4268 16.7174C2.25618 16.7174 1.26951 14.0066 2.93233 12.6114L15.8262 1.79206ZM16.9957 4.27007L5.31973 14.0674L11.343 14.0674C12.0302 14.0675 12.6822 14.3715 13.124 14.8979L16.9957 19.5119L16.9957 4.27007Z" />
  </IconBase>
);

export default Tetraimpacts;
