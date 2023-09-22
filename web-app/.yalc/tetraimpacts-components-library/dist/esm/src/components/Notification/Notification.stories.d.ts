import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FC } from 'react';
import { ToastProps } from '../Toast/Toast.interface';
import { NotificationProps } from './Notification.interface';
declare const _default: ComponentMeta<FC<NotificationProps>>;
export default _default;
export declare const Base: ComponentStory<FC<NotificationProps & ToastProps>>;
