import {FormEvent, useEffect, useState} from 'react';
import {
  Button,
  Close,
  Dropdown,
  Input,
  Pill,
  Search,
  TiOptions,
} from 'tetraimpacts-components-library';
import {useRouter} from 'next/router';

// Components
import BlogCard from 'components/BlogCard/BlogCard';
import Pagination from 'components/Pagination/Pagination';

// Hooks
import {useTranslation} from 'next-i18next';
import {useUserData} from 'contexts/UserData';

// Interfaces
import {OrderBy} from 'modules/landing/domain/contentful/types';
import BlogsProps from './BlogsList.interface';

// Styles
import {
  ContentWrapper,
  HeadingContent,
  HeadingTitle,
  NoContentText,
  PaginationWrapper,
  SearchInputContainer,
  SelectedTagsContainer,
  SortContainer,
  StyledBlogsContainer,
} from './BlogsList.styles';

export default function BlogsList({
  blogs,
  page,
  totalPages,
  searchTerm: searchTermProp,
  orderBy,
  selectedTags = [],
}: BlogsProps) {
  const {t} = useTranslation();
  const router = useRouter();
  const {userData} = useUserData();

  const sortOptions = [
    {
      isDisabled: false,
      isFixed: false,
      label: t('select-option-date'),
      value: OrderBy.DATE,
    },
    {
      isDisabled: false,
      isFixed: false,
      label: t('select-option-upvotes'),
      value: OrderBy.LIKES,
    },
    {
      isDisabled: false,
      isFixed: false,
      label: t('select-option-readings'),
      value: OrderBy.READS,
    },
  ];

  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [searchTerm, setSearchTerm] = useState(searchTermProp || '');
  const selectedTagsIds = selectedTags?.map(tag => tag.id) || [];

  const handleChangePage = (goToPage: number) => {
    const {query, pathname} = router;
    router.push(
      {
        pathname,
        query: {
          ...query,
          page: goToPage,
        },
      },
      undefined,
      {scroll: false}
    );
  };

  const handleNextPage = () => {
    handleChangePage(page + 1);
  };

  const handlePrevPage = () => {
    handleChangePage(page - 1);
  };

  const handleFilterForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {query, pathname} = router;
    router.push(
      {
        pathname,
        query: {
          ...query,
          title: searchTerm,
          page: 1,
        },
      },
      undefined,
      {scroll: false}
    );
  };

  const handleTagFilter = (list: string[]) => {
    const {query, pathname} = router;
    router.push(
      {
        pathname,
        query: {
          ...query,
          tags: list?.join() || null,
          page: 1,
        },
      },
      undefined,
      {scroll: false}
    );
  };

  const handleOrderChange = (value: OrderBy) => {
    const {query, pathname} = router;
    router.push(
      {
        pathname,
        query: {
          ...query,
          order: value,
          page: 1,
        },
      },
      undefined,
      {scroll: false}
    );
  };

  const handleSearchFilterChanged = (event: FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value.toString());
  };

  const handleAddFilterTag = (tag: string) => {
    if (!selectedTagsIds.includes(tag)) handleTagFilter([...selectedTagsIds, tag]);
  };

  const handleRemoveFilterTag = (tag: string) => {
    handleTagFilter([...selectedTagsIds.filter(item => item !== tag)]);
  };

  // Updating list of blogs if prop changes
  // Needed for correct hydration when routing
  useEffect(() => {
    setFilteredBlogs(blogs);
  }, [blogs]);

  return (
    <StyledBlogsContainer>
      <HeadingContent>
        <HeadingTitle>Blogs</HeadingTitle>
        <SortContainer>
          <Dropdown
            options={sortOptions}
            value={
              sortOptions.find(option => option.value === (orderBy as unknown as string)) ||
              sortOptions[0]
            }
            setValue={e => {
              // TODO: Review dropdown types
              handleOrderChange((e as unknown as TiOptions)?.value as unknown as OrderBy);
            }}
            renderSelected
            placeholder={t('blogs-sort-select-placeholder') || 'Sort by'}
            placeholderOut
            text=""
          />
        </SortContainer>
        <SearchInputContainer>
          <form onSubmit={handleFilterForm}>
            <Input
              aria-label="search"
              maskPreset="text"
              text={t('blogs-search-filter-label') || 'Search...'}
              type="text"
              primary
              afterComponent={
                <Button
                  style={{
                    cursor: 'pointer',
                  }}
                  aria-label="search"
                  presetSize="normal"
                  afterIcon={Search}
                  type="submit"
                  rounded
                />
              }
              value={searchTerm}
              onChange={handleSearchFilterChanged}
            />
          </form>
        </SearchInputContainer>
      </HeadingContent>
      {selectedTags && (
        <SelectedTagsContainer>
          {selectedTags?.map(tag => (
            <Pill
              key={tag.id}
              text={t(tag.id) || tag.text}
              afterIcon={Close}
              onAfterIconClick={() => handleRemoveFilterTag(tag.id)}
              afterIconStyles={{cursor: 'pointer'}}
            />
          ))}
        </SelectedTagsContainer>
      )}
      <div>
        <ContentWrapper>
          {filteredBlogs && filteredBlogs.length > 0 ? (
            filteredBlogs.map(blog => (
              <BlogCard
                primary
                id={blog.slug}
                key={blog.slug}
                date={blog.date}
                imageAlt={blog.mainImg.title}
                imageUrl={blog.mainImg.url}
                title={blog.title}
                likes={blog.favorites}
                views={blog.views}
                tags={blog.tags}
                slug={blog.slug}
                onPillClicked={handleAddFilterTag}
                hasImagePriority
                likedByUser={!!userData?.blogsLiked?.find(bl => bl.slug === blog.slug)}
              />
            ))
          ) : (
            <NoContentText>{t('no-blogs-result')}</NoContentText>
          )}
          <PaginationWrapper>
            <Pagination
              currentValue={page - 1}
              paginationClickable
              onClickDot={handleChangePage}
              dotsAmmount={totalPages === 1 ? 0 : totalPages}
              roundedSelectors
              extraButton={false} // Temporarily disable "SEE MORE" button
              nextPage={handleNextPage}
              previousPage={handlePrevPage}
              disablePreviousPageButton={page === 1}
              disableNextPageButton={page === totalPages || totalPages === 0}
            />
          </PaginationWrapper>
        </ContentWrapper>
      </div>
    </StyledBlogsContainer>
  );
}
