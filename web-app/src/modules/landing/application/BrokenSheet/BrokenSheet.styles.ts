import styled from 'styled-components';
import {respondAbove} from 'tetraimpacts-components-library';

const BrokenSheetBg = styled.div`
  position: relative;
  width: 100%;
  /* height: 100%; */
  height: 65px;
  ${respondAbove('tablet', {
    height: '300px',
  })}
  background: url('/illustrations/landing/broken_sheet.svg#svgView(preserveAspectRatio(none))');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  filter: drop-shadow(0px -30px 50px rgba(0, 235, 134, 0.5));
  /* z-index: -1; // to hide shadow */
  z-index: 1;
  margin-bottom: -5px;
`;

export default BrokenSheetBg;
