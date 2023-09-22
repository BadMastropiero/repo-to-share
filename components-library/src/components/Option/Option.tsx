import React from 'react';
import {Typography} from '../Typography';
import {Checkbox} from '../Checkbox';

// Styles
import OptionContainer from './Option.styles';

// Interfaces
import {OptionProps} from './Option.interface';

const Option: React.FC<OptionProps> = ({
  selected,
  text,
  onClick,
  primary = false,
  disabled = false,
  noCheckbox,
}) => (
  <OptionContainer
    role="option"
    primary={primary}
    disabled={disabled}
    onClick={disabled ? undefined : onClick}
    noCheckbox={noCheckbox}
  >
    {noCheckbox || <Checkbox checked={selected} primary={primary} />}
    <Typography
      colorPreset="disable" // seems that is always same font color
      fontSize="12px"
      fontStyle="normal"
      fontWeight={selected ? '800' : '500'}
      lineHeight="14px"
      preset="content"
      textTransform="uppercase"
      textAlign="right"
      variant="p"
    >
      {text}
    </Typography>
  </OptionContainer>
);

export default Option;
