import {ComponentMeta, ComponentStory} from '@storybook/react';
import Translate from './Translate';

export default {
  title: 'Icons/Translate',
  component: Translate,
} as ComponentMeta<typeof Translate>;

export const Base: ComponentStory<typeof Translate> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <Translate
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A7708&t=BIshAsTq0IpyTmy6-4',
  },
};
