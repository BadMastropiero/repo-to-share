import React from 'react';
import IconBase from '../../IconBase';
import {CustomIconProps} from '../../Icon.interface';

const ArrowRight: React.FC<CustomIconProps> = ({
  primary,
  customColor: color,
  disabled,
  width = '24px',
  height = '24px',
}) => (
  <IconBase
    className="ticons-arrow_right"
    primary={primary}
    color={color}
    disabled={disabled}
    height={height} // "24px"
    width={width} // "24px"
    viewBox="0 0 24 24"
  >
    <path d="M6.475 21.5C6.175 21.2 6.025 20.8333 6.025 20.4C6.025 19.9667 6.175 19.6 6.475 19.3L13.8 11.975L6.45 4.625C6.15 4.325 6 3.96667 6 3.55C6 3.13333 6.15833 2.76667 6.475 2.45C6.775 2.15 7.14167 2 7.575 2C8.00833 2 8.375 2.15 8.675 2.45L17.275 11.05C17.4083 11.1833 17.5043 11.3293 17.563 11.488C17.621 11.646 17.65 11.8083 17.65 11.975C17.65 12.1417 17.621 12.304 17.563 12.462C17.5043 12.6207 17.4083 12.7667 17.275 12.9L8.65 21.525C8.35 21.825 7.99167 21.975 7.575 21.975C7.15833 21.975 6.79167 21.8167 6.475 21.5Z" />
  </IconBase>
);

export default ArrowRight;
