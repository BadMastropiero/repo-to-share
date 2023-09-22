import {ComponentMeta, ComponentStory} from '@storybook/react';
import Graph from './Graph';

export default {
  title: 'Icons/Graph',
  component: Graph,
} as ComponentMeta<typeof Graph>;

export const Base: ComponentStory<typeof Graph> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <Graph
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
  width: '20px',
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/', // TODO: Get the icon's url
  },
};
