"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardBack = exports.CardFront = exports.CardControls = exports.CardHeader = exports.CardContent = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.CardContent = styled_components_1.default.div `
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
exports.CardHeader = styled_components_1.default.div `
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-top: 10px;
`;
exports.CardControls = styled_components_1.default.div `
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;
exports.CardFront = styled_components_1.default.div `
  background-color: inherit;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  padding: 30px;
`;
exports.CardBack = styled_components_1.default.div `
  background-color: inherit;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  padding: 30px;
`;
//# sourceMappingURL=CardHelpers.styles.js.map