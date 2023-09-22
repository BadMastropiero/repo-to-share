import styled from 'styled-components';

export const CardContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardHeader = styled.div`
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const CardControls = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const CardFront = styled.div`
  background-color: inherit;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  padding: 30px;
`;

export const CardBack = styled.div`
  background-color: inherit;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  padding: 30px;
`;
