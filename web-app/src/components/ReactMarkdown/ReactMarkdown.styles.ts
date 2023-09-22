import styled, {css} from 'styled-components';

export const RMUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
  margin: 0;
  width: 100%;
`;
export const RMOrderedList = styled.ol(
  ({
    theme: {
      colors: {primary800},
    },
  }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 20px;
    margin: 0;
    width: 100%;

    li {
      color: ${primary800};
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
    }
  `
);

export const RMListItem = styled.li(
  ({
    theme: {
      colors: {primary400},
    },
  }) => css`
    color: ${primary400};
    align-self: stretch;
    font-family: 'Roboto Flex';
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin: 0px 5px;
  `
);
