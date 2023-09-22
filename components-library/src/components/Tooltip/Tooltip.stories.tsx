import {ComponentMeta, ComponentStory} from '@storybook/react';
// import {ArrowLeft, Icon} from '../Icon';
import Tooltip from './Tooltip';
// import ReactTooltip from 'react-tooltip';
import {Typography} from '../Typography';
import {Button} from '../Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

export const Base: ComponentStory<typeof Tooltip> = args => {
  const {
    text,
    place,
    delayShow,
    delayHide,
    primary,
    clickable,
    customTextColor,
    customBackColor,
    customBorderColor,
    customShadowColor,
  } = args;

  return (
    <>
      <Typography colorPreset="primary" preset={null} variant="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste illo doloribus
        explicabo fuga voluptatum aspernatur deleniti doloremque ...
      </Typography>
      <Tooltip
        id="iconTip"
        text={text}
        place={place}
        delayShow={delayShow}
        delayHide={delayHide}
        primary={primary}
        clickable={clickable}
        customTextColor={customTextColor}
        customBackColor={customBackColor}
        customBorderColor={customBorderColor}
        customShadowColor={customShadowColor}
      >
        <Button
          presetSize="large"
          primary
          rounded
          text="Button"
          // following props are mandatory to bind an specific tooltip to this component
          data-for="iconTip"
          data-tip
        />
      </Tooltip>
    </>
  );
};

Base.args = {
  text: 'Testing tooltip',
  place: 'top',
  primary: true,
  clickable: false,
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2456%3A5327&t=FUkgv4PJEdZo1qCA-4',
  },
};

const ClickEvent: ComponentStory<typeof Tooltip> = () => (
  <>
    <Typography colorPreset="primary" preset={null} variant="p">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste illo doloribus
      explicabo fuga voluptatum aspernatur deleniti doloremque ...
    </Typography>
    <Tooltip
      id="clickTip"
      text="Button Clicked"
      delayShow={0}
      delayHide={0}
      clickable
      place="right"
    >
      <Button
        presetSize="large"
        rounded
        text="Click me"
        data-for="clickTip"
        data-tip
        data-event="click"
      />
    </Tooltip>
  </>
);

export {ClickEvent};
