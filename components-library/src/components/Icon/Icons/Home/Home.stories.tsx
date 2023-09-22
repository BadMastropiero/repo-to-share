import {ComponentMeta, ComponentStory} from '@storybook/react';
import Home from './Home';

export default {
  title: 'Icons/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

export const Base: ComponentStory<typeof Home> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <Home primary={primary} customColor={color} disabled={disabled} height={height} width={width} />
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A7699&t=CfMJO1c37mL1yFKy-4',
  },
};
