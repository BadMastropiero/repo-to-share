import {ComponentMeta, ComponentStory} from '@storybook/react';
import MailSend from './MailSend';

export default {
  title: 'Icons/MailSend',
  component: MailSend,
} as ComponentMeta<typeof MailSend>;

export const Base: ComponentStory<typeof MailSend> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <MailSend
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1373',
  },
};
