"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastIcon = exports.ToastButton = exports.ToastButtonsContainer = exports.ToastHeader = exports.ToastContent = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const Button_1 = require("../Button");
const Icon_1 = require("../Icon");
const StyledToast = styled_components_1.default.div(({ theme: { colors: { primaryBg, primaryLight }, }, background = primaryLight, }) => (0, styled_components_1.css) `
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
  `);
exports.ToastContent = styled_components_1.default.div `
  flex: 2;
  min-width: min-content;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-items: flex-start;
  row-gap: 10px;
  word-break: break-word;
`;
exports.ToastHeader = styled_components_1.default.div(({ isSnackbar = false }) => (0, styled_components_1.css) `
    display: flex;
    flex-shrink: 0;
    flex-direction: row;
    column-gap: 16px;
    justify-content: space-between;
    align-items: ${isSnackbar ? 'center' : 'flex-start'};
    max-width: 100%;
  `);
exports.ToastButtonsContainer = styled_components_1.default.div `
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  column-gap: 16px;
  justify-content: flex-end;
  align-items: center;
`;
exports.ToastButton = (0, styled_components_1.default)(Button_1.Button)(({ highlightColor = 'white', hoverColor }) => (0, styled_components_1.css) `
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
  `);
exports.ToastIcon = (0, styled_components_1.default)(Icon_1.Icon)(({ correctAlign = false, isSnackbar = false }) => (0, styled_components_1.css) `
    flex-shrink: 0;
    align-self: center;
    // vertical alignment of icon with title header necessary when toast
    margin-top: ${(isSnackbar && '0px') || (correctAlign ? '-3px' : '2px')};
  `);
exports.default = StyledToast;
//# sourceMappingURL=Toast.styles.js.map