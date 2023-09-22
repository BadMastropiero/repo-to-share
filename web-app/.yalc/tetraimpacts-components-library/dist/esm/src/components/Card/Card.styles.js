import styled, { css } from 'styled-components';
import { CardContent, CardControls, CardHeader } from './CardHelpers/CardHelpers.styles';
export const StyledCard = styled.div(({ theme: { transition }, disabled }) => css `
    box-sizing: border-box;
    transition: ${transition};
    pointer-events: ${disabled && 'none'};
    transform-style: preserve-3d;
  `);
export const CardDoubleSidedWrapper = styled.div `
  background-color: transparent;
  perspective: 1000px;
  ${StyledCard} {
    position: relative;
  }
  transform-style: preserve-3d;
  width: fit-content;
  height: fit-content;
  &:hover {
    ${StyledCard} {
      transform: rotateY(180deg);
      transition: transform 0.6s;
    }
  }
`;
export const ServiceCard = styled(StyledCard)(({ theme: { colors: { primary25 }, }, }) => css `
    box-shadow: 0px 10px 15px -5px rgba(0, 101, 166, 0.4);
    border-radius: 10px;
    padding: 30px;
    border: 4px solid #ffffff;
    background: ${primary25};
    /* cursor: pointer; */
    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 20px 30px -10px rgba(0, 101, 166, 0.4);
    }
  `);
export const BlogCard = styled(StyledCard)(({ theme: { transition, colors: { primary25 }, }, }) => css `
    ${CardContent} {
      /* cursor: pointer; */
      transition: ${transition};
      background: ${primary25};
      border-radius: 20px;
      width: fit-content;
      &:hover {
        box-shadow: 0px 20px 30px -10px rgba(0, 101, 166, 0.4);
      }
    }
    ${CardHeader}, ${CardControls} {
      padding: 0 20px;
    }
  `);
export default StyledCard;
//# sourceMappingURL=Card.styles.js.map