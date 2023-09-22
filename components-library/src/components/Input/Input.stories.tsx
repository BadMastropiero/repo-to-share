import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button} from '../Button';
import {Send} from '../Icon';

import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Base: ComponentStory<typeof Input> = args => {
  const {...rest} = args;

  return <Input {...rest} />;
};

Base.args = {
  disabled: false,
  text: 'Write here',
  required: false,
  type: 'text',
  primary: true,
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A2838',
  },
};

export const WithButton: ComponentStory<typeof Input> = () => (
  <Input
    primary
    text="Your input with button"
    afterComponent={
      <Button
        style={{
          height: '36px',
          aspectRatio: 1,
        }}
        presetSize="normal"
        afterIcon={Send}
        primary
        rounded
      />
    }
  />
);

export const Phone: ComponentStory<typeof Input> = ({value, onChange}) => (
  <Input
    primary
    type="tel"
    text="Your phone number"
    maskPreset="phone"
    value={value}
    onChange={onChange}
  />
);

export const Email: ComponentStory<typeof Input> = ({value, onChange}) => (
  <Input
    type="tel"
    text="Your e-mail address"
    required
    maskPreset="email"
    value={value}
    onChange={onChange}
    primary
  />
);

export const Number: ComponentStory<typeof Input> = ({value, onChange}) => (
  <Input
    type="text"
    text="Your expected return"
    maskPreset="number"
    value={value}
    onChange={onChange}
    primary
  />
);
