import Link from 'components/Link/Link';
import styled, {css} from 'styled-components';
import {Button} from 'tetraimpacts-components-library';

export const StyledDrawerWrapper = styled.div<{visible?: boolean; primary?: boolean}>(
  ({
    theme: {
      colors: {primary800, primaryBg},
    },
    visible,
    primary: isPrimary,
  }) => css`
    display: flex;
    transition: left 0.3s;
    position: fixed;
    width: 246px;
    height: 100%;
    left: ${visible ? '0px' : '-280px'};
    top: 0px;
    z-index: 9;

    background-color: ${isPrimary ? primary800 : primaryBg};
    box-shadow: 0px 6px 20px 10px rgba(0, 0, 0, 0.3);
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
    gap: 37px;
  `
);

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;

  height: 51px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0px;
  gap: 20px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
`;

export const TextButton = styled(Button)<{primaryTextColor?: boolean}>(
  ({
    theme: {
      colors: {primary, primaryBg},
    },
    primaryTextColor,
  }) => css`
    border-radius: 0;

    &:hover:not(:disabled) {
      background: transparent;
    }

    p {
      padding: 0;
      font-size: 14px;
      line-height: 16px;
      color: ${primaryTextColor ? primary : primaryBg};
      text-transform: none;
      font-weight: 400;
    }
  `
);

export const ContactCard = styled(Link)<{$isPrimary?: boolean}>(
  ({
    theme: {
      colors: {primary},
    },
    $isPrimary: isPrimary,
  }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    gap: 10px;
    background: ${isPrimary ? primary : undefined};
    border: ${!isPrimary ? `1px solid ${primary}` : undefined};
    border-radius: 6px;
    width: 100%;
    overflow: hidden;
  `
);

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 0px;
  gap: 8px;

  width: 206px;
  height: 65px;
`;

export const DrawerSubscribeButton = styled(Button)`
  width: 100%;
  height: 44px;
  p {
    font-weight: 700;
  }
`;
