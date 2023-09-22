import Image from 'next/image';
import styled from 'styled-components';
import {floatInSpace} from 'styles/animations/animations';
import {respondAbove} from 'tetraimpacts-components-library';

export const TetraHouseWrapper = styled.div`
  position: absolute;
  bottom: 10px; // Take into account the negative margin in river
  left: calc(50% - min(900px, 45vw));
  ${respondAbove('laptopL', {
    left: 'calc(50% - min(700px, 45vw))',
  })}
  z-index: 3;
`;

export const TetraHouseContainer = styled.div`
  position: relative;
  width: 140px;
  height: 85px;

  ${respondAbove('tablet', {
    width: '380px',
    height: '230px',
  })}
`;

export const TetraHouse = styled(Image)`
  object-position: bottom;
  object-fit: contain;
`;

export const HexQuasExort = styled(Image)`
  object-position: bottom;
  object-fit: contain;
  ${floatInSpace()}
`;
