import {CSSProperties} from 'react';

export default interface TypeWriterContentProps {
  words: string[];
  phrase?: string;
  fontSize?: string;
  className?: string;
  style?: CSSProperties;
}
