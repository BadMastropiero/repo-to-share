import {ComponentMeta, ComponentStory} from '@storybook/react';
import Communication from './Communication';

export default {
  title: 'Icons/Communication',
  component: Communication,
} as ComponentMeta<typeof Communication>;

export const Base: ComponentStory<typeof Communication> = args => {
  const {primary, disabled, height, width, ...rest} = args;

  return (
    <Communication primary={primary} disabled={disabled} height={height} width={width} {...rest} />
  );
};

Base.args = {
  primary: true,
  disabled: false,
  height: '24px',
  width: '28px',
  color: undefined,
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2113%3A4112&t=DPFuYXEBKFZn5v64-4',
  },
};
