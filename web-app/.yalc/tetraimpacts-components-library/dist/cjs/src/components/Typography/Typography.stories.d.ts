import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TypographyProps } from './Typography.interface';
declare const _default: ComponentMeta<React.FC<TypographyProps>>;
export default _default;
declare type StoryProps = TypographyProps & {
    text: string;
};
export declare const Base: ComponentStory<React.FC<StoryProps>>;
export declare const Content: ComponentStory<React.FC<StoryProps>>;
