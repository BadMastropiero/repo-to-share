import {ComponentMeta, ComponentStory} from '@storybook/react';
import Icon from './Icon';

import {PhoneInCall} from '.';

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Base: ComponentStory<typeof Icon> = args => {
  const {primary, customColor: color, disabled, height, width, sizePreset: size} = args;

  return (
    <Icon
      primary={primary}
      customColor={color}
      disabled={disabled}
      height={height}
      width={width}
      sizePreset={size}
      icon={PhoneInCall}
    />
  );
};

Base.args = {
  primary: true,
  disabled: false,
  customColor: undefined,
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1361',
  },
};

export const BigIcon: ComponentStory<typeof Icon> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <Icon
      primary={primary}
      customColor={color}
      disabled={disabled}
      height={height}
      width={width}
      sizePreset="xl"
      icon={PhoneInCall}
    />
  );
};

BigIcon.args = Base.args;
BigIcon.parameters = Base.parameters;
