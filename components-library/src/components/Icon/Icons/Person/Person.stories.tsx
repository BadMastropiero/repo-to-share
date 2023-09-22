import {ComponentMeta, ComponentStory} from '@storybook/react';
import Person from './Person';

export default {
  title: 'Icons/Person',
  component: Person,
} as ComponentMeta<typeof Person>;

export const Base: ComponentStory<typeof Person> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <Person
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A23566&t=KrcOfRZv8sH0ktxH-4',
  },
};
