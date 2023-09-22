"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardHeader = exports.CardFront = exports.CardControls = exports.CardBack = exports.CardContent = exports.Card = void 0;
const Generic_1 = require("../Generic/Generic");
const Card_1 = __importDefault(require("./Card"));
exports.Card = Card_1.default;
const CardHelpers_styles_1 = require("./CardHelpers/CardHelpers.styles");
Object.defineProperty(exports, "CardContent", { enumerable: true, get: function () { return CardHelpers_styles_1.CardContent; } });
Object.defineProperty(exports, "CardBack", { enumerable: true, get: function () { return CardHelpers_styles_1.CardBack; } });
Object.defineProperty(exports, "CardControls", { enumerable: true, get: function () { return CardHelpers_styles_1.CardControls; } });
Object.defineProperty(exports, "CardFront", { enumerable: true, get: function () { return CardHelpers_styles_1.CardFront; } });
Object.defineProperty(exports, "CardHeader", { enumerable: true, get: function () { return CardHelpers_styles_1.CardHeader; } });
// Wrrapping it in a genereci HOC that provides steady api to easily stylize component
exports.default = (0, Generic_1.WithGeneric)(Card_1.default);
//# sourceMappingURL=index.js.map