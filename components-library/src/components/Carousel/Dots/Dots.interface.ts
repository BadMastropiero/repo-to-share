import {BaseProps} from '../../Base.interface';

export interface DotsProps extends BaseProps<HTMLDivElement> {
  value: number;
  setValue?: (value: number) => void;
  ammount: number;
}
