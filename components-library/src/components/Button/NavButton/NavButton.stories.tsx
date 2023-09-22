import {ComponentMeta, ComponentStory} from '@storybook/react';
import {useContext} from 'react';
import {ThemeContext} from 'styled-components';

import NavButton from './NavButton';
import {Forum, Style, SwitchAccount, Tetraimpacts, ViewCarrousel} from '../../Icon';

export default {
  title: 'Components/NavButton',
  component: NavButton,
} as ComponentMeta<typeof NavButton>;

type StoryProps = {
  primary: boolean;
  disabled: boolean;
  onClick?: () => void;
  text?: string;
  highlight?: boolean;
  isActive?: boolean;
};

type StoryAllProps = {
  text: string;
  primary: boolean;
  disabled: boolean;
  onClick?: () => void;
};

export const Base: ComponentStory<React.FC<StoryProps>> = args => {
  const {primary, disabled, onClick, highlight, isActive} = args;

  return (
    <NavButton
      primary={primary}
      disabled={disabled}
      highlight={highlight}
      isActive={isActive}
      onClick={onClick}
      text="TetraImpacts"
    />
  );
};

export const All: ComponentStory<React.FC<StoryAllProps>> = args => {
  const {primary, disabled, onClick} = args;
  const {colors} = useContext(ThemeContext);

  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        background: `${primary ? colors.primaryBg : colors.primary}`,
        width: 'max-content',
      }}
    >
      <NavButton
        primary={primary}
        disabled={disabled}
        text="Tetraimpacts"
        onClick={onClick}
        icon={Tetraimpacts}
      />
      <NavButton
        primary={primary}
        disabled={disabled}
        text="Account"
        onClick={onClick}
        icon={SwitchAccount}
      />
      <NavButton primary={primary} disabled={disabled} text="Blog" onClick={onClick} icon={Style} />
      <NavButton
        primary={primary}
        disabled={disabled}
        text="Services"
        onClick={onClick}
        icon={ViewCarrousel}
        highlight
      />
      <NavButton
        primary={primary}
        disabled={disabled}
        text="Forum"
        onClick={onClick}
        icon={Forum}
      />
    </div>
  );
};

Base.args = {
  primary: true,
  disabled: false,
  onClick: () => {},
};

All.args = {
  primary: true,
  disabled: false,
  onClick: () => {},
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
