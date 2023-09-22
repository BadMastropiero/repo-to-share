/// <reference types="react" />
declare const StyledToast: import("styled-components").StyledComponent<"div", any, {
    background?: string | undefined;
    highlightColor?: string | undefined;
}, never>;
export declare const ToastContent: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ToastHeader: import("styled-components").StyledComponent<"div", any, {
    isSnackbar?: boolean | undefined;
}, never>;
export declare const ToastButtonsContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ToastButton: import("styled-components").StyledComponent<import("react").FC<import("../Button/Button.interface").ButtonProps>, any, {
    highlightColor?: string | undefined;
    hoverColor?: string | undefined;
}, never>;
export declare const ToastIcon: import("styled-components").StyledComponent<import("react").FC<import("../Icon/Icon.interface").SuperIconProps>, any, {
    correctAlign?: boolean | undefined;
    isSnackbar?: boolean | undefined;
}, never>;
export default StyledToast;
