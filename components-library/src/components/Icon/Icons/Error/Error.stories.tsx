import {ComponentMeta, ComponentStory} from '@storybook/react';
import Error from './Error';

export default {
  title: 'Icons/Error',
  component: Error,
} as ComponentMeta<typeof Error>;

export const Base: ComponentStory<typeof Error> = args => {
  const {primary, disabled, height, width, ...rest} = args;

  return <Error primary={primary} disabled={disabled} height={height} width={width} {...rest} />;
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2586%3A33631&t=BIshAsTq0IpyTmy6-4',
  },
};
