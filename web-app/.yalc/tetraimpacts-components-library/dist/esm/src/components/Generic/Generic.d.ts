import { ComponentType } from 'react';
import { StyledComponent } from 'styled-components';
declare type PropsOf<T> = T extends React.ComponentType<infer P> ? P : never;
declare type StyledProps<InitialProps> = PropsOf<StyledComponent<React.ComponentType<InitialProps>, never, {}, never>>;
export interface GenericProps {
    height?: string;
    width?: string;
    padding?: string;
}
export declare function WithGeneric<T>(component: ComponentType<T>): (hocProps: StyledProps<T> & GenericProps) => JSX.Element;
export default WithGeneric;
