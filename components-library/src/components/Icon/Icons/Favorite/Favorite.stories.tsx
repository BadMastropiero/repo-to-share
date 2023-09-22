import {ComponentMeta, ComponentStory} from '@storybook/react';
import Favorite from './Favorite';

export default {
  title: 'Icons/Favorite',
  component: Favorite,
} as ComponentMeta<typeof Favorite>;

export const Base: ComponentStory<typeof Favorite> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <Favorite
      primary={primary}
      customColor={color}
      disabled={disabled}
      height={height}
      width={width}
    />
  );
};

Base.args = {
  primary: true,
  disabled: false,
  height: '24px',
  width: '24px',
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A16424&t=KrcOfRZv8sH0ktxH-4',
  },
};
