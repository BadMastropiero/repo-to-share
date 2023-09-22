import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ArrowLeft, Share} from '../Icon';

import Pill from './Pill';

export default {
  title: 'Components/Pill',
  component: Pill,
} as ComponentMeta<typeof Pill>;

export const Base: ComponentStory<typeof Pill> = args => {
  const {primary, disabled, text, removable, clickable, onAfterIconClick} = args;

  return (
    <Pill
      primary={primary}
      disabled={disabled}
      text={text}
      removable={removable}
      afterIcon={ArrowLeft}
      beforeIcon={Share}
      clickable={clickable}
      onAfterIconClick={onAfterIconClick}
    />
  );
};

Base.args = {
  primary: true,
  disabled: false,
  text: 'TiPill',
  removable: false,
  clickable: false,
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2%3A1480',
  },
};
