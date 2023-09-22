import {ComponentMeta, ComponentStory} from '@storybook/react';

import Button from './Button';
import {ArrowLeft, ArrowRight} from '../Icon';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

type StoryProps = {
  text: string;
  primary: boolean;
  disabled: boolean;
  showAfter: boolean;
  showPrev: boolean;
  presetSize?: 'large' | 'normal' | 'small';
  presetType?: 'text' | 'default';
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
  const {primary, text, showAfter, showPrev, disabled, presetSize, onClick, rounded, presetType} =
    args;

  return (
    <Button
      primary={primary}
      disabled={disabled}
      onClick={onClick}
      text={text}
      afterIcon={showAfter ? ArrowRight : undefined}
      beforeIcon={showPrev ? ArrowLeft : undefined}
      presetSize={presetSize}
      rounded={rounded}
      presetType={presetType}
    />
  );
};

export const Link: ComponentStory<React.FC<StoryProps>> = args => {
  const {primary, text, showAfter, showPrev, disabled, presetSize, onClick, rounded, presetType} =
    args;

  return (
    <Button
      href="http://example.com"
      primary={primary}
      disabled={disabled}
      onClick={onClick}
      text={text}
      afterIcon={showAfter ? ArrowRight : undefined}
      beforeIcon={showPrev ? ArrowLeft : undefined}
      presetSize={presetSize}
      rounded={rounded}
      presetType={presetType}
    />
  );
};

export const All: ComponentStory<React.FC<StoryAllProps>> = args => {
  const {primary, text, disabled, onClick, rounded} = args;

  return (
    <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
      <Button
        primary={primary}
        disabled={disabled}
        onClick={onClick}
        text={text}
        afterIcon={ArrowRight}
        presetSize="large"
        rounded={rounded}
      />

      <Button
        primary={primary}
        disabled={disabled}
        onClick={onClick}
        text={text}
        afterIcon={ArrowRight}
        presetSize="normal"
        rounded={rounded}
      />

      <Button
        primary={primary}
        disabled={disabled}
        onClick={onClick}
        text={text}
        afterIcon={ArrowRight}
        presetSize="small"
        rounded={rounded}
      />
    </div>
  );
};

Base.args = {
  primary: true,
  disabled: false,
  text: 'Button',
  showAfter: true,
  showPrev: false,
  presetSize: 'large',
  onClick: () => {},
  rounded: true,
};

Link.args = {
  primary: true,
  disabled: false,
  text: 'Button',
  showAfter: true,
  showPrev: false,
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
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1157',
  },
};

All.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1157',
  },
};
