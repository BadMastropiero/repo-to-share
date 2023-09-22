import {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Checkbox from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Base: ComponentStory<typeof Checkbox> = args => {
  const [checked, setChecked] = useState<boolean>(false);

  const {primary, width, height, disabled} = args;

  return (
    <Checkbox
      height={height}
      width={width}
      disabled={disabled}
      primary={primary}
      checked={checked}
      onChange={() => {
        setChecked(!checked);
      }}
    />
  );
};

Base.args = {
  primary: true,
  disabled: false,
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1350',
  },
};
