import {ComponentMeta, ComponentStory} from '@storybook/react';
import Warning from './Warning';

export default {
  title: 'Icons/Warning',
  component: Warning,
} as ComponentMeta<typeof Warning>;

export const Base: ComponentStory<typeof Warning> = args => {
  const {primary, disabled, height, width, ...rest} = args;

  return <Warning primary={primary} disabled={disabled} height={height} width={width} {...rest} />;
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2586%3A33628&t=BIshAsTq0IpyTmy6-4',
  },
};
