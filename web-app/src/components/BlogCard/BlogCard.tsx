import {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import Image from 'next/image';
import {
  Favorite,
  Icon,
  Pill,
  Share,
  Typography,
  Visibility,
  toast,
} from 'tetraimpacts-components-library';

// Components
import Link from 'components/Link/Link';

// Hooks
import {useTranslation} from 'next-i18next';

// Config constants
import {HOST_DOMAIN} from 'config/constants';
import {pages} from 'config/pagesUrls';

// Styles
import {
  BlogCardTitle,
  CardContainer,
  CardStaticticsContainer,
  CardStaticticsItem,
  IllustrationContainer,
  InfoContainer,
  ItemWrapper,
  TagsContainer,
} from './BlogCard.styles';

// Interfaces
import BlogCardProps from './BlogCard.interface';

export default function BlogCard({
  imageUrl,
  imageAlt,
  views,
  date,
  title,
  tags,
  slug,
  likes,
  likedByUser,
  hasImagePriority = false,
  primary,
  shareButtonAction,
  onPillClicked,
}: BlogCardProps) {
  const {colors} = useContext(ThemeContext);
  const {t} = useTranslation();

  const blogSlug = `${pages.BLOGS}/${slug}`;

  const handleBlogSharing = () => {
    if (navigator.share) {
      navigator
        .share({
          title,
          text: 'Blogs | Tetraimpacts',
          url: blogSlug,
        })
        .catch(() =>
          toast({
            message: t('toast-error-sharing-url-title'),
            noCloseButton: true,
            noIcon: true,
            noAction: true,
            type: 'error',
            isSnackbar: true,
          })
        );
    } else if (navigator.clipboard) {
      navigator.clipboard
        .writeText(`${HOST_DOMAIN}/${blogSlug}`)
        .then(() =>
          toast({
            message: t('toast-copied-url-title'),
            noCloseButton: true,
            noIcon: true,
            noAction: true,
            type: 'success',
            isSnackbar: true,
          })
        )
        .catch(() =>
          toast({
            message: t('toast-error-copying-url-title'),
            noCloseButton: true,
            noIcon: true,
            noAction: true,
            type: 'error',
            isSnackbar: true,
          })
        );
    }
  };

  return (
    <CardContainer variant="blog">
      <IllustrationContainer>
        <Link href={blogSlug}>
          <Image
            src={`${imageUrl}?fm=png&h=295`}
            alt={imageAlt}
            fill
            style={{objectFit: 'cover', borderRadius: '10px'}}
            title={imageAlt}
            priority={hasImagePriority}
            quality={100}
            sizes="(max-width: 768px) 380px, 100vw"
          />
        </Link>
      </IllustrationContainer>
      <InfoContainer>
        <CardStaticticsContainer>
          <ItemWrapper>
            <CardStaticticsItem>
              <Icon
                height="14px"
                width="14px"
                icon={Visibility}
                customColor={colors.primaryLight}
              />
              <Typography color={colors.primaryLight}>{views || 0}</Typography>
            </CardStaticticsItem>
            <CardStaticticsItem>
              <Icon
                height="14px"
                width="14px"
                icon={Favorite}
                customColor={likedByUser ? colors.toast.error : colors.primaryLight}
              />
              <Typography color={colors.primaryLight}>{likes}</Typography>
            </CardStaticticsItem>
          </ItemWrapper>
          <ItemWrapper>
            <CardStaticticsItem>
              <Typography
                color={colors.primaryLight}
              >{`${date?.day} / ${date?.month} / ${date?.year}`}</Typography>
            </CardStaticticsItem>
            <Pill
              width={24}
              clickable
              height={24}
              beforeIcon={Share}
              onClick={shareButtonAction || handleBlogSharing}
              aria-label={`${t('share')}`}
              role="button"
            />
          </ItemWrapper>
        </CardStaticticsContainer>
        <Link href={blogSlug}>
          <BlogCardTitle lineNumbers={2} primary={primary}>
            {title}
          </BlogCardTitle>
        </Link>
        {tags.length ? (
          <TagsContainer role="list">
            {tags.map(tag => (
              <Pill
                style={{cursor: 'pointer'}}
                clickable
                key={tag.id}
                text={t(tag.id) || tag.text}
                onClick={() => onPillClicked && onPillClicked(tag.id)}
              />
            ))}
          </TagsContainer>
        ) : null}
      </InfoContainer>
    </CardContainer>
  );
}
