import {ComponentMeta, ComponentStory} from '@storybook/react';
import Send from './Send';

export default {
  title: 'Icons/Send',
  component: Send,
} as ComponentMeta<typeof Send>;

export const Base: ComponentStory<typeof Send> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <Send primary={primary} customColor={color} disabled={disabled} height={height} width={width} />
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A7709&t=KrcOfRZv8sH0ktxH-4',
  },
};
