import styled, {keyframes} from 'styled-components';

const blink = keyframes`
    50% {
        opacity: 0;
    }
`;

export const TypeWriterContainer = styled.div`
  display: flex;
  flex-direction: column;
  .end-cursor:after {
    content: '|';
    color: var(--light);
  }
  .end-cursor.blinking:after {
    animation: ${blink} 1s step-start infinite;
  }

  span {
    /* background: linear-gradient(315deg, #00eb87 14.64%, #0066a6 85.36%); */
    -webkit-background-clip: text;
    /* -webkit-text-fill-color: transparent; */
    background-clip: text;
  }
`;

export default TypeWriterContainer;
