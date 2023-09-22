import {useState, useRef, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {devices, useMediaQuery} from 'tetraimpacts-components-library';
import {useRouter} from 'next/router';

// Import Swipper required modules
import 'swiper/css';

// Components
import BlogCard from 'components/BlogCard/BlogCard';
import Pagination from 'components/Pagination/Pagination';

// Config
import {pages} from 'config/pagesUrls';

// Hooks
import {useUserData} from 'contexts/UserData';

// Styles
import {
  CarouselContainer,
  HeadingContainer,
  SliderControlContainer,
  StyledSectionTitle,
  StyledWrapper,
} from './Blogs.styles';

// Interface
import BlogsSectionProps from './Blogs.interface';

export default function Blogs({blogsList}: BlogsSectionProps) {
  // const {t} = useTranslation();
  const router = useRouter();
  const {userData} = useUserData();

  const [isTabletScreen] = useMediaQuery(devices.tablet);
  const [isLaptopScreen] = useMediaQuery(devices.laptop);

  let slidesNumber = 1;
  if (isTabletScreen) slidesNumber = 2;
  if (isLaptopScreen) slidesNumber = 3;

  // const sortOptions = [
  //   {
  //     isDisabled: false,
  //     isFixed: false,
  //     label: t('select-option-date'),
  //     value: 'date',
  //   },
  //   {
  //     isDisabled: false,
  //     isFixed: false,
  //     label: t('select-option-upvotes'),
  //     value: 'likes',
  //   },
  //   {
  //     isDisabled: false,
  //     isFixed: false,
  //     label: t('select-option-readings'),
  //     value: 'reads',
  //   },
  // ];

  const swiperRef = useRef(null); // TODO improve the type
  const [currentView, setCurrentView] = useState(0);
  const [currentAmountOfViews, setCurrentAmountOfViews] = useState(0);
  const [endOfViews, setEndOfViews] = useState(false);
  const [startOfViews, setStartOfViews] = useState(false);

  // const [sortBy, setSortBy] = useState<any>(sortOptions[0]);

  const handleFilterTag = (tag: string) => {
    const {query} = router;
    router.push(
      {
        pathname: pages.BLOGS,
        query: {
          ...query,
          tags: [tag]?.join() || null,
          page: 1,
        },
      },
      undefined,
      {scroll: true}
    );
  };

  useEffect(() => {
    if (!swiperRef?.current) return;
    // @ts-ignore
    setCurrentAmountOfViews(swiperRef.current.swiper.snapGrid?.length);
  }, [isTabletScreen, isLaptopScreen]);

  return (
    <StyledWrapper>
      <HeadingContainer>
        {/* @ts-ignore */}
        <StyledSectionTitle fontFamily="Teko" colorPreset="blueHighLight">
          blogs
        </StyledSectionTitle>
        {/* <Dropdown
          options={sortOptions}
          value={sortBy}
          setValue={e => {
            setSortBy(e);
          }}
          renderSelected
          placeholder={t('blogs-sort-select-placeholder') || 'Sort by'}
          placeholderOut
          text=""
        /> */}
      </HeadingContainer>
      <CarouselContainer>
        <Swiper
          ref={swiperRef}
          spaceBetween={21}
          slidesPerView={slidesNumber}
          onSwiper={swiper => {
            setCurrentAmountOfViews(swiper.snapGrid?.length);
          }}
          onSlideChange={swiper => {
            setCurrentView(swiper.activeIndex);
            setStartOfViews(swiper.isBeginning);
            setEndOfViews(swiper.isEnd);
            setCurrentAmountOfViews(swiper.snapGrid?.length);
          }}
          style={{padding: '20px'}}
        >
          {blogsList.map(blog => (
            <SwiperSlide key={blog.slug} style={{display: 'flex', justifyContent: 'center'}}>
              <BlogCard
                key={blog.id}
                date={blog.date}
                id={blog.id}
                imageAlt={blog.mainImg.title}
                imageUrl={blog.mainImg.url}
                title={blog.title}
                tags={blog.tags}
                slug={blog.slug}
                likes={blog.favorites}
                views={blog.views}
                likedByUser={!!userData?.blogsLiked?.find(bl => bl.slug === blog.slug)}
                onPillClicked={handleFilterTag}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselContainer>
      <SliderControlContainer>
        <Pagination
          // @ts-ignore
          nextPage={() => swiperRef?.current?.swiper?.slideNext()}
          // @ts-ignore
          previousPage={() => swiperRef?.current?.swiper?.slidePrev()}
          dotsAmmount={currentAmountOfViews}
          currentValue={currentView}
          disableNextPageButton={endOfViews}
          disablePreviousPageButton={startOfViews}
          roundedSelectors
          extraButton
          extraButtonHref={pages.BLOGS}
          nextPageButtonStyle={{cursor: 'default'}}
          previousPageButtonStyle={{cursor: 'default'}}
        />
      </SliderControlContainer>
    </StyledWrapper>
  );
}
