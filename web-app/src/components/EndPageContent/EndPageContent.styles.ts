import Image from 'next/image';
import styled, {css} from 'styled-components';
import {Typography, respondAbove} from 'tetraimpacts-components-library';

export const ContentWrapper = styled.div(
  ({
    theme: {
      colors: {primaryDark},
    },
  }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 20px;
    gap: 10px;
    background: ${primaryDark};
  `
);

export const EndPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 20px;
  max-width: 1180px;

  ${respondAbove('laptop', {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: '120px',
  })}
`;

export const EndPageImageContainer = styled.div(
  ({
    theme: {
      colors: {primaryBg},
    },
  }) => css`
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    padding: 0px 0px 4px;
    gap: 10px;
    background: linear-gradient(0deg, #00eb87 0%, #0066a6 100%);
    border: 4px solid ${primaryBg};
    box-shadow: 0px 20px 50px -5px rgba(0, 101, 166, 0.3);
    border-radius: 20px;
    position: relative;
    height: 103px;
    width: 280px;

    ${respondAbove('tablet', {
      height: '210px',
      minWidth: '480px',
    })}
  `
);

export const EndPageImage = styled(Image)`
  display: flex;
  position: absolute;
  left: 7.51px;
  top: -116.75px;

  ${respondAbove('tablet', {
    height: '597.16px',
    width: '516.79px',
    left: '15px',
    top: '-212px',
  })}

  ${respondAbove('laptop', {
    left: '10px',
  })}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 30px;

  ${respondAbove('laptop', {
    alignItems: 'flex-start',
  })}
`;

export const Divider = styled.div(
  ({
    theme: {
      colors: {primaryBg},
    },
  }) => css`
    width: 80px;
    height: 1px;

    background: ${primaryBg};
    opacity: 0;
  `
);

export const CustomTypography = styled(Typography)`
  font-family: 'Teko';
  font-weight: 500;
  font-size: 60px;
  line-height: 100%;
  text-align: center;

  ${respondAbove('laptop', {
    textAlign: 'left',
  })}
`;
