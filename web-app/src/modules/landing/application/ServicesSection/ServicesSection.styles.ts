import styled, {css} from 'styled-components';

import {respondAbove, Typography} from 'tetraimpacts-components-library';

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;

  overflow: hidden;

  ${respondAbove('tablet', {
    padding: '100px 20px 0px',
  })}

  ${respondAbove('laptopL', {
    overflow: 'visible',
  })}
`;

export const SectionTitle = styled(Typography)`
  width: 100%;
  text-align: center;
  ${respondAbove('laptop', {
    fontSize: '90px',
    lineHeight: '90px',
    minWidth: '400px',
  })}
`;

export const SectionDescription = styled(Typography)`
  display: flex;
  align-items: center;
`;

export const SectionHeader = styled.div`
  max-width: 1180px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${respondAbove('laptop', {
    flexDirection: 'row',
  })}
`;

export const SectionControls = styled.div`
  max-width: 1180px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  ${respondAbove('laptop', {
    justifyContent: 'flex-end',
  })}
`;

export const SectionDetails = styled.div(
  ({
    theme: {
      colors: {blueHighLight, primaryBg},
    },
  }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    ${respondAbove('tablet', {
      marginTop: '110px',
    })}

    .ti-dot {
      border-color: ${blueHighLight};
      background-color: ${primaryBg};
    }

    .ti-dot-selected {
      background-color: transparent;
    }

    /*
     * The following styles is left in case we need to add extra
     * pagination buttons to the landing' ServiceSection in the future
    .prev {
      transform: translate3d(calc(-100% - 25px), 0, -10px);
    }
    .current {
      transform: translate3d(0px, 0px, 0);
      ${respondAbove('tablet', {
      transform: 'translate3d(0px, -50px, 0)',
    })}
    }
    .after {
      transform: translate3d(calc(100% + 25px), 0, -10px);
    }
    .back {
      transform: translate3d(0, 0, -120px);
      ${respondAbove('tablet', {
      transform: 'translate3d(0, -50px, -120px)',
    })}
    }
    .layout-builder {
      position: initial;
      z-index: -1;
      visibility: hidden;
    }
    */
  `
);

export const SliderControlContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  padding: 0px;
  gap: 20px;
  max-width: 1180px;
  width: 100%;
`;
