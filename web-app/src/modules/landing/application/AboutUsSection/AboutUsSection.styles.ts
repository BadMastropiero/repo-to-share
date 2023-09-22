import styled, {css} from 'styled-components';

import {respondAbove} from 'tetraimpacts-components-library';

export const SectionFrame = styled.div`
  display: grid;
  justify-content: space-around;
  padding: 100px 20px;
  padding-bottom: 20px;
  max-width: 1180px;
  justify-items: center;
  align-items: flex-end;
  gap: 40px;
  grid-column-gap: 20px;
  margin: auto;
  ${respondAbove('tablet', {
    padding: '100px 20px',
    gridTemplateColumns: 'repeat(8, 1fr)',
    minHeight: '870px',
    alignItems: 'center',
  })}

  ${respondAbove('laptop', {
    gridTemplateColumns: 'repeat(12, 1fr)',
  })}
`;

export const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  ${respondAbove('tablet', {
    gridColumn: '1 / 9',
  })}

  ${respondAbove('laptop', {
    gridColumn: '8 / 13',
    display: 'flex',
    alignItems: 'flex-end',
  })}
`;

export const SectionDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  ${respondAbove('laptop', {
    gridColumn: '1 / 6',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',

    '> div:first-child': {
      fontSize: '90px',
      lineHeight: '129px',
    },
  })}
`;

export const MainImgContainer = styled.div<{hideMobile?: boolean}>(
  ({hideMobile = false}) => css`
    position: relative;
    display: ${hideMobile ? 'none' : 'grid'};
    width: 280px;
    height: 306.96px;

    ${respondAbove('tablet', {
      width: '503px',
      height: '406px',
      gridColumn: '2 / 8',
      display: hideMobile ? 'grid' : 'none',
    })}

    ${respondAbove('laptop', {
      gridColumn: '1 / 7',
    })} /* ${respondAbove('laptopL', {
      width: '580px',
      height: '634.84px',
    })} */
  `
);

export const SecondImgContainer = styled.div`
  width: 87.17px;
  height: 100px;
  position: relative;

  ${respondAbove('tablet', {
    width: '174.34px',
    height: '200px',
  })}

  ${respondAbove('laptop', {
    display: 'grid',
    gridColumn: '4 / 6',
  })}
`;
