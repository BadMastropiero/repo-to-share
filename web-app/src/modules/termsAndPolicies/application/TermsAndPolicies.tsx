import Image from 'next/image';
import {Typography} from 'tetraimpacts-components-library';

// Components
import ReactMarkdown from 'components/ReactMarkdown/ReactMarkdown';

// Interfaces
import ITermsAndPolicies from './TermsAndPolicies.interface';

// Styles
import {
  ContentWrapper,
  TermsStyledContainer,
  TermsIllustrationContainer,
  Content,
} from './TermsAndPolicies.styles';

export default function TermsAndConditions({body, title, contentFooterImg}: ITermsAndPolicies) {
  return (
    <TermsStyledContainer>
      <ContentWrapper>
        <Typography
          variant="h1"
          colorPreset="primary"
          style={{fontWeight: '700', fontSize: '24px', lineHeight: '28px'}}
        >
          {title}
        </Typography>
        <Content>
          <ReactMarkdown content={body} />
        </Content>
      </ContentWrapper>
      <TermsIllustrationContainer>
        <Image fill src={contentFooterImg ?? ''} alt="" />
      </TermsIllustrationContainer>
    </TermsStyledContainer>
  );
}
