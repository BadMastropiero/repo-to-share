import React from 'react';
import IconBase from '../../IconBase';
import {CustomIconProps} from '../../Icon.interface';

const ArrowUp: React.FC<CustomIconProps> = ({
  primary,
  customColor: color,
  disabled,
  width = '24px',
  height = '24px',
}) => (
  <IconBase
    className="ticons-arrow_up"
    primary={primary}
    color={color}
    disabled={disabled}
    height={height} // "24px"
    width={width} // "24px"
    viewBox="0 0 24 24"
  >
    <path d="M21.3375 17.3375C21.0375 17.6375 20.6709 17.7875 20.2375 17.7875C19.8042 17.7875 19.4375 17.6375 19.1375 17.3375L11.8125 10.0125L4.46252 17.3625C4.16252 17.6625 3.80419 17.8125 3.38752 17.8125C2.97086 17.8125 2.60419 17.6542 2.28752 17.3375C1.98752 17.0375 1.83752 16.6708 1.83752 16.2375C1.83752 15.8042 1.98752 15.4375 2.28752 15.1375L10.8875 6.5375C11.0209 6.40417 11.1669 6.30817 11.3255 6.2495C11.4835 6.1915 11.6459 6.1625 11.8125 6.1625C11.9792 6.1625 12.1415 6.1915 12.2995 6.2495C12.4582 6.30817 12.6042 6.40417 12.7375 6.5375L21.3625 15.1625C21.6625 15.4625 21.8125 15.8208 21.8125 16.2375C21.8125 16.6542 21.6542 17.0208 21.3375 17.3375Z" />
  </IconBase>
);

export default ArrowUp;
