import Image from 'next/image';
import styled from 'styled-components';
import {floatInSpace} from 'styles/animations/animations';

export const TetraAstronaut = styled(Image)`
  object-position: bottom;
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  object-fit: contain;
  ${floatInSpace(1.5)}
`;

export default TetraAstronaut;
