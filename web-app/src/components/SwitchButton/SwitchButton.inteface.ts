import {CSSProperties} from 'react';

type Option = {
  label: string;
  value: string;
  [key: string]: any;
};
export default interface SwitchButtonProps {
  selected: Option;
  options: Option[];
  setSelected: (selected: Option) => void;
  indexBy?: string;
  style?: CSSProperties;
  primary?: boolean;
}
