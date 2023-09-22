import {ComponentMeta, ComponentStory} from '@storybook/react';
import Info from './Info';

export default {
  title: 'Icons/Info',
  component: Info,
} as ComponentMeta<typeof Info>;

export const Base: ComponentStory<typeof Info> = args => {
  const {primary, disabled, height, width, ...rest} = args;

  return <Info primary={primary} disabled={disabled} height={height} width={width} {...rest} />;
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2586%3A33625&t=BIshAsTq0IpyTmy6-4',
  },
};
