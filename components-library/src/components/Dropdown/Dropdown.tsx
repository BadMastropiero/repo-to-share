import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';

import Select, {
  components,
  DropdownIndicatorProps,
  IndicatorSeparatorProps,
  OptionProps,
  GroupBase,
} from 'react-select';

// import makeAnimated from 'react-select/animated';
import DropdownProps, {TiOptions} from './Dropdown.interface';

import {Button} from '../Button';
import {ArrowDown, ArrowUp} from '../Icon';
import {Option} from '../Option';
import {getStyles, StyledDropdown} from './Dropdown.styles';
import {Typography} from '../Typography';

/**
 * The following snippet is required in order to pass our custom props
 * to the select returned by our Dropdown, as described in
 * [this comment](https://github.com/JedWatson/react-select/issues/4804#issuecomment-927223471)
 */
declare module 'react-select/dist/declarations/src/Select' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
    /**
     * Here we declare our custom props, which will be passed to the select
     * @param primary - Set the theme type.
     * @param optionWithCheckBox - If checkboxes are shown in options that populate the list.
     */
    primary?: boolean;
    optionWithCheckBox?: boolean;
  }
}

// TODO Maybe use this to animate the multivalues when closing
// const animatedComponents = makeAnimated();

const TiDropdownIndicator = ({...props}: DropdownIndicatorProps<TiOptions, true>) => (
  <components.DropdownIndicator {...props}>
    <Button
      beforeIcon={props.selectProps.menuIsOpen ? ArrowUp : ArrowDown}
      presetSize="small"
      primary={props.selectProps.primary}
      disabled={props.isDisabled}
      rounded
      text=""
    />
  </components.DropdownIndicator>
);

const TiIndicatorSeparator = ({innerProps}: IndicatorSeparatorProps<TiOptions, true>) => (
  <span {...innerProps} />
);

const TiOption = ({...props}: OptionProps<TiOptions, true>) => (
  <components.Option {...props}>
    <Option
      primary={props.selectProps.primary}
      text={props.label}
      selected={props.isSelected}
      noCheckbox={!props.selectProps.optionWithCheckBox}
    />
  </components.Option>
);

const Dropdown: React.ComponentType<DropdownProps> = ({
  name = 'ti-dropdown',
  disabled = false,
  primary = false,
  isMulti,
  defaultValue,
  isLoading = false,
  isClearable = false,
  isRtl = false,
  isSearchable = false,
  placeholder = 'Select..',
  options,
  menuIsOpen,
  closeMenuOnSelect = !isMulti,
  placeholderOut = false,
  renderSelected = false,
  setValue,
  value,
}) => {
  const {colors, typography} = useContext(ThemeContext);

  const customStyles = getStyles({colors, typography});

  return (
    <StyledDropdown>
      {placeholderOut && ( // optional external placeholder
        <Typography
          colorPreset="disable"
          preset="label"
          variant="p"
          style={{minWidth: 'min-content'}}
        >
          {placeholder}
        </Typography>
      )}
      <Select
        closeMenuOnSelect={closeMenuOnSelect}
        components={{
          DropdownIndicator: TiDropdownIndicator,
          IndicatorSeparator: TiIndicatorSeparator,
          Option: TiOption,
        }}
        options={options}
        isDisabled={disabled}
        isMulti={isMulti}
        defaultValue={defaultValue}
        isLoading={isLoading}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name={name}
        placeholder={placeholderOut ? '' : placeholder}
        styles={customStyles}
        onChange={newValue => {
          if (setValue) setValue(newValue);
        }}
        value={value}
        menuIsOpen={menuIsOpen}
        primary={primary}
        controlShouldRenderValue={renderSelected}
        optionWithCheckBox={!renderSelected}
        isClearable={isClearable}
        backspaceRemovesValue
        hideSelectedOptions={renderSelected}
      />
    </StyledDropdown>
  );
};

export default Dropdown;
