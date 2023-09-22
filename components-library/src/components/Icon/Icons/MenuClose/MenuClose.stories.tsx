import {ComponentMeta, ComponentStory} from '@storybook/react';
import MenuClose from './MenuClose';

export default {
  title: 'Icons/MenuClose',
  component: MenuClose,
} as ComponentMeta<typeof MenuClose>;

export const Base: ComponentStory<typeof MenuClose> = args => {
  const {primary, disabled, height, width, ...rest} = args;

  return (
    <MenuClose primary={primary} disabled={disabled} height={height} width={width} {...rest} />
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/%F0%9F%98%8ETetraImpacts?node-id=3868%3A26275&t=tlSs39IuCAhWFddu-4',
  },
};
