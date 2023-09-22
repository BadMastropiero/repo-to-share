import React from 'react';

// Styles
import PillContainer from './Pill.styles';

// Interfaces
import {PillBaseProps} from './Pill.interface';

const PillBase: React.FC<PillBaseProps> = ({
  primary = false,
  disabled = false,
  children,
  clickable,
  ...rest
}) => (
  <PillContainer
    tag={clickable ? 'button' : 'div'}
    role="listitem"
    primary={primary}
    disabled={disabled}
    {...rest}
  >
    {children}
  </PillContainer>
);

export default PillBase;
