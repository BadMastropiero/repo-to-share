import {ComponentMeta, ComponentStory} from '@storybook/react';
import Forum from './Forum';

export default {
  title: 'Icons/Forum',
  component: Forum,
} as ComponentMeta<typeof Forum>;

export const Base: ComponentStory<typeof Forum> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <Forum
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A7697&t=CfMJO1c37mL1yFKy-4',
  },
};
