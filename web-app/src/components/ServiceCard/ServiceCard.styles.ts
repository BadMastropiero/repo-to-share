import styled, {css} from 'styled-components';
import {
  Card,
  CardContent,
  CardHeader,
  respondAbove,
  Typography,
} from 'tetraimpacts-components-library';

export const StyledServiceCard = styled(Card)<{
  topDistance?: boolean;
  width?: string;
  height?: string;
}>(
  ({topDistance, width, height}) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    height: 380px;
    border-radius: 20px;
    width: 100%;
    padding: 0;

    // ensuring min 20px at both sides for any mobile screen size
    max-width: ${width ?? '280px'};

    ${respondAbove('mobileM', {
      maxWidth: width ?? '335px',
    })}

    ${respondAbove('mobileL', {
      maxWidth: width ?? '376px',
    })}

    ${respondAbove('tablet', {
      height: height ?? '380px',
      width: width ?? '376px',
      justifyContent: 'space-between',
    })}

    ${respondAbove('laptop', {
      marginTop: topDistance ? '70px' : '0px',
    })}
  `
);

export const ServiceCardContentWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 30px;

  ${respondAbove('tablet', {
    height: 'unset',
    justifyContent: 'flex-start',
  })}
`;

export const CardHeading = styled(CardHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

export const CardTitle = styled(Typography)`
  font-size: 30px;
  font-weight: 700;
  line-height: 86%;
  ${respondAbove('tablet', {
    lineHeight: '100%',
  })}
`;

export const IllustrationContainer = styled.div`
  display: flex;
  position: relative;
  height: 173px;
  max-width: 280px;
  width: 100%;
  transition: all 0.3s;

  &:hover {
    // temporal kinda animation
    transform: scale(1.02);
  }

  ${respondAbove('tablet', {
    height: '173px',
    maxWidth: '334px',
  })}

  ${respondAbove('laptop', {
    height: '200px',
    maxWidth: '380px',
  })}
`;

export const CardStaticticsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 10px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const CardStaticticsItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 5px;
`;

export const TagsContainer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  gap: 5px;
  width: 100%;
`;

export const CardFooter = styled.div<{invertedContent?: boolean}>(
  ({invertedContent}) => css`
    display: flex;
    flex-direction: row;
    justify-content: ${invertedContent ? 'flex-start' : 'flex-end'};
    gap: 18px;
    width: 100%;
  `
);

export const ServiceTagsContainer = styled.div`
  display: none;

  ${respondAbove('tablet', {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    height: '100%',
  })}
`;

export const ServiceTag = styled(Typography)`
  font-weight: 800;
  font-size: 20px;
  line-height: 23px;
`;

export const CardImageContainer = styled.div<{inverted?: boolean; imageSlug?: string}>(
  ({inverted, imageSlug}) => {
    let smScreen = '0px';
    let mediumScreen = '-28px';
    switch (imageSlug) {
      case 'shape-yourself':
        mediumScreen = '-36px';
        break;
      case 'shape-your-project':
        mediumScreen = '-34px';
        smScreen = '2px';
        break;
      case 'shape-your-ideas':
        mediumScreen = '-20px';
        smScreen = '13px';
        break;
      default:
        break;
    }

    return css`
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 100%;
      pointer-events: none;
      bottom: ${smScreen};

      img {
        width: 150px;
        height: 160px;

        ${respondAbove('tablet', {
          width: '200px',
          height: '210px',
        })}
      }

      ${respondAbove('tablet', {
        position: 'absolute',
        width: 'unset',
        bottom: mediumScreen,
        left: inverted ? undefined : '36px',
        right: !inverted ? undefined : '36px',
      })}
    `;
  }
);

export const ContentDescription = styled(CardContent)`
  div {
    font-size: 16px;
    line-height: 21px;
    max-height: 105px;
    ${respondAbove('tablet', {
      lineHeight: '26px',
      fontSize: '16px',
    })}
  }
`;
