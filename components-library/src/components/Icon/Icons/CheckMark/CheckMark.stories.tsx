import {ComponentMeta, ComponentStory} from '@storybook/react';
import CheckMark from './CheckMark';

export default {
  title: 'Icons/CheckMark',
  component: CheckMark,
} as ComponentMeta<typeof CheckMark>;

export const Base: ComponentStory<typeof CheckMark> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <CheckMark
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1351',
  },
};
