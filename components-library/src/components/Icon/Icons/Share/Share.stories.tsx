import {ComponentMeta, ComponentStory} from '@storybook/react';
import Share from './Share';

export default {
  title: 'Icons/Share',
  component: Share,
} as ComponentMeta<typeof Share>;

export const Base: ComponentStory<typeof Share> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <Share
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1382',
  },
};
