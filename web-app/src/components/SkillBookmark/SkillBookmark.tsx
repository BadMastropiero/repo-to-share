// Components
import ReactMarkdown from 'components/ReactMarkdown/ReactMarkdown';
import TextList from 'components/TextList/TextList';

// Styles
import StyledSkillBookmark, {MarkdownContainer} from './SkillBookmark.styles';

// Interfaces
import SkillBookmarkProps from './SkillBookmark.interface';

export default function SkillBookmark({content, perks, isClickable}: SkillBookmarkProps) {
  return (
    <StyledSkillBookmark alwaysShowRibbon="left" primary isClickable={isClickable}>
      <MarkdownContainer>
        <ReactMarkdown content={content} />
      </MarkdownContainer>
      <TextList bulletsPoints={perks} />
    </StyledSkillBookmark>
  );
}
