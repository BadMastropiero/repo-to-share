import {ComponentMeta, ComponentStory} from '@storybook/react';
import Facebook from './Facebook';

export default {
  title: 'Icons/Facebook',
  component: Facebook,
} as ComponentMeta<typeof Facebook>;

export const Base: ComponentStory<typeof Facebook> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <Facebook
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A7695&t=BIshAsTq0IpyTmy6-4',
  },
};
