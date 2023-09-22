import Image from 'next/image';
import styled, {css} from 'styled-components';
import {Pill} from 'tetraimpacts-components-library';

export const PersonCardContainer = styled.div(
  ({
    theme: {
      colors: {primary25, primaryBg},
    },
  }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    justify-content: space-between;
    isolation: isolate;
    background: ${primary25};
    mix-blend-mode: normal;
    border: 4px solid ${primaryBg};
    box-shadow: 0px 10px 15px -5px rgba(0, 101, 166, 0.4);
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    height: 300px;
    width: 300px;
  `
);

export const PersonCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  padding-bottom: 0;
  gap: 10px;
`;

export const PersonCardContentHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 200px;
`;

export const PersonCardImgContainer = styled.div(
  ({
    theme: {
      colors: {primaryBg},
    },
  }) => css`
    display: flex;
    border: 4px solid ${primaryBg};
    box-shadow: 0px 10px 15px -5px rgba(0, 101, 166, 0.4);
    border-radius: 10px;
    height: 60px;
    width: 60px;
    transition: all 0.3s;
  `
);

export const Avatar = styled(Image)(
  ({
    theme: {
      colors: {primaryBg},
    },
  }) => css`
    display: flex;
    position: absolute;
    transition: ease 0.3s;
    border: 4px solid ${primaryBg};
    border-radius: 10px;
  `
);

export const ContactContainer = styled.div(
  ({
    theme: {
      colors: {primary100},
    },
  }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 40px;
    gap: 5px;
    background: ${primary100};
    width: 100%;
    height: 60px;
    border-radius: 0px 0px 20px 20px;
  `
);

export const TagButton = styled(Pill)`
  cursor: pointer;
  padding: 0;
  gap: 0;
  width: 24px;
  height: 24px;

  svg {
    height: 14px;
    width: 14px;
  }
`;

export const Divider = styled.div`
  width: 24px;
  height: 24px;
  background-color: none;
`;
