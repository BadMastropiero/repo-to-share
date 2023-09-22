"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
const text_mask_addons_1 = require("text-mask-addons");
const emailMask_1 = __importDefault(require("text-mask-addons/dist/emailMask"));
const numberMask = (0, text_mask_addons_1.createNumberMask)({
    prefix: '',
    // suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ' ',
    allowDecimal: true,
    decimalSymbol: '.',
    // decimalLimit: 2, // how many digits allowed after the decimal
    // integerLimit: 7, // limit length of integer numbers
    // allowNegative: true,
    allowLeadingZeroes: false,
});
exports.input = {
    maskPresets: {
        phone: ['+', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        email: emailMask_1.default,
        text: false,
        number: numberMask,
    },
};
exports.default = exports.input;
//# sourceMappingURL=input.js.map