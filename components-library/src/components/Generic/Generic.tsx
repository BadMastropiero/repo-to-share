import {ComponentType} from 'react';
import styled, {css, StyledComponent} from 'styled-components';

// Some magic from `https://stackoverflow.com/questions/64596282/styled-components-in-a-hoc-react-component`
type PropsOf<T> = T extends React.ComponentType<infer P> ? P : never;
type StyledProps<InitialProps> = PropsOf<
  // eslint-disable-next-line @typescript-eslint/ban-types
  StyledComponent<React.ComponentType<InitialProps>, never, {}, never>
>;

export interface GenericProps {
  height?: string;
  width?: string;
  padding?: string;
}
export function WithGeneric<T>(component: ComponentType<T>) {
  const WrappedComponent = styled(component)<GenericProps>(
    ({theme: {transition}, height, width, padding}) => css`
      box-sizing: border-box;
      transition: ${transition};
      height: ${height};
      width: ${width};
      padding: ${padding};
    `
  );

  // eslint-disable-next-line func-names
  return function (hocProps: StyledProps<T> & GenericProps) {
    return <WrappedComponent {...hocProps} />;
  };
}

export default WithGeneric;
