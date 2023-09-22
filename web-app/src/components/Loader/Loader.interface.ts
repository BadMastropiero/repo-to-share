import {CSSProperties} from 'react';

export interface LoaderProps {
  /* The loading animation component */
  children?: React.ReactNode;
  /* Determines whether the component is present or not in the DOM */
  loading?: boolean;
  /* Determines the color of the default loader */
  primary?: boolean;
  style?: CSSProperties;
}
