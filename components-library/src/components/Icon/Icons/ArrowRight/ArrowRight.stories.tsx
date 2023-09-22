import {ComponentMeta, ComponentStory} from '@storybook/react';
import ArrowRight from './ArrowRight';

export default {
  title: 'Icons/ArrowRight',
  component: ArrowRight,
} as ComponentMeta<typeof ArrowRight>;

export const Base: ComponentStory<typeof ArrowRight> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <ArrowRight
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1367',
  },
};
