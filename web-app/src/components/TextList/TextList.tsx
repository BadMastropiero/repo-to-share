import React from 'react';

// Styles
import {ListItem, UnorderedList} from './TextList.styles';

// Interfaces
import ITextList from './TextList.interfaces';

export default function TextList({bulletsPoints}: ITextList) {
  return (
    <UnorderedList>
      {bulletsPoints?.length !== 0 &&
        bulletsPoints?.map(point => <ListItem key={point}>{point}</ListItem>)}
    </UnorderedList>
  );
}
