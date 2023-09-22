import {NotificationItem} from './Notification.interface';
import EventEmitter from '../../utils/EventEmitter/EventEmitter';

export enum NotificationEvents {
  ADD_TOAST = 'addToast',
}

export const tiEmitter = new EventEmitter<NotificationEvents, NotificationItem & {id: number}>();

export const toast = (data: NotificationItem) => {
  // TODO Improve ID generation
  const id = new Date().getTime();
  tiEmitter.emit(NotificationEvents.ADD_TOAST, {...data, id});
};
