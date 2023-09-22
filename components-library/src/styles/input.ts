import {createNumberMask} from 'text-mask-addons';
import emailMask from 'text-mask-addons/dist/emailMask';

const numberMask = createNumberMask({
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

export const input = {
  maskPresets: {
    phone: ['+', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    email: emailMask,
    text: false,
    number: numberMask,
  },
};

export default input;
