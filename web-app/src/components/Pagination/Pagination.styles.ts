import styled from 'styled-components';
import {respondAbove} from 'tetraimpacts-components-library';

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 40px;
  width: 100%;

  ${respondAbove('tablet', {
    flexDirection: 'row',
    justifyContent: 'space-between',
  })}

  .pagination-total-dots > div {
    box-sizing: content-box;
  }
`;

export const HandlePagination = styled.div`
  display: flex;
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  display: none;

  ${respondAbove('tablet', {
    display: 'flex',
    gap: '20px',
  })}
`;
