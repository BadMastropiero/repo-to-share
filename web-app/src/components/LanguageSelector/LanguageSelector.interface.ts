import {CSSProperties} from 'react';

interface Option {
  label: string;
  value: string;
  [key: string]: any;
}

export default interface ILanguageSelector {
  selected: Option;
  options: Option[];
  setSelected: (selected: Option) => void;
  style?: CSSProperties;
  primary?: boolean;
}
