import styled from 'styled-components';
import {Button} from 'tetraimpacts-components-library';

export const StyledSubscriber = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const SubscriberButton = styled(Button)`
  width: fit-content;
  p {
    font-weight: 700;
  }
`;
