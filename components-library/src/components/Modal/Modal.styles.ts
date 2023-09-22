import styled, {css} from 'styled-components';

const StyledDialog = styled.dialog<{
  backdropBgColor?: string;
}>(
  ({backdropBgColor}) => css`
    /** Styles are set in order to override default dialog display */
    padding: 0;
    overflow: visible;
    border: 0;

    &::backdrop {
      background-color: ${backdropBgColor || 'unset'};
      border: 0;
    }

    // * NOTE: If wanting to get native dialog style, uncomment the following snippet
    /* 
    all: revert;
    &::backdrop {
      all: revert;
    } 
    */
  `
);

export default StyledDialog;
