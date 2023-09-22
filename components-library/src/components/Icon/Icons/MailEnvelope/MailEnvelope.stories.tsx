import {ComponentMeta, ComponentStory} from '@storybook/react';
import MailEnvelope from './MailEnvelope';

export default {
  title: 'Icons/MailEnvelope',
  component: MailEnvelope,
} as ComponentMeta<typeof MailEnvelope>;

export const Base: ComponentStory<typeof MailEnvelope> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <MailEnvelope
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1376',
  },
};
