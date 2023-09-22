import {ComponentMeta, ComponentStory} from '@storybook/react';
import Tetraimpacts from './Tetraimpacts';

export default {
  title: 'Icons/Info',
  component: Tetraimpacts,
} as ComponentMeta<typeof Tetraimpacts>;

export const Base: ComponentStory<typeof Tetraimpacts> = args => {
  const {primary, disabled, height, width, ...rest} = args;

  return (
    <Tetraimpacts primary={primary} disabled={disabled} height={height} width={width} {...rest} />
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A7718&t=wGWKhPq5cRYgQ9wb-4',
  },
};
