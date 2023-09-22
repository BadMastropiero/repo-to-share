import styled, {css} from 'styled-components';
import {Button} from '../Button';
import {Icon} from '../Icon';

const StyledToast = styled.div<{background?: string; highlightColor?: string}>(
  ({
    theme: {
      colors: {primaryBg, primaryLight},
    },
    background = primaryLight,
  }) => css`
    display: flex;
    flex-shrink: 0;
    flex-grow: 0;
    flex-direction: row;
    align-items: flex-start;
    border: 4px solid ${primaryBg};
    padding: 16px;
    gap: 20px;
    border-radius: 10px;
    background: ${background};
    box-shadow: 0px 10px 15px -5px rgba(0, 101, 166, 0.1);
    word-wrap: break-word;
  `
);

export const ToastContent = styled.div`
  flex: 2;
  min-width: min-content;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-items: flex-start;
  row-gap: 10px;
  word-break: break-word;
`;

export const ToastHeader = styled.div<{isSnackbar?: boolean}>(
  ({isSnackbar = false}) => css`
    display: flex;
    flex-shrink: 0;
    flex-direction: row;
    column-gap: 16px;
    justify-content: space-between;
    align-items: ${isSnackbar ? 'center' : 'flex-start'};
    max-width: 100%;
  `
);

export const ToastButtonsContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  column-gap: 16px;
  justify-content: flex-end;
  align-items: center;
`;

export const ToastButton = styled(Button)<{highlightColor?: string; hoverColor?: string}>(
  ({highlightColor = 'white', hoverColor}) => css`
    border: unset;
    background: transparent;
    box-shadow: unset;
    flex-shrink: 0;

    &.default {
      :hover:not(:disabled) {
        p:first-child {
          color: ${hoverColor};
          svg:first-child {
            fill: ${hoverColor};
          }
        }

        div:first-child {
          color: ${hoverColor};
          svg:first-child {
            fill: ${hoverColor};
          }
        }
      }
    }

    :hover:not(:disabled) {
      div:first-child {
        background: white;
        svg:first-child {
          fill: ${highlightColor};
        }
      }

      p:first-child {
        background: white;
        svg:first-child {
          fill: ${highlightColor};
        }
      }
    }

    p:first-child {
      font-weight: 500;
      font-size: 14px;
      line-height: 16.4px;
      background: transparent;
      color: ${highlightColor};
    }

    div:first-child {
      font-weight: 500;
      font-size: 14px;
      line-height: 16.4px;
      background: transparent;
      color: ${highlightColor};

      svg:first-child {
        height: 14px; // should match action text size
        width: 14px;
        padding: 2px;
        fill: ${highlightColor};
      }
    }
  `
);

export const ToastIcon = styled(Icon)<{correctAlign?: boolean; isSnackbar?: boolean}>(
  ({correctAlign = false, isSnackbar = false}) => css`
    flex-shrink: 0;
    align-self: center;
    // vertical alignment of icon with title header necessary when toast
    margin-top: ${(isSnackbar && '0px') || (correctAlign ? '-3px' : '2px')};
  `
);

export default StyledToast;
