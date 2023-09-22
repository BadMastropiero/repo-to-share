import {ComponentMeta, ComponentStory} from '@storybook/react';
import PhoneInCall from './PhoneInCall';

export default {
  title: 'Icons/PhoneInCall',
  component: PhoneInCall,
} as ComponentMeta<typeof PhoneInCall>;

export const Base: ComponentStory<typeof PhoneInCall> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <PhoneInCall
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1361',
  },
};
