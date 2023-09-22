import {BaseProps} from '../Base.interface';

export interface CheckboxProps extends BaseProps<HTMLInputElement> {
  primary?: boolean;
  checked: boolean;
  width?: string;
  height?: string;
  disabled?: boolean;
}
