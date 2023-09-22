import {ReactNode} from 'react';

export default interface ParallelListProps {
  children: ReactNode | ReactNode[];
  /** Component used as separator */
  joinBy?: ReactNode;
}
