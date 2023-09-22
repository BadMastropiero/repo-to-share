import {ComponentMeta, ComponentStory} from '@storybook/react';
import DynamicComponent from './DynamicComponent';

export default {
  title: 'Support/DynamicComponent',
  component: DynamicComponent,
} as ComponentMeta<typeof DynamicComponent>;

export const Base: ComponentStory<typeof DynamicComponent> = args => {
  const {tag} = args;
  return (
    <DynamicComponent tag={tag} {...args}>
      Test
    </DynamicComponent>
  );
};

Base.args = {
  tag: 'h1',
};
