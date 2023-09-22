import React, {useContext, useEffect} from 'react';
import {ThemeContext} from 'styled-components';

// import {Button} from '../Button';
import {Close, Error, Info, Task, Warning} from '../Icon';
import {Typography} from '../Typography';

// Interfaces
import {ToastProps} from './Toast.interface';

// Styles
import StyledToast, {
  ToastButtonsContainer,
  ToastButton,
  ToastContent,
  ToastHeader,
  ToastIcon,
} from './Toast.styles';

const Toast: React.FC<ToastProps> = ({
  message = 'Message',
  description = 'Description',
  actionLabel = 'Action',
  onActionClicked,
  onDismissed,
  onTimeout = () => null,
  noIcon,
  noCloseButton = false,
  noAction = false,
  isOpen = false,
  setIsOpen,
  background,
  highlightColor = '#FFFFFF',
  icon,
  type,
  timeout = 5000,
  isSnackbar = false,
  className,
  style,
}) => {
  const {colors} = useContext(ThemeContext);

  const presetBackground = type ? colors.toast[type.concat('Bg')] : background;
  const presetHighlight = type ? colors.toast[type] : highlightColor;

  const baseClassName = `ti-${isSnackbar ? 'snackbar' : 'toast'}`;

  const mapTypeToIcon = {
    error: Error,
    info: Info,
    success: Task,
    warning: Warning,
    default: Info,
  };

  const handleDismiss = () => {
    if (onDismissed) {
      onDismissed();
    }
    setIsOpen(false);
  };

  const handleAction = () => {
    if (onActionClicked) {
      onActionClicked();
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const tim = setTimeout(() => {
      if (isOpen) {
        onTimeout();
        setIsOpen(false);
      }
    }, timeout);
    return () => {
      clearTimeout(tim);
    };
  }, [isOpen]);

  return isOpen ? (
    <StyledToast
      className={`${baseClassName} ${className}`}
      background={presetBackground}
      highlightColor={presetHighlight}
      style={style}
    >
      {noIcon || (
        <ToastIcon
          isSnackbar={isSnackbar}
          icon={icon || mapTypeToIcon[type || 'default']}
          customColor={presetHighlight}
          primary
          correctAlign={noAction && noCloseButton} // correct the alignment taking into account action or close button existence
        />
      )}
      <ToastContent className={`${baseClassName}-content`}>
        <ToastHeader isSnackbar={isSnackbar} className={`${baseClassName}-header`}>
          <Typography
            fontWeight={isSnackbar ? '500' : '700'}
            fontSize={isSnackbar ? '14px' : '16px'}
            height={isSnackbar ? '16.4px' : '19px'}
            lineHeight={isSnackbar ? '16.4px' : '19px'}
            fontFamily="Roboto Flex"
            fontStyle="normal"
            colorPreset="primary"
            style={{
              marginTop: `${
                isSnackbar
                  ? (noAction && noCloseButton && '3px') || '0px'
                  : (noAction && noCloseButton && '0px') || '5px'
              }`,
            }}
            customColor={presetHighlight}
          >
            {message}
          </Typography>
          {(noCloseButton && noAction) || (
            <ToastButtonsContainer className={`${baseClassName}-container`}>
              {noAction || (
                <ToastButton
                  className={`${baseClassName}-action-btn ${type || 'default'}`}
                  presetSize="small"
                  text={actionLabel}
                  rounded
                  onClick={handleAction}
                  highlightColor={type ? presetHighlight : colors?.toast?.default}
                  hoverColor={type ? presetBackground : colors?.toast?.defaultBg}
                />
              )}
              {noCloseButton || (
                <ToastButton
                  className={`${baseClassName}-close-btn ${type || 'default'}`}
                  presetSize="small"
                  afterIcon={Close}
                  rounded
                  onClick={handleDismiss}
                  highlightColor={type ? presetHighlight : colors?.toast?.default}
                  hoverColor={type ? presetBackground : colors?.toast?.defaultBg}
                />
              )}
            </ToastButtonsContainer>
          )}
        </ToastHeader>
        {isSnackbar || (
          <Typography
            fontWeight="500"
            fontSize="12px"
            lineHeight="20.4px"
            fontFamily="Roboto Flex"
            fontStyle="normal"
            colorPreset="disable"
            customColor={presetHighlight}
          >
            {description}
          </Typography>
        )}
      </ToastContent>
    </StyledToast>
  ) : null;
};

export default Toast;
