import {FC} from 'react';
import {CustomIconProps} from '../Icon/Icon.interface';

export interface ToastProps {
  message?: string;
  description?: string;
  actionLabel?: string;
  noIcon?: boolean;
  noCloseButton?: boolean;
  noAction?: boolean;
  onActionClicked?: () => void;
  onDismissed?: () => void;
  isOpen?: boolean;
  setIsOpen: (val: boolean) => void;
  background?: string;
  highlightColor?: string;
  icon?: FC<CustomIconProps>;
  type?: 'error' | 'warning' | 'success' | 'info' | 'default';
  timeout?: number;
  onTimeout?: () => void;
  isSnackbar?: boolean;
  className?: string;
  style?: React.CSSProperties | undefined;
}
