import styled from 'styled-components';

export const StyledStepCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #e5faff;
  border-radius: 20px;
  z-index: 6;
  overflow: hidden;
  width: 100%;
  min-width: 200px;
  max-width: 233px;
  height: 432px;
`;

export const StepCardHeader = styled.div`
  display: flex;
  background: #00eb86;
  align-items: center;
  padding: 0px 3px;
  gap: 10px;

  height: 101px;
`;

export const StepCardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;
