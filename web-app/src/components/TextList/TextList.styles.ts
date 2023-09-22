import styled, {css} from 'styled-components';

export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 30px 0px;
  align-self: flex-start;
`;

export const ListItem = styled.li(
  ({
    theme: {
      colors: {primary800},
    },
  }) => css`
    color: ${primary800};
    font-family: 'Roboto Flex';
    align-self: stretch;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    margin: 0px 5px;
  `
);
