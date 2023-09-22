import {ComponentMeta, ComponentStory} from '@storybook/react';
import Linkedin from './Linkedin';

export default {
  title: 'Icons/Linkedin',
  component: Linkedin,
} as ComponentMeta<typeof Linkedin>;

export const Base: ComponentStory<typeof Linkedin> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <Linkedin
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A7693&t=BIshAsTq0IpyTmy6-4',
  },
};
