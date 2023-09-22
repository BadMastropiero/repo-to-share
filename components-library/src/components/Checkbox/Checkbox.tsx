import React from 'react';

// Styles
import {CheckboxContainer, Icon, StyledCheckbox} from './Checkbox.styles';

// Interfaces
import {CheckboxProps} from './Checkbox.interface';

const Checkbox: React.FC<CheckboxProps> = ({
  primary = false,
  checked,
  onChange,
  height = '20px',
  width = '20px',
  disabled,
  ...rest
}) => (
  <CheckboxContainer>
    <StyledCheckbox
      primary={primary}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      height={height}
      width={width}
      disabled={disabled}
      {...rest}
    />
    {checked && <Icon primary={!primary} disabled={false} height={height} width={width} />}
  </CheckboxContainer>
);

export default Checkbox;
