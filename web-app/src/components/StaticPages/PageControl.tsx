import {pages} from 'config/pagesUrls';
import {useRouter} from 'next/router';
import Link from 'components/Link/Link';
import {ArrowLeft, Button} from 'tetraimpacts-components-library';
import {useTranslation} from 'next-i18next';
import {ControlButtonContainer, StyledPageControl, StyledTypography} from './StaticPages.styles';

export default function PageControl({text}: {text?: string}) {
  const tiRouter = useRouter();
  const {t} = useTranslation();

  return (
    <StyledPageControl>
      <StyledTypography
        colorPreset="secondary"
        fontFamily="Teko"
        fontWeight="500"
        preset="title"
        variant="h1"
        textAlign="center"
      >
        {text}
      </StyledTypography>
      <ControlButtonContainer>
        <Button
          text={t('button-go-back-text') || undefined}
          presetSize="large"
          beforeIcon={ArrowLeft}
          onClick={() => tiRouter.back()}
        />
        <Link href={pages.LANDING}>
          <Button
            primary
            text={t('button-go-home-text') || undefined}
            presetSize="large"
            beforeIcon={ArrowLeft}
          />
        </Link>
      </ControlButtonContainer>
    </StyledPageControl>
  );
}

PageControl.defaultProps = {
  text: 'Lost in space',
};
