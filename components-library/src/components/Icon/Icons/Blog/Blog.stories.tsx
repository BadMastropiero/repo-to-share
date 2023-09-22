import {ComponentMeta, ComponentStory} from '@storybook/react';
import Close from './Blog';

export default {
  title: 'Icons/Blog',
  component: Close,
} as ComponentMeta<typeof Close>;

export const Base: ComponentStory<typeof Close> = args => {
  const {primary, disabled, height, width, ...rest} = args;

  return <Close primary={primary} disabled={disabled} height={height} width={width} {...rest} />;
};

Base.args = {
  primary: true,
  disabled: false,
  height: '24px',
  width: '25px',
  color: undefined,
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/',
  },
};
