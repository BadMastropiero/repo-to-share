import {ComponentMeta, ComponentStory} from '@storybook/react';

import SocialButton from './SocialButton';
import {Facebook, Instagram, Linkedin, Twitter} from '../../Icon';

export default {
  title: 'Components/SocialButton',
  component: SocialButton,
} as ComponentMeta<typeof SocialButton>;

type StoryProps = {
  primary: boolean;
  disabled: boolean;
  presetSize?: 'large' | 'normal' | 'small';
  onClick?: () => void;
  rounded?: boolean;
};

type StoryAllProps = {
  text: string;
  primary: boolean;
  disabled: boolean;
  rounded?: boolean;
  onClick?: () => void;
};

export const Base: ComponentStory<React.FC<StoryProps>> = args => {
  const {primary, disabled, presetSize, onClick, rounded} = args;

  return (
    <SocialButton
      primary={primary}
      disabled={disabled}
      onClick={onClick}
      presetSize={presetSize}
      rounded={rounded}
      icon={Instagram}
    />
  );
};

export const Link: ComponentStory<React.FC<StoryProps>> = args => {
  const {primary, disabled, presetSize, onClick, rounded} = args;

  return (
    <SocialButton
      href="https://example.com"
      primary={primary}
      disabled={disabled}
      onClick={onClick}
      presetSize={presetSize}
      rounded={rounded}
      icon={Instagram}
    />
  );
};

export const All: ComponentStory<React.FC<StoryAllProps>> = args => {
  const {primary, disabled, onClick, rounded} = args;

  return (
    <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
      <SocialButton
        primary={primary}
        disabled={disabled}
        onClick={onClick}
        rounded={rounded}
        icon={Linkedin}
      />

      <SocialButton
        primary={primary}
        disabled={disabled}
        onClick={onClick}
        rounded={rounded}
        icon={Instagram}
      />

      <SocialButton
        primary={primary}
        disabled={disabled}
        onClick={onClick}
        rounded={rounded}
        icon={Facebook}
      />

      <SocialButton
        primary={primary}
        disabled={disabled}
        onClick={onClick}
        rounded={rounded}
        icon={Twitter}
      />
    </div>
  );
};

Base.args = {
  primary: true,
  disabled: false,
  presetSize: 'large',
  onClick: () => {},
  rounded: true,
};

Link.args = {
  primary: true,
  disabled: false,
  presetSize: 'large',
  onClick: () => {},
  rounded: true,
};

All.args = {
  primary: true,
  disabled: false,
  text: 'Button',
  onClick: () => {},
  rounded: true,
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2578%3A19454&t=0QjFHdLrz9OxRMPk-4',
  },
};

All.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2578%3A19454&t=0QjFHdLrz9OxRMPk-4',
  },
};
