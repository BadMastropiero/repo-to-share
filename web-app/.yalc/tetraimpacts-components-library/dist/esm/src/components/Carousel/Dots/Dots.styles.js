import styled, { css } from 'styled-components';
export const Dots = styled.div `
  display: flex;
  min-height: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const Dot = styled.div(({ theme: { colors: { primaryLight, primaryDark }, transition, }, primary: isPrimary, selected, }) => {
    let bg = 'transparent';
    if (!selected)
        bg = isPrimary ? primaryDark : primaryLight;
    return css `
      box-sizing: content-box;
      transition: ${transition};
      height: 10px;
      width: 10px;
      background-color: ${bg};
      border-radius: 50%;
      border: ${selected && `5px solid ${!isPrimary ? primaryDark : primaryLight}`};
    `;
});
export default Dots;
//# sourceMappingURL=Dots.styles.js.map