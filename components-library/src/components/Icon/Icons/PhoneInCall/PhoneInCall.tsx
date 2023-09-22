import React from 'react';
import IconBase from '../../IconBase';
import {CustomIconProps} from '../../Icon.interface';

const PhoneInCall: React.FC<CustomIconProps> = ({
  primary,
  customColor: color,
  disabled,
  width = '24px',
  height = '24px',
}) => (
  <IconBase
    className="ticons-phone_in_call"
    primary={primary}
    color={color}
    disabled={disabled}
    height={height} // "24px"
    width={width} // "24px"
    viewBox="0 0 24 24"
  >
    <path
      d="M20.25 12.1C19.9167 12.1 19.621 11.9794 19.363 11.738C19.1043
    11.496 18.9417 11.1834 18.875 10.8C18.6417 9.31669 17.9917 8.04169
    16.925 6.97502C15.8583 5.90836 14.5833 5.25836 13.1 5.02502C12.7167
    4.95836 12.4043 4.79169 12.163 4.52502C11.921 4.25836 11.8 3.95002 11.8
    3.60002C11.8 3.21669 11.9293 2.90836 12.188 2.67502C12.446 2.44169 12.75
    2.34169 13.1 2.37502C15.3167 2.64169 17.2083 3.55836 18.775 5.12502C20.3417
    6.69169 21.2583 8.58336 21.525 10.8C21.5583 11.15 21.45 11.454 21.2
    11.712C20.95 11.9707 20.6333 12.1 20.25 12.1ZM15.975 12.1C15.6917 12.1
    15.4417 12 15.225 11.8C15.0083 11.6 14.8417 11.325 14.725 10.975C14.5917
    10.5584 14.3667 10.1917 14.05 9.87502C13.7333 9.55836 13.3583 9.33336
    12.925 9.20002C12.5917 9.08336 12.321 8.90836 12.113 8.67502C11.9043
    8.44169 11.8 8.18336 11.8 7.90002C11.8 7.46669 11.95 7.11269 12.25
    6.83802C12.55 6.56269 12.8917 6.46669 13.275 6.55002C14.2917 6.78336 15.171
    7.27069 15.913 8.01202C16.6543 8.75402 17.1417 9.62502 17.375
    10.625C17.4583 11.0084 17.3583 11.35 17.075 11.65C16.7917 11.95 16.425 12.1
    15.975 12.1ZM20.75 21.8C18.3333 21.8 16.0083 21.2877 13.775 20.263C11.5417
    19.2377 9.56668 17.8667 7.85001 16.15C6.13335 14.4334 4.76268 12.454 3.73801
    10.212C2.71268 7.97069 2.20001 5.63336 2.20001 3.20002C2.20001 2.86669
    2.29168 2.60836 2.47501 2.42502C2.65835 2.24169 2.91668 2.15002 3.25001
    2.15002H8.25001C8.48335 2.15002 8.70001 2.22902 8.90001 2.38702C9.10001
    2.54569 9.21668 2.73336 9.25001 2.95002L10 7.20002C10.0333 7.41669 10.0293
    7.61669 9.98801 7.80002C9.94601 7.98336 9.86668 8.13336 9.75001
    8.25002L7.10001 10.95C7.73335 12.0167 8.56668 13.079 9.60001 14.137C10.6333
    15.1957 11.7 16.0667 12.8 16.75L15.55 14.1C15.6833 13.9667 15.8333 13.875 
    16 13.825C16.1667 13.775 16.3333 13.7667 16.5 13.8L20.95 14.75C21.1833 14.8
    21.3833 14.9167 21.55 15.1C21.7167 15.2834 21.8 15.4834 21.8 
    15.7V20.75C21.8 21.0834 21.7083 21.3417 21.525 21.525C21.3417 21.7084 
    21.0833 21.8 20.75 21.8ZM5.85001 8.45002L7.30001 7.00002L6.90001
    4.80002H4.95001C5.03335 5.48336 5.14168 6.11269 5.27501 6.68802C5.40835
    7.26269 5.60001 7.85002 5.85001 8.45002ZM19.15 19.05V19.075V17.05L16.8
    16.55L15.3 18.05C15.95 18.3334 16.5917 18.55 17.225 18.7C17.8583 18.85 18.5
    18.9667 19.15 19.05Z"
    />
  </IconBase>
);

export default PhoneInCall;
