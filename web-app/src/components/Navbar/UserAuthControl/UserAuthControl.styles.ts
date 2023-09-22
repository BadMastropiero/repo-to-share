import styled, {css} from 'styled-components';
import {Button, CardHeader, Modal, Typography} from 'tetraimpacts-components-library';

export const LoginModalLayout = styled(Modal)(
  ({theme: {transition}}) => css`
    transition: ${transition};
    top: 0;
    min-height: 300px;
    min-width: 300px;
    max-width: 100%;
    max-height: 100%;
    background: transparent;

    &::backdrop {
      background-color: #00000080;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      background: transparent;
    }
  `
);

export const DownArrowContainer = styled.div<{isPrimary?: boolean}>(
  ({
    theme: {
      colors: {primaryBg, primary800},
    },
    isPrimary,
  }) => css`
    svg {
      filter: drop-shadow(0px 0px 3px ${isPrimary ? primaryBg : primary800});
    }

    &:hover {
      opacity: 0.5;
    }
  `
);

export const AccountOptionsModal = styled.div(
  ({theme: {transition}}) => css`
    transition: ${transition};
    top: 160%;
    right: -15px;
    width: 280px;
    position: absolute;
    height: fit-content;
    display: flex;
  `
);

export const LoginCard = styled.div<{modalWithForm?: boolean; isAuthenticated?: boolean}>(
  ({
    theme: {
      colors: {primary25},
    },
    modalWithForm,
    isAuthenticated,
  }) => css`
    height: fit-content;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    background: ${primary25};
    border-radius: 10px;
    box-shadow: 0px 10px 30px -5px rgba(0, 101, 166, 0.4);
    z-index: 9999;
    padding: 25px 25px 40px;
    gap: 20px;
    width: 100%;
    max-width: 400px;

    ${!modalWithForm &&
    `
      gap: 28px};
      width: 280px;
    `}

    ${isAuthenticated &&
    `
      gap: 10px;
      padding: 25px;
      align-items: flex-start;
    `}

    button {
      width: 100%;
    }
  `
);

export const LoginCardHeaderContainer = styled.div<{userAuthControlModal?: boolean}>(
  ({userAuthControlModal}) => css`
    display: flex;
    flex-direction: column;
    ${userAuthControlModal
      ? `align-items: center;
      justify-content: center;`
      : `align-items: flex-start;
      justify-content: flex-start;`}
    width: 100%;
  `
);

export const LoginCardText = styled(Typography)(
  ({
    theme: {
      colors: {primary800},
    },
  }) => css`
    font-size: 16px;
    line-height: 26px;
    width: 100%;
    color: ${primary800};
  `
);

export const TextButton = styled(Button)<{
  textUnderline?: boolean;
  textFontWeight?: string;
}>(
  ({
    textUnderline,
    textFontWeight,
    theme: {
      colors: {primary, primary400},
    },
  }) => css`
    max-width: fit-content;

    p {
      font-size: 16px;
      line-height: 0px;
      color: ${textUnderline ? primary400 : primary};
      text-transform: none;
      font-weight: ${textFontWeight || '600'};
      text-decoration: ${textUnderline ? 'underline' : 'none'};
    }
  `
);

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LoginCardHeader = styled(CardHeader)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  gap: 20px;
  margin: 0;
`;

export const SocialLoginButton = styled(Button)(
  ({
    theme: {
      colors: {primary25, primary200},
    },
  }) => css`
    justify-content: center;
    border: 1px solid ${primary200};
    background-color: ${primary25};
    box-shadow: none;
    padding: 13px;
    gap: 10px;

    p {
      text-transform: none;
      padding: 0;
    }
  `
);

export const TextTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
`;

export const Divider = styled.div(
  ({
    theme: {
      colors: {primary200},
    },
  }) => css`
    border: 1px solid ${primary200};
    width: 100%;
  `
);

export const CloseButton = styled(Button)(
  () => css`
    cursor: default;
    font-weight: 700;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 25px;
    right: 25px;
    width: fit-content;
    overflow: visible;

    &:hover:not(:disabled) {
      background: transparent;
    }

    p {
      padding: 5px;
      font-size: 40px;
    }
  `
);

export const LoginFormInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0px 0px 20px;
  gap: 10px;
  width: 100%;
`;

export const LoginCardButton = styled(Button)`
  p {
    width: 100%;
  }
`;

export const CheckOption = styled.div(
  ({
    theme: {
      colors: {primary, primary800},
    },
  }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    div:first-child {
      background-color: transparent;
    }

    div {
      color: ${primary800};
      padding: 0;
      gap: 11px;
    }

    a {
      color: ${primary};
      text-decoration: underline;
      text-underline-offset: 1.5px;
    }
  `
);

export const VisibilityButton = styled.div`
  cursor: pointer;
`;

export default LoginModalLayout;
