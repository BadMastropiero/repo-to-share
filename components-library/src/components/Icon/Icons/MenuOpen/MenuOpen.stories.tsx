import {ComponentMeta, ComponentStory} from '@storybook/react';
import MenuOpen from './MenuOpen';

export default {
  title: 'Icons/MenuOpen',
  component: MenuOpen,
} as ComponentMeta<typeof MenuOpen>;

export const Base: ComponentStory<typeof MenuOpen> = args => {
  const {primary, disabled, height, width, ...rest} = args;

  return <MenuOpen primary={primary} disabled={disabled} height={height} width={width} {...rest} />;
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/%F0%9F%98%8ETetraImpacts?node-id=3868%3A24016&t=tlSs39IuCAhWFddu-4',
  },
};
