import {ComponentMeta, ComponentStory} from '@storybook/react';
import {FC} from 'react';
import {Button} from '../Button';
import {ToastProps} from '../Toast/Toast.interface';

import Notification from './Notification';
import {NotificationProps} from './Notification.interface';
import {toast} from './NotificationEmitter';

export default {
  title: 'Components/Notification',
  component: Notification,
} as ComponentMeta<typeof Notification>;

export const Base: ComponentStory<FC<NotificationProps & ToastProps>> = args => {
  const {
    message,
    description,
    type: storyType,
    noCloseButton,
    noIcon,
    noAction,
    timeout,
    isSnackbar,
    position,
  } = args;

  const handleToast = (specifiedType?: 'error' | 'warning' | 'success' | 'info' | 'default') => {
    toast({
      message: message || `Toast ${storyType || specifiedType || 'default'}`,
      description: description || 'Toast description',
      actionLabel: 'ACTION',
      noCloseButton,
      noIcon,
      noAction,
      type: storyType || specifiedType || 'default',
      timeout,
      isSnackbar,
    });
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
        }}
      >
        <Button text="ERROR" onClick={() => handleToast('error')} />
        <Button text="WARNING" onClick={() => handleToast('warning')} />
        <Button text="SUCCESS" onClick={() => handleToast('success')} />
        <Button text="INFO" onClick={() => handleToast('info')} />
        <Button text="DEFAULT" onClick={() => handleToast()} />
      </div>
      <Notification position={position} />
    </>
  );
};

Base.args = {
  message: undefined,
  description: undefined,
  type: undefined,
  timeout: undefined,
  isSnackbar: false,
};

Base.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/epHXucNHjke2rES69iOsaS/TetraImpacts?node-id=2213%3A4513&t=880UaVFHZPhNQzvv-4',
  },
};
