import {ThemeContext} from 'styled-components';
import {useContext, useRef, useState} from 'react';
import {useTranslation} from 'next-i18next';

// Config
import {pages} from 'config/pagesUrls';

// Components
import {ArrowRight, Button} from 'tetraimpacts-components-library';
import ServiceCard from 'components/ServiceCard/ServiceCard';
import Link from 'components/Link/Link';
import Pagination from 'components/Pagination/Pagination';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// Import Swipper required modules
import {Autoplay, EffectCoverflow} from 'swiper';

// Interfaces
import CIService from 'modules/services/domain/types';
import ServicesSectionProps from './ServicesSection.interface';

// Styles
import {
  SectionDetails,
  SectionWrapper,
  SectionHeader,
  SectionTitle,
  SectionControls,
  SectionDescription,
  SliderControlContainer,
} from './ServicesSection.styles';

function ServicesSection({title = '', body = '', services = []}: ServicesSectionProps) {
  const {colors} = useContext(ThemeContext);
  const {t} = useTranslation();

  const [currentView, setCurrentView] = useState(1);
  const swiperRef = useRef(null);

  /*
   ! WARN Workaround here: duplicating services content, until we have more than 4 services
   * This is due to Swipper not supporting coverflow effect properly unless you have 2n+1 cards
   * where n is the slidesPerView (currently 3 in +1440px). 
   */
  const servicesList: CIService[] = [...services, ...services];
  return (
    <SectionWrapper>
      <SectionHeader>
        <SectionTitle
          preset="title"
          customColor={colors.blueHighLight}
          fontSize="60px"
          lineHeight="86px"
          fontWeight="500"
          lineNumbers={2}
        >
          {title}
        </SectionTitle>
        <SectionDescription preset="content" colorPreset="secondary">
          {body}
        </SectionDescription>
      </SectionHeader>
      <SectionDetails>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, EffectCoverflow]}
          direction="horizontal"
          slidesPerGroup={1}
          centeredSlides
          spaceBetween={20}
          initialSlide={1}
          autoHeight
          // grabCursor
          // slideToClickedSlide
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
              centeredSlides: true,
              spaceBetween: 0,
              initialSlide: 0,
              effect: 'coverflow',
              coverflowEffect: {
                depth: 100,
                rotate: 0,
                scale: 1,
                stretch: -30,
                modifier: 1,
                slideShadows: false,
              },
            },
            950: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
              effect: 'coverflow',
              coverflowEffect: {
                depth: 100,
                rotate: 0,
                scale: 1,
                stretch: -30,
                modifier: 1,
                slideShadows: false,
              },
            },
            1350: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: true,
              effect: 'coverflow',
              coverflowEffect: {
                depth: 100,
                rotate: 20, // NOTE: Try -20 or 30 for a different effect
                scale: 0.9,
                stretch: -20,
                modifier: 1,
                slideShadows: false,
              },
            },
          }}
          autoplay={{
            delay: 6000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
          }}
          simulateTouch
          watchSlidesProgress
          allowSlidePrev
          allowSlideNext
          allowTouchMove
          followFinger
          longSwipes
          shortSwipes
          resistance
          resistanceRatio={0.85}
          style={{
            width: 'min(1200px, 100vw)',
            height: '460px',
            padding: '10px 0 20px',
            display: 'flex',
          }}
          className="mySwiper"
          onSlideChange={swiper => {
            setCurrentView(swiper.realIndex);
          }}
        >
          {servicesList &&
            servicesList.map(
              (s: CIService, idx): JSX.Element => (
                // eslint-disable-next-line react/no-array-index-key
                <SwiperSlide key={`${s.slug}-${idx}`}>
                  <ServiceCard
                    id={s.slug}
                    key={s.slug}
                    imageAlt={s.cardImg?.title}
                    imageUrl={s.cardImg?.url}
                    body={s.shortDescription}
                    title={s.title}
                    slug={s.slug}
                    style={{margin: 'auto'}}
                    redirectable
                  />
                </SwiperSlide>
              )
            )}
        </Swiper>
        <SliderControlContainer>
          <Pagination
            // @ts-ignore
            nextPage={() => swiperRef?.current?.swiper?.slideNext()}
            // @ts-ignore
            previousPage={() => swiperRef?.current?.swiper?.slidePrev()}
            dotsAmmount={services.length}
            currentValue={currentView % services.length}
            roundedSelectors
            hidePaginationButtons
            style={{
              margin: 'auto',
              width: 'fit-content',
            }}
          />
        </SliderControlContainer>
      </SectionDetails>
      <SectionControls>
        <Link href={pages.SERVICES} style={{marginTop: '20px'}}>
          <Button
            primary
            text={t('landing-services-button-label') || ''}
            afterIcon={ArrowRight}
            style={{cursor: 'pointer'}}
          />
        </Link>
      </SectionControls>
    </SectionWrapper>
  );
}

export default ServicesSection;
