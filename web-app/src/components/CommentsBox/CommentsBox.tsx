import {useContext, useEffect, useState, FormEvent} from 'react';
import {useTranslation} from 'next-i18next';
import {ThemeContext} from 'styled-components';

// Components
import {
  ArrowDown,
  ArrowUp,
  Button,
  Input,
  Person,
  Send,
  Typography,
} from 'tetraimpacts-components-library';
import Image from 'next/image';

// Hooks
import useStickOnScroll from 'hooks/stickOnScroll';

// Styles
import {
  StatisticsItem,
  UserInfo,
  Username,
} from 'modules/blogs/application/ArticleDetail/Article.styles';
import {
  CommentsContainer,
  CommentsHeading,
  Commentary,
  CommentaryHead,
  FeaturedCommentsContainer,
} from './CommentsBox.styles';

// Interfaces
import ICommentsBox from './Comments.interface';

export default function CommentsBox({comments, total, sendComment}: ICommentsBox) {
  const {t} = useTranslation();
  const {colors} = useContext(ThemeContext);
  const [toggleCommentsList, setToggleCommentsList] = useState<boolean>(false);

  const [commentBody, setCommentBody] = useState<string>('');

  const handleSendComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!sendComment || !commentBody || commentBody === '') return;
    if (!sendComment(commentBody)) return;
    setCommentBody('');
  };

  const sticky = useStickOnScroll();

  useEffect(() => setToggleCommentsList(!!total), [total]);

  return (
    <CommentsContainer active={toggleCommentsList} sticky={sticky}>
      <CommentsHeading>
        <Typography
          customColor={colors.primary}
          style={{
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '23px',
          }}
        >
          {t('label-comments')}
        </Typography>
        <Typography
          style={{
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '23px',
          }}
          customColor={colors.primary}
        >
          {total}
        </Typography>
      </CommentsHeading>
      <form onSubmit={handleSendComment}>
        <Input
          type="text"
          aria-label="comment"
          primary
          text={t('placeholder-insert-comment') || ''}
          value={commentBody}
          onChange={e => {
            setCommentBody(e.currentTarget.value);
          }}
          afterComponent={
            <Button
              style={{width: '36px', height: '36px'}}
              beforeIcon={Send}
              type="submit"
              aria-label="send-comment"
            />
          }
        />
      </form>

      {toggleCommentsList && (
        <FeaturedCommentsContainer>
          {comments &&
            comments.map(comment => (
              <Commentary key={comment.id}>
                <CommentaryHead>
                  <UserInfo style={{maxWidth: '53%'}}>
                    <Button
                      afterIconComponent={
                        comment.author.avatar ? (
                          <Image
                            height={30}
                            width={30}
                            src={comment.author.avatar}
                            alt={t('user-photo')}
                            title={comment.author.name}
                          />
                        ) : (
                          <Person height="16px" width="16px" customColor={colors.primaryLight} />
                        )
                      }
                      style={{
                        height: '30px',
                        width: '30px',
                        minWidth: '30px',
                        borderRadius: '50px',
                      }}
                    />
                    <Username customColor={colors.primary} style={{overflowWrap: 'break-word'}}>
                      {comment.author.name}
                    </Username>
                  </UserInfo>
                  <StatisticsItem>
                    <Typography customColor={colors.primaryLight} fontSize="12px" lineHeight="14px">
                      {comment.date.day}/{comment.date.month}/{comment.date.year}
                    </Typography>
                  </StatisticsItem>
                </CommentaryHead>
                <Typography
                  customColor={colors.primary400}
                  style={{
                    fontFamily: 'Roboto Flex',
                    fontSize: '12px',
                    fontWeight: '400',
                    lineHeight: '19px',
                    textAlign: 'left',
                  }}
                >
                  {comment.content}
                </Typography>
              </Commentary>
            ))}
        </FeaturedCommentsContainer>
      )}
      <Button
        disabled={!total && true}
        style={{
          position: 'absolute',
          height: '36px',
          width: '36px',
          left: 'calc(50% - 36px/2)',
          bottom: '-18px',
        }}
        afterIcon={!toggleCommentsList ? ArrowDown : ArrowUp}
        onClick={() => setToggleCommentsList(!toggleCommentsList)}
        aria-label="toggle-comments"
      />
    </CommentsContainer>
  );
}
