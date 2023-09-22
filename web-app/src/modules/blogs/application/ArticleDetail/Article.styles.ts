import styled, {css, keyframes} from 'styled-components';
import {Pill, Typography, respondAbove} from 'tetraimpacts-components-library';

export const StyledContainer = styled.div(
  ({
    theme: {
      colors: {primaryBg},
    },
  }) => css`
    display: flex;
    background: ${primaryBg};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 100%;

    padding: 0px 20px 100px;
    ${respondAbove('tablet', {
      padding: '0px 40px 100px',
    })}
  `
);
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  max-width: 1180px;

  ${respondAbove('tablet', {
    padding: '0',
    paddingTop: '40px',
    gap: '20px',
  })}
`;

export const IllustrationContainer = styled.div(
  ({
    theme: {
      colors: {primary50},
    },
  }) => css`
    display: flex;
    position: relative;
    align-self: center;
    mix-blend-mode: normal;
    width: 100vw;
    height: 141px;
    overflow: hidden;

    ${respondAbove('tablet', {
      border: `4px solid ${primary50}`,
      borderRadius: '20px',
      height: '303px',
      width: '100%',
    })}
  `
);

export const ArticleInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

export const AuthorContainer = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 0px;
  gap: 10px;
`;

export const Username = styled(Typography)`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
`;

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 10px;
  max-width: 320px;
  width: 100%;
`;

const fadeIn = keyframes`
  from { 
      transform: scale(1); 
    }
    40% { 
      transform: scale(1.2);
    }
    to { 
      transform: scale(1); 
      opacity: 1; 
    }
`;

export const StatisticsItem = styled.div<{isClicked?: boolean; clickable?: boolean}>(
  ({isClicked, clickable = false}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    transition: ease 0.3s;
    padding: 0px 5px;
    border-radius: 5px;

    animation: 0.3s ${fadeIn} ease;

    ${clickable &&
    `
      &:hover {
        background-color: ${isClicked ? '#feebeb' : '#f2f2f2'};
        color: ${isClicked && '#fff'};
      }
  
      &:active {
        animation: .3s;
      }
    `}
  `
);

export const ShareButton = styled(Pill)`
  padding: 0;
  gap: 0;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 5px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  position: relative;
  width: 100%;
  max-width: 1180px;
  ${respondAbove('laptop', {
    flexWrap: 'nowrap',
  })}
`;

export const ArticleBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  width: 100%;

  ${respondAbove('tablet', {
    paddingLeft: '80px',
  })}
  ${respondAbove('laptop', {
    maxWidth: '704px',
  })}
`;
