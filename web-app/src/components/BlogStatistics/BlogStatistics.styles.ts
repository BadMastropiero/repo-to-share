import styled, {css, keyframes} from 'styled-components';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 10px;
  max-width: 320px;
  width: 100%;
`;

const fadeIn = keyframes`
  from { 
      transform: scale(1); 
    }
    40% { 
      transform: scale(1.2);
    }
    to { 
      transform: scale(1); 
      opacity: 1; 
    }
`;

export const StatisticsItem = styled.div<{isClicked?: boolean; clickable?: boolean}>(
  ({isClicked, clickable = false}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    transition: ease 0.3s;
    padding: 0px 5px;
    border-radius: 5px;

    animation: 0.3s ${fadeIn} ease;

    ${clickable &&
    `
      &:hover {
        background-color: ${isClicked ? '#feebeb' : '#f2f2f2'};
        color: ${isClicked && '#fff'};
      }
  
      &:active {
        animation: .3s;
      }
    `}
  `
);
