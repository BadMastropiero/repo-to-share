import {ComponentMeta, ComponentStory} from '@storybook/react';
import ArrowLeft from './ArrowLeft';

export default {
  title: 'Icons/ArrowLeft',
  component: ArrowLeft,
} as ComponentMeta<typeof ArrowLeft>;

export const Base: ComponentStory<typeof ArrowLeft> = args => {
  const {primary, disabled, height, width, ...rest} = args;

  return (
    <ArrowLeft primary={primary} disabled={disabled} height={height} width={width} {...rest} />
  );
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1361',
  },
};
