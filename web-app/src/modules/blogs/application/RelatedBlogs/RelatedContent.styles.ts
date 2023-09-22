import styled, {css} from 'styled-components';
import {respondAbove} from 'tetraimpacts-components-library';

export const RelatedContentRibbon = styled.div(
  ({
    theme: {
      colors: {primary25},
    },
  }) => css`
    position: relative;
    display: flex;
    background-color: ${primary25};
    flex-direction: column;
    align-items: center;
    padding: 100px 20px;
    // Bring the related content above the index sidebar
    z-index: 2;

    ${respondAbove('tablet', {
      padding: '100px 40px',
    })}
  `
);

export const RelatedContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  max-width: 1180px;
  gap: 40px;
  width: 100%;
`;
