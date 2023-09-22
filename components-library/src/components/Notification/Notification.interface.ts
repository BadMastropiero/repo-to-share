export interface NotificationProps {
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
}

export interface NotificationItem {
  message: string;
  description?: string;
  actionLabel?: string;
  noCloseButton?: boolean;
  noIcon?: boolean;
  noAction?: boolean;
  type?: 'error' | 'warning' | 'success' | 'info' | 'default';
  timeout?: number;
  isSnackbar?: boolean;
}
