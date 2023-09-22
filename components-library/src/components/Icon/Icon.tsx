import React from 'react';
import {SuperIconProps} from './Icon.interface';
import {presetSizes} from '../../styles';

const Icon: React.FC<SuperIconProps> = ({
  sizePreset: size = 'normal',
  icon: SelectedIcon,
  customColor,
  ...props
}): React.ReactElement => {
  const newHeight = presetSizes[size].height;
  const newWidth = presetSizes[size].width;

  const newProps = {...props};
  newProps.height = props.height || newHeight;
  newProps.width = props.width || newWidth;

  return <SelectedIcon customColor={customColor} {...newProps} />;
};

export default Icon;
