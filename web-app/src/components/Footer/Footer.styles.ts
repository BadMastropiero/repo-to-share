import styled, {css} from 'styled-components';
import {respondAbove} from 'tetraimpacts-components-library';

export const StyledFooter = styled.footer(
  ({
    theme: {
      colors: {primary},
    },
  }) => css`
    background: ${primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    // Bring the footer above the index sidebar
    z-index: 2;
  `
);

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  align-self: stretch;

  /* The following is being handled inside AppDataContainer for taking
   * into account the twoCols prop related to Subscribe module

  ${respondAbove('tablet', {
    gridColumn: 'span 2',
  })}

  ${respondAbove('laptopL', {
    gridColumn: '1',
  })} 
  */
`;

export const AppDataContainer = styled.div<{twoCols?: boolean}>(
  ({twoCols = false}) => css`
    display: grid;
    justify-content: space-around;
    grid-column-gap: 20px;
    grid-row-gap: 80px;
    padding: 100px 20px;
    max-width: 1180px;
    align-items: flex-start;

    ${respondAbove('tablet', {
      gridColumnGap: '40px',
      gridTemplateColumns: '1fr 1fr',
      width: '688px',
    })}

    ${respondAbove('laptopL', {
      gridColumnGap: '20px',
      width: 'unset',
      gridTemplateColumns: twoCols ? '1fr 1fr' : '3fr 1fr 4fr 1fr 3fr',
    })}

    ${SocialMediaContainer} {
      ${respondAbove('tablet', {
        gridColumn: twoCols ? 'span 1' : 'span 2',
      })}

      ${respondAbove('laptopL', {
        gridColumn: '1',
      })}
    }
  `
);

export const SocialButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 8px;

  ${respondAbove('mobileL', {
    width: 'unset',
    justifyContent: 'unset',
  })}

  a, .no-link {
    > button {
      height: 64px;
      aspect-ratio: 1/1;
      &:not(:disabled) {
        cursor: pointer;
      }
      svg {
        height: 24px;
        width: 24px;
      }
    }
  }
`;

export const LogoWrapper = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
  ${respondAbove('laptopL', {
    justifyContent: 'flex-start',
  })}
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${respondAbove('laptopL', {
    gridColumn: '3',
    width: '380px',
  })}

  .ti-bookmark {
    min-height: unset;
    ${respondAbove('mobileM', {
      height: '84px',
    })}
    height: 64px;
  }
  .ti-bookmark-text {
    font-size: 16px;
    ${respondAbove('mobileM', {
      fontSize: '18px',
    })}
  }
  .ti-bookmark-icon-container {
    width: 64px;
    height: 64px;
    ${respondAbove('mobileM', {
      height: '84px',
      width: '84px',
    })}
  }
`;

export const SubscriberContainer = styled.div`
  align-self: stretch;

  ${respondAbove('laptopL', {
    gridColumn: '5',
    width: '280px',
  })}

  > div {
    height: 100%;
    ${respondAbove('laptopL', {
      gap: 0,
    })}
  }

  .ti-input-wrapper {
    height: 56px;
  }
`;

export const LegalContainer = styled.div(
  ({
    theme: {
      colors: {primaryDark},
    },
  }) => css`
    padding: 20px;
    background: ${primaryDark};
    width: 100%;

    ${respondAbove('tablet', {
      paddingBottom: '20px',
    })}
  `
);
