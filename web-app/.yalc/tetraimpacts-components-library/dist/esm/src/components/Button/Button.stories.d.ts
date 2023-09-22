/// <reference types="react" />
import { ComponentMeta, ComponentStory } from '@storybook/react';
declare const _default: ComponentMeta<import("react").FC<import("./Button.interface").ButtonProps>>;
export default _default;
declare type StoryProps = {
    text: string;
    primary: boolean;
    disabled: boolean;
    showAfter: boolean;
    showPrev: boolean;
    presetSize?: 'large' | 'normal' | 'small';
    presetType?: 'text' | 'default';
    onClick?: () => void;
    rounded?: boolean;
};
declare type StoryAllProps = {
    text: string;
    primary: boolean;
    disabled: boolean;
    rounded?: boolean;
    onClick?: () => void;
};
export declare const Base: ComponentStory<React.FC<StoryProps>>;
export declare const Link: ComponentStory<React.FC<StoryProps>>;
export declare const All: ComponentStory<React.FC<StoryAllProps>>;
