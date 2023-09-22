import {CSSProperties} from 'react';
import styled, {css} from 'styled-components';
import {Modal, Typography, respondAbove} from 'tetraimpacts-components-library';

export const StyledModal = styled(Modal)(
  ({theme: {transition}}) => css`
    transition: ${transition};
    top: 0;
    min-height: 300px;
    min-width: 300px;
    background: #00000080;
    margin: 0;
    height: 100%;
    width: 100%;
    max-width: 100%;
    max-height: 100%;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      background: transparent;
      padding: 20px;
    }
  `
);

export const ModalContainer = styled.div(
  ({
    theme: {
      colors: {support1, primary},
    },
  }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, ${support1} 0%, ${primary} 100%);
    border-radius: 10px;
    box-shadow: 0px 10px 30px -5px rgba(0, 101, 166, 0.4);
    padding: 31px 20px 50px;
    isolation: isolate;
    width: 100%;
    max-width: 619px;
    position: relative;
    overflow: auto;

    min-height: 350px;
    ${respondAbove('laptop', {
      alignItems: 'flex-end',
      gap: '40px',
      justifyContent: 'space-around',
      padding: '30px 50px 40px',
      overflow: 'initial',
    })}
  `
);

export const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 349px;
  gap: 20px;

  ${respondAbove('laptop', {
    maxWidth: '349px',
    gap: '30px',
  })}
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 349px;
  gap: 20px;
`;

export const ImageCircleBackground = styled.div<{lowerTop: boolean}>(
  ({
    theme: {
      colors: {primaryBg},
    },
    lowerTop,
  }) => css`
    width: 130px;
    height: 130px;
    position: absolute;
    top: 80px;
    margin-top: 20px;
    border-radius: 50%;
    background-color: ${primaryBg}80;

    ${respondAbove('laptop', {
      width: '350px',
      height: '350px',
      top: lowerTop ? '0px' : 'calc(50% - 175px)',
      left: '-176.22px',
      marginTop: '0px',
    })}
  `
);

export const ModalIllustration = styled.div<{laptopStyles?: CSSProperties}>(
  ({laptopStyles}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 123px;
    position: relative;
    align-self: center;
    margin-top: 20px;

    ${respondAbove('laptop', {
      width: '100%',
      height: '100%',
      maxHeight: '343px',
      left: '0',
      transform: 'translateX(-50%)',
      position: 'absolute',
      marginTop: '0px',
      ...laptopStyles,
    })}
  `
);

export const ModalTitle = styled(Typography)`
  font-size: 26px;
  line-height: 40px;
  font-weight: 700;
  font-family: 'Roboto Flex';

  ${respondAbove('laptop', {
    fontSize: '36px',
    lineHeight: '40px',
  })}
`;

export const ModalDescription = styled(Typography)`
  font-size: 14px;
  line-height: 30px;
  font-weight: 400;

  ${respondAbove('laptop', {
    fontSize: '20px',
    lineHeight: '30px',
  })}
`;
