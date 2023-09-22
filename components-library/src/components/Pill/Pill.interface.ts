import {CSSProperties} from 'react';
import {BaseProps} from '../Base.interface';
import {CustomIconProps} from '../Icon/Icon.interface';

export interface PillBaseProps extends BaseProps<HTMLDivElement> {
  clickable?: boolean;
  primary?: boolean;
  disabled?: boolean;
}

export interface PillProps extends PillBaseProps {
  text?: string;
  removable?: boolean;
  afterIcon?: React.FC<CustomIconProps>;
  afterIconStyles?: CSSProperties;
  beforeIcon?: React.FC<CustomIconProps>;
  onAfterIconClick?: () => void;
}
