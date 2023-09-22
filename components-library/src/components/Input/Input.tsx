import React, {useContext, useState, useEffect} from 'react';
import {ThemeContext} from 'styled-components';

// Components
import MaskedInput from 'react-text-mask';
import {Typography} from '../Typography';

// Styles
import {StyledInput, InputWrapper, InputLabel, InputLabelWrapper} from './Input.styles';

// Interfaces
import {InputProps} from './Input.interface';
import {Icon} from '../Icon';

const Input: React.FC<InputProps> = ({
  primary,
  disabled = false,
  text,
  value: valueProp,
  onChange,
  className,
  required,
  mask: maskProp = false,
  maskPreset,
  afterIcon,
  afterComponent,
  labelLineNumbers,
  ...rest
}) => {
  let mask = maskProp;
  const {input: inputTheme} = useContext(ThemeContext);
  if (inputTheme) {
    const maskPresetsTheme = inputTheme.maskPresets;
    if (maskPreset) mask = maskPresetsTheme[maskPreset] || false;
  }

  const [value, setValue] = useState(valueProp || '');
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);
    if (onChange) onChange(e);
  };

  useEffect(() => {
    if (valueProp === value || !valueProp) return;
    setValue(valueProp);
  }, [valueProp]);

  return (
    <Typography style={{overflow: 'visible'}} fontSize="20px" lineHeight="200%" padding="0">
      <InputWrapper disabled={disabled} primary={primary} className="ti-input-wrapper">
        <InputLabelWrapper>
          <MaskedInput
            mask={mask}
            className={`${value || value !== '' ? 'noEmpty' : ''} ${className || ''}`}
            disabled={disabled}
            value={valueProp}
            onChange={onInputChange}
            onFocus={() => {
              setFocused(true);
            }}
            onMouseEnter={() => {
              setHovered(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
            onBlur={() => {
              setFocused(false);
            }}
            required={required}
            {...rest}
            render={(ref, {defaultValue, ...restP}) => (
              <StyledInput
                as="input"
                ref={ref as (instance: HTMLInputElement | null) => void}
                $primary={primary}
                value={valueProp}
                defaultValue={!valueProp && defaultValue ? defaultValue : undefined}
                type="text"
                {...restP}
              />
            )}
          />
          <InputLabel
            lineNumbers={labelLineNumbers || 1}
            primary={primary}
            disabled={disabled}
            colorPreset="disable"
            variant="label"
            className={(!value || value === '') && !focused && !hovered ? 'as-placeholder' : ''}
          >
            {text} {required && '*'}
          </InputLabel>
        </InputLabelWrapper>
        {afterIcon && <Icon primary={primary} icon={afterIcon} />}
        {afterComponent}
      </InputWrapper>
    </Typography>
  );
};

export default Input;
