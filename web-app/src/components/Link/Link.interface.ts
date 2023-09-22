import {LinkProps as NextLinkProps} from 'next/link';
import {CSSProperties} from 'react';

export interface LinkProps extends NextLinkProps {
  children?: React.ReactNode;
  leaveAlertTitle?: string;
  leaveAlertMessage?: string;
  style?: CSSProperties;
  disabled?: boolean;
  /** Only working for string type href */
  externLinksToNewTab?: boolean;
  confirmModal?: boolean;
  vibrate?: boolean;
  tabIndex?: number;
}
