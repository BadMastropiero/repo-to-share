import Image from 'next/image';

// Components
import PageControl from 'components/StaticPages/PageControl';

// Styles
import {
  ContentWrapper,
  IllustrationContainer,
  WorkingIllustrationContainer,
  MainContainer,
} from 'components/StaticPages/StaticPages.styles';

// Interfaces
import {WipProps} from './WiP.interface';

export default function WorkInProgress({
  title,
  wipVectorUrl,
  wipVectorUrlAltText,
  workingImageUrl,
  workingImageUrlAltText,
}: WipProps) {
  return (
    <ContentWrapper>
      <MainContainer>
        <IllustrationContainer>
          <Image
            alt={wipVectorUrlAltText}
            height={100}
            width={212}
            src={wipVectorUrl}
            sizes="(min-width: 728px) 80vw,
              838px"
            style={{
              objectFit: 'contain',
            }}
          />
        </IllustrationContainer>
        <PageControl text={title} />
      </MainContainer>
      <WorkingIllustrationContainer>
        <Image
          alt={workingImageUrlAltText}
          height={374}
          width={688}
          src={workingImageUrl}
          sizes="(min-width: 728px) 80vw,
              838px"
          style={{
            objectFit: 'contain',
            height: 'auto',
          }}
          priority
        />
      </WorkingIllustrationContainer>
    </ContentWrapper>
  );
}
