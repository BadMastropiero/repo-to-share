import {ComponentMeta, ComponentStory} from '@storybook/react';
import ViewCarrousel from './ViewCarrousel';

export default {
  title: 'Icons/ViewCarrousel',
  component: ViewCarrousel,
} as ComponentMeta<typeof ViewCarrousel>;

export const Base: ComponentStory<typeof ViewCarrousel> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <ViewCarrousel
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A7711&t=CfMJO1c37mL1yFKy-4',
  },
};
