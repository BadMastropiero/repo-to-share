import Image from 'next/image';
import styled from 'styled-components';
import {svgGlow} from 'styles/animations/animations';

export const DebrisStyled = styled(Image)`
  object-position: right;
  object-fit: cover;
  ${svgGlow()}
`;

export default DebrisStyled;
