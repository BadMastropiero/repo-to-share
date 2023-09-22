import React from 'react';
import IconBase from '../../IconBase';
import {CustomIconProps} from '../../Icon.interface';

const Send: React.FC<CustomIconProps> = ({
  primary,
  customColor: color,
  disabled,
  width = '24px',
  height = '24px',
}) => (
  <IconBase
    className="ticons-send"
    primary={primary}
    color={color}
    disabled={disabled}
    height={height} // "24px"
    width={width} // "24px"
    viewBox="0 0 24 24"
  >
    <path d="M2.44995 18.5V5.35C2.44995 4.88334 2.64162 4.52067 3.02495 4.262C3.40828 4.004 3.81662 3.96667 4.24995 4.15L19.775 10.725C20.3083 10.9583 20.575 11.3583 20.575 11.925C20.575 12.4917 20.3083 12.8917 19.775 13.125L4.24995 19.7C3.81662 19.8833 3.40828 19.8457 3.02495 19.587C2.64162 19.329 2.44995 18.9667 2.44995 18.5ZM4.69995 17.05L16.8 11.9L4.69995 6.75V10.3L11.05 11.9L4.69995 13.5V17.05Z" />
  </IconBase>
);

export default Send;
