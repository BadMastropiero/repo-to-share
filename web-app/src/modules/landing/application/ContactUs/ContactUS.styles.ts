import styled, {css} from 'styled-components';
import {respondAbove} from 'tetraimpacts-components-library';

export const StyledContactUs = styled.div(
  ({
    theme: {
      colors: {primaryDark},
    },
  }) => css`
    background: ${primaryDark};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
);

export const ContactFormContainer = styled.div`
  display: grid;
  justify-content: stretch;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  padding: 100px 20px;
  align-items: stretch;
  min-width: 320px;
  width: 100%;

  ${respondAbove('mobileM', {
    maxWidth: '556.85px',
  })}

  ${respondAbove('tablet', {
    maxWidth: '1180px',
    gridColumnGap: '40px',
    gridTemplateColumns: '338px 0px 230px',
    width: '688px',
  })}

  ${respondAbove('laptop', {
    gridTemplateColumns: '400px 0px 284px',
    width: '798px',
  })}

  ${respondAbove('laptopL', {
    gridColumnGap: '0px',
    width: 'unset',
    gridTemplateColumns: '1fr 40px 1fr 40px 284px',
  })}
`;

export const LogoWrapper = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
  ${respondAbove('laptopL', {
    justifyContent: 'flex-start',
  })}
`;

export const ContactInfoForm = styled.form`
  display: grid;
  gap: 40px;
  margin-bottom: 8px;

  label {
    font-size: 16px !important;
  }

  ${respondAbove('tablet', {
    gridColumn: '1',
  })}

  ${respondAbove('laptopL', {
    gridColumn: '3',
    alignItems: 'flex-start',
    width: '368px',
  })}

  > div {
    height: 68%;
    ${respondAbove('laptopL', {
      gap: 0,
    })}
  }

  .ti-input-wrapper {
    height: 56px;
  }
`;

export const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  justify-content: space-between;
  height: 100%;

  ${respondAbove('tablet', {
    gap: '40px',
    gridColumn: '3',
  })}

  ${respondAbove('laptopL', {
    gap: '33px',
    gridColumn: '5',
    width: '284px',
  })}
`;

export const CheckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;

  ${respondAbove('tablet', {
    gap: '33px',
  })}
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;

  ${respondAbove('tablet', {
    alignSelf: 'flex-end',
  })}
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${respondAbove('tablet', {
    gridColumn: 'span 3',
  })}

  ${respondAbove('laptopL', {
    gridColumn: '1',
    alignItems: 'flex-start',
  })}
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 280px;
  height: 237.74px;

  ${respondAbove('tablet', {
    height: '333px',
    width: '392.19px',
  })}
`;
