import React, {useEffect, useState} from 'react';
import {NotificationEvents, tiEmitter} from './NotificationEmitter';
import {Toast} from '../Toast';

// Interfaces
import {NotificationItem, NotificationProps} from './Notification.interface';
import StyledNotificationWrapper from './Notification.styles';

const Notification: React.FC<NotificationProps> = ({position}) => {
  const [notificationList, setNotificationList] = useState<(NotificationItem & {id: number})[]>([]);

  const pushNewToast = (payload: NotificationItem & {id: number}) => {
    setNotificationList(oldState => {
      const newState = [...oldState];
      newState.push(payload);
      return newState;
    });
  };

  const handleClose = (id: number) => {
    setNotificationList(oldState => {
      const newState = [...oldState];
      const index = newState.findIndex(item => item.id === id);
      newState.splice(index, 1);
      return newState;
    });
  };

  useEffect(() => {
    tiEmitter.listen(NotificationEvents.ADD_TOAST, data => pushNewToast(data));

    // TODO Add an noListen event
  }, []);

  return (
    <StyledNotificationWrapper className={`notification-wrapper ${position}`}>
      {notificationList.map(item => (
        <Toast
          style={{pointerEvents: 'all'}}
          setIsOpen={() => handleClose(item.id)}
          isOpen
          actionLabel={item.actionLabel}
          description={item.description}
          message={item.message}
          key={item.id}
          type={item.type}
          noIcon={item.noIcon}
          noAction={item.noAction}
          isSnackbar={item.isSnackbar}
          timeout={item.timeout}
        />
      ))}
    </StyledNotificationWrapper>
  );
};

export default Notification;
