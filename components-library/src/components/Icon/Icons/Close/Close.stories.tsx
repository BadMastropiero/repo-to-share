import {ComponentMeta, ComponentStory} from '@storybook/react';
import Close from './Close';

export default {
  title: 'Icons/Close',
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
  width: '24px',
  color: undefined,
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2113%3A4112&t=DPFuYXEBKFZn5v64-4',
  },
};
