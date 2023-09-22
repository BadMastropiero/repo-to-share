import {colors} from './colors';

export const typography = {
  base: {
    fontFamily: 'Roboto Flex',
    margin: 0,
    padding: 0,
    color: colors.others.gray,
    colors: {
      primary: colors.blue,
      error: colors.others.red,
      disable: colors.blue300,
      link: colors.others.orange,
      secondary: colors.white,
    },
  },
  presets: {
    title: {
      fontFamily: 'Teko',
      margin: 0,
      padding: 0,
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '54px',
      lineHeight: '77px',
      color: colors.others.gray,
      colors: {
        primary: colors.blue,
        error: colors.others.red,
        disable: colors.blue300,
        link: colors.others.orange,
        secondary: colors.white,
      },
    },
    serviceTitle: {
      fontFamily: 'Roboto Flex',
      margin: 0,
      padding: 0,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '36px',
      lineHeight: '42px',
      color: colors.others.gray,
      colors: {
        primary: colors.blue,
        error: colors.others.red,
        disable: colors.blue300,
        link: colors.others.orange,
        secondary: colors.white,
      },
    },
    subtitle: {
      fontFamily: 'Teko',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '24px',
      lineHeight: '150%',
    },
    link: {
      fontFamily: 'Teko',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '23px',
      textDecorationLine: 'underline',
    },
    content: {
      fontFamily: 'Roboto Flex',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '19.2px',
      color: colors.blue400,
    },
    button: {
      fontFamily: 'Roboto Flex',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '16px',
      textTransform: 'uppercase',
      padding: '12px 18.5px',
    },
    buttonSM: {
      fontFamily: 'Roboto Flex',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '14px',
      textTransform: 'uppercase',
      padding: '7px 11px',
    },
    buttonLG: {
      fontFamily: 'Roboto Flex',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '19px',
      textTransform: 'uppercase',
      padding: '16.5px 23px',
    },
    label: {
      fontFamily: 'Roboto Flex',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '12px',
      lineHeight: '14.06px',
      textAlign: 'right',
      padding: '2px',
    },
  },
};

export default typography;
