import {ComponentMeta, ComponentStory} from '@storybook/react';
import {useState} from 'react';

import Dropdown from './Dropdown';

import testingOptions from './optionsTesting';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export const Base: ComponentStory<typeof Dropdown> = args => {
  const {
    primary,
    disabled,
    placeholder,
    text,
    isMulti,
    isLoading,
    isClearable,
    isRtl,
    isSearchable,
    placeholderOut,
    renderSelected,
  } = args;
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <Dropdown
      primary={primary}
      disabled={disabled}
      placeholder={placeholder}
      onClick={() => {
        setSelected(!selected);
      }}
      isMulti={isMulti}
      text={text}
      options={testingOptions}
      defaultValue={[testingOptions[0], testingOptions[1]]}
      isLoading={isLoading}
      isClearable={isClearable}
      isRtl={isRtl}
      isSearchable={isSearchable}
      placeholderOut={placeholderOut}
      renderSelected={renderSelected}
    />
  );
};

Base.args = {
  primary: true,
  disabled: false,
  placeholder: 'Select...',
  isMulti: true,
  isLoading: false,
  isClearable: undefined,
  isRtl: undefined,
  isSearchable: undefined,
  placeholderOut: false,
  renderSelected: true,
};

Base.parameters = {
  design: {
    type: 'figma',
    // url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1562',
  },
};
