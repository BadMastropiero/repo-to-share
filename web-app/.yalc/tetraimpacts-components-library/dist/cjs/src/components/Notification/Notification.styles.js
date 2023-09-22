"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StyledNotificationWrapper = styled_components_1.default.div `
  display: flex;
  position: fixed;
  row-gap: 10px;
  padding: 20px;
  z-index: 3;
  pointer-events: none;
  &.top-left {
    top: 0px;
    left: 0px;
    right: unset;
    flex-direction: column;
  }

  &.top-right {
    top: 0px;
    right: 0px;
    left: unset;
    flex-direction: column;
  }

  &.bottom-left {
    bottom: 0px;
    left: 0px;
    right: unset;
    flex-direction: column-reverse;
  }

  &.bottom-right {
    bottom: 0px;
    right: 0px;
    left: unset;
    flex-direction: column-reverse;
  }

  &.top-center {
    top: 0px;
    left: 50%;
    transform: translate(-50%, 0);
    flex-direction: column;
  }

  &.bottom-center {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 0);
    flex-direction: column-reverse;
  }
`;
exports.default = StyledNotificationWrapper;
//# sourceMappingURL=Notification.styles.js.map