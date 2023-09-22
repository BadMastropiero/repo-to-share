import {ComponentMeta, ComponentStory} from '@storybook/react';
import Visibility from './Visibility';

export default {
  title: 'Icons/Visibility',
  component: Visibility,
} as ComponentMeta<typeof Visibility>;

export const Base: ComponentStory<typeof Visibility> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <Visibility
      primary={primary}
      customColor={color}
      disabled={disabled}
      height={height}
      width={width}
    />
  );
};

Base.args = {
  primary: true,
  disabled: false,
  height: '24px',
  width: '24px',
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A16423&t=KrcOfRZv8sH0ktxH-4',
  },
};
