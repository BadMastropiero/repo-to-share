import styled from 'styled-components';
import {Typography, respondAbove} from 'tetraimpacts-components-library';

export const StyledServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  isolation: isolate;
  padding: 20px 20px 100px;
  width: 100%;
  max-width: 1180px;

  ${respondAbove('tablet', {
    paddingTop: '60px',
  })}
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 20px;
  width: 100%;
  max-width: 1050px;
  text-align: center;
  position: relative;

  ${respondAbove('laptop', {
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
  })}
`;

export const ServicesSummary = styled(Typography)`
  position: relative;
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  text-align: center;

  ${respondAbove('laptop', {
    width: '622px',
    textAlign: 'right',
  })}
`;

export const ServiceContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;

  ${respondAbove('laptop', {
    columnGap: '30px',
    rowGap: 0,
  })}
`;
