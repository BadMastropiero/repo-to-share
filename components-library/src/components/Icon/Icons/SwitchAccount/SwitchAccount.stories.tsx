import {ComponentMeta, ComponentStory} from '@storybook/react';
import SwitchAccount from './SwitchAccount';

export default {
  title: 'Icons/SwitchAccount',
  component: SwitchAccount,
} as ComponentMeta<typeof SwitchAccount>;

export const Base: ComponentStory<typeof SwitchAccount> = args => {
  const {primary, customColor: color, disabled, height, width} = args;

  return (
    <SwitchAccount
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2573%3A7706&t=CfMJO1c37mL1yFKy-4',
  },
};
