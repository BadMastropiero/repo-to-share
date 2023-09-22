import Image from 'next/image';
import {useContext, useEffect} from 'react';
import {ThemeContext} from 'styled-components';
import Markdown from 'react-markdown';
import {Typography} from 'tetraimpacts-components-library';

// Interfaces
import IReactMarkdown, {ElementHref} from './ReactMarkdown.interface';

// Styles
import {RMListItem, RMOrderedList, RMUnorderedList} from './ReactMarkdown.styles';

const ul = ({children}: any) => <RMUnorderedList>{children}</RMUnorderedList>;

const ol = ({children}: any) => <RMOrderedList>{children}</RMOrderedList>;

const li = ({children}: any) => <RMListItem>{children}</RMListItem>;

const img = ({node}: any) => {
  const {src, alt} = node.properties;
  return (
    <Image
      src={`https:${src}`}
      alt={alt}
      width={704}
      height={400}
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  );
};

export default function ReactMarkdown({content, setIndexContent}: IReactMarkdown) {
  const {colors} = useContext(ThemeContext);
  const indexItems: ElementHref[] = [];

  const p = ({children}: any) => (
    <Typography fontSize="16px" lineHeight="26px" colorPreset={colors.primary800}>
      {children}
    </Typography>
  );

  const h1 = ({children, node}: any) => {
    const id: string = children[0].replace(/ /g, '-').toLowerCase();
    indexItems.push({
      id,
      title: children[0],
      type: node.tagName,
    });
    return (
      <Typography
        id={id}
        customColor={colors.primary}
        style={{
          fontSize: '24px',
          lineHeight: '28px',
          fontWeight: '700',
        }}
      >
        {children}
      </Typography>
    );
  };

  const h2 = ({children, node}: any) => {
    const id: string = children[0].replace(/ /g, '-').toLowerCase();
    indexItems.push({
      id,
      title: children[0],
      type: node.tagName,
    });

    return (
      <Typography
        id={id}
        customColor={colors.primary}
        style={{
          fontWeight: '700',
          fontSize: '16px',
          lineHeight: '18px',
        }}
      >
        {children}
      </Typography>
    );
  };

  const h3 = ({children, node}: any) => {
    const id: string = children[0].replace(/ /g, '-').toLowerCase();
    indexItems.push({
      id,
      title: children[0],
      type: node.tagName,
    });

    return (
      <Typography
        id={id}
        customColor={colors.primary}
        style={{
          fontWeight: '700',
          fontSize: '15px',
          lineHeight: '18px',
        }}
      >
        {children}
      </Typography>
    );
  };
  const h4 = ({children, node}: any) => {
    const id: string = children[0].replace(/ /g, '-').toLowerCase();
    indexItems.push({
      id,
      title: children[0],
      type: node.tagName,
    });

    return (
      <Typography
        id={id}
        customColor={colors.primary}
        style={{
          fontWeight: '700',
          fontSize: '14px',
          lineHeight: '18px',
        }}
      >
        {children}
      </Typography>
    );
  };
  const h5 = ({children, node}: any) => {
    const id: string = children[0].replace(/ /g, '-').toLowerCase();
    indexItems.push({
      id,
      title: children[0],
      type: node.tagName,
    });

    return (
      <Typography
        id={id}
        customColor={colors.primary}
        style={{
          fontWeight: '700',
          fontSize: '13px',
          lineHeight: '18px',
        }}
      >
        {children}
      </Typography>
    );
  };
  const h6 = ({children, node}: any) => {
    const id: string = children[0].replace(/ /g, '-').toLowerCase();
    indexItems.push({
      id,
      title: children[0],
      type: node.tagName,
    });

    return (
      <Typography
        id={id}
        customColor={colors.primary}
        style={{
          fontWeight: '700',
          fontSize: '12px',
          lineHeight: '18px',
        }}
      >
        {children}
      </Typography>
    );
  };

  // TODO: Fix this component
  const removeDuplicates = (arr: ElementHref[]) => {
    const baseObject = {};
    /* @ts-ignore */
    return arr.filter(item => {
      /* @ts-ignore */
      if (baseObject[item.id]) return false;
      /* @ts-ignore */
      baseObject[item.id] = true;
      /* @ts-ignore */
      return baseObject[item.id];
    });
  };

  useEffect(() => {
    if (setIndexContent) {
      setIndexContent(removeDuplicates(indexItems));
    }
  }, [content]);

  return (
    <Markdown
      components={{
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ul,
        ol,
        li,
        img,
      }}
    >
      {content}
    </Markdown>
  );
}
