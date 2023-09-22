import React from 'react';
import IconBase from '../../IconBase';
import {CustomIconProps} from '../../Icon.interface';

const ArrowDown: React.FC<CustomIconProps> = ({
  primary,
  customColor: color,
  disabled,
  width = '24px',
  height = '24px',
}) => (
  <IconBase
    className="ticons-arrow_down"
    primary={primary}
    color={color}
    disabled={disabled}
    height={height} // "24px"
    width={width} // "24px"
    viewBox="0 0 24 24"
  >
    <path d="M21.3625 8.8126L12.7625 17.4126C12.6292 17.5459 12.4832 17.6416 12.3245 17.6996C12.1665 17.7583 12.0042 17.7876 11.8375 17.7876C11.6709 17.7876 11.5085 17.7583 11.3505 17.6996C11.1919 17.6416 11.0459 17.5459 10.9125 17.4126L2.28752 8.7876C1.98752 8.4876 1.83752 8.12926 1.83752 7.7126C1.83752 7.29593 1.99586 6.92926 2.31252 6.6126C2.61252 6.3126 2.97919 6.1626 3.41252 6.1626C3.84586 6.1626 4.21252 6.3126 4.51252 6.6126L11.8375 13.9376L19.1875 6.5876C19.4875 6.2876 19.8459 6.1376 20.2625 6.1376C20.6792 6.1376 21.0459 6.29593 21.3625 6.6126C21.6625 6.9126 21.8125 7.27926 21.8125 7.7126C21.8125 8.14593 21.6625 8.5126 21.3625 8.8126Z" />
  </IconBase>
);

export default ArrowDown;
