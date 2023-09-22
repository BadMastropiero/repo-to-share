import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { GenericProps } from '../Generic/Generic';
import { CardProps } from './Card.interface';
declare const _default: ComponentMeta<React.FC<React.FC<CardProps>>>;
export default _default;
export declare const Base: ComponentStory<React.FC<GenericProps & CardProps>>;
export declare const Service: ComponentStory<React.FC<GenericProps & CardProps>>;
export declare const Service2: ComponentStory<React.FC<GenericProps & CardProps & {
    titleText?: string;
}>>;
export declare const Blog: ComponentStory<React.FC<GenericProps & CardProps>>;
export declare const Flip: ComponentStory<React.FC<GenericProps & CardProps>>;
