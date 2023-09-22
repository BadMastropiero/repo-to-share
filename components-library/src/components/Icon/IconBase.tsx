import React from 'react';

// Interfaces
import {BaseIconProps} from './Icon.interface';

// Styles
import Svg from './IconBase.styles';

const IconBase: React.FC<BaseIconProps> = ({
  primary,
  disabled,
  height,
  width,
  viewBox,
  children,
  ...rest
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    primary={primary}
    disabled={disabled}
    width={width}
    height={height}
    viewBox={viewBox}
    {...rest}
  >
    {children}
  </Svg>
);

export default IconBase;
