import {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {
  Favorite,
  Icon,
  Share,
  Timer,
  Typography,
  Visibility,
} from 'tetraimpacts-components-library';

// Hooks
import {useTranslation} from 'next-i18next';

// Styles
import {ShareButton} from 'modules/blogs/application/ArticleDetail/Article.styles';
import {StatisticsContainer, StatisticsItem} from './BlogStatistics.styles';
import IBlogStatistics from './BlogStatistics.interface';

export default function BlogStatistics({
  allLikes,
  createdDate,
  readingTime,
  shareUrl,
  title,
  views,
  isLiked,
  handleLike,
}: IBlogStatistics) {
  const {colors} = useContext(ThemeContext);
  const {t} = useTranslation();

  return (
    <StatisticsContainer>
      <StatisticsItem
        style={{
          backgroundColor: colors.primary50,
          padding: '0px 5px',
          borderRadius: '5px',
          width: '43px',
          height: '24px',
        }}
      >
        <Icon icon={Timer} width="14px" height="14px" primary />
        <Typography customColor={colors.primary}>{readingTime}</Typography>
      </StatisticsItem>
      <StatisticsItem>
        <Icon icon={Visibility} width="14px" height="14px" customColor={colors.primaryLight} />
        <Typography customColor={colors.primaryLight}>{views}</Typography>
      </StatisticsItem>
      <StatisticsItem
        onClick={handleLike}
        style={{cursor: 'pointer'}}
        clickable
        isClicked={isLiked}
      >
        <Icon
          icon={Favorite}
          width="14px"
          height="14px"
          customColor={isLiked ? colors.toast.error : colors.primaryLight}
        />
        <Typography customColor={isLiked ? colors.toast.error : colors.primaryLight}>
          {allLikes}
        </Typography>
      </StatisticsItem>
      <StatisticsItem>
        <Typography
          customColor={colors.primaryLight}
        >{`${createdDate.day} / ${createdDate.month} / ${createdDate.year}`}</Typography>
      </StatisticsItem>
      <ShareButton
        role="button"
        aria-label={`${t('share')}`}
        clickable
        afterIcon={Share}
        style={{width: '24px', height: '24px'}}
        onClick={() => {
          if (navigator.share) {
            navigator
              .share({
                title,
                text: 'Blogs | Tetraimpacts',
                url: shareUrl,
              })
              .then(() => {})
              .catch(() => {});
          }
        }}
      />
    </StatisticsContainer>
  );
}
