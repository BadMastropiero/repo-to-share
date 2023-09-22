import {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {Typography} from 'tetraimpacts-components-library';

// Components
import ReactMarkdown from 'components/ReactMarkdown/ReactMarkdown';

// Styles
import {StyledStepCard, StepCardBody, StepCardHeader} from './StepCard.styles';

// Interfaces
import StepCardProps from './StepCard.interface';

export default function StepCard({title, subtitle, body}: StepCardProps) {
  const {colors} = useContext(ThemeContext);
  return (
    <StyledStepCard>
      <StepCardHeader>
        <Typography
          fontSize="120px"
          fontWeight="700"
          lineHeight="130px"
          textAlign="center"
          color={colors.lilyWhite}
          style={{alignSelf: 'flex-start', overflow: 'visible'}}
        >
          {title.substring(title.length - 2, title.length)}
        </Typography>
        <Typography fontWeight="700" fontSize="26px" lineHeight="30px" color={colors.lilyWhite}>
          {subtitle}
        </Typography>
      </StepCardHeader>
      <StepCardBody>
        <ReactMarkdown content={body} />
      </StepCardBody>
    </StyledStepCard>
  );
}
