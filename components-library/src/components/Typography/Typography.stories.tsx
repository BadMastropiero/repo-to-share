import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Typography from './Typography';
import {TypographyProps} from './Typography.interface';

export default {
  title: 'Atoms/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

type StoryProps = TypographyProps & {
  text: string;
};

export const Base: ComponentStory<React.FC<StoryProps>> = args => {
  const {text} = args;

  return <Typography {...args}>{text}</Typography>;
};

export const Content: ComponentStory<React.FC<StoryProps>> = () => (
  <Typography preset="content" variant="p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Typography>
);

Base.args = {
  text: 'Test',
  variant: 'h1',
  preset: 'subtitle',
  colorPreset: 'primary',
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=6%3A2761',
  },
};

Content.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=6%3A2791',
  },
};
