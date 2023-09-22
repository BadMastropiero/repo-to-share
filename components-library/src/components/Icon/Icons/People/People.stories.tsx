import {ComponentMeta, ComponentStory} from '@storybook/react';
import People from './People';

export default {
  title: 'Icons/People',
  component: People,
} as ComponentMeta<typeof People>;

export const Base: ComponentStory<typeof People> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <People
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
  width: '31px',
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/', // TODO: Get the icon's url
  },
};
