import {ComponentMeta, ComponentStory} from '@storybook/react';
import ArrowUp from './ArrowUp';

export default {
  title: 'Icons/ArrowUp',
  component: ArrowUp,
} as ComponentMeta<typeof ArrowUp>;

export const Base: ComponentStory<typeof ArrowUp> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <ArrowUp
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1364',
  },
};
