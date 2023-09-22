import { NotificationItem } from './Notification.interface';
import EventEmitter from '../../utils/EventEmitter/EventEmitter';
export declare enum NotificationEvents {
    ADD_TOAST = "addToast"
}
export declare const tiEmitter: EventEmitter<NotificationEvents, NotificationItem & {
    id: number;
}>;
export declare const toast: (data: NotificationItem) => void;
