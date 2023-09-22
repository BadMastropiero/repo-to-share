/// <reference types="react" />
import { ComponentMeta, ComponentStory } from '@storybook/react';
declare const _default: ComponentMeta<import("react").FC<import("./NavButton.interface").NavButtonProps>>;
export default _default;
declare type StoryProps = {
    primary: boolean;
    disabled: boolean;
    onClick?: () => void;
    text?: string;
    highlight?: boolean;
    isActive?: boolean;
};
declare type StoryAllProps = {
    text: string;
    primary: boolean;
    disabled: boolean;
    onClick?: () => void;
};
export declare const Base: ComponentStory<React.FC<StoryProps>>;
export declare const All: ComponentStory<React.FC<StoryAllProps>>;
