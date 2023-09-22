import {Typography} from 'tetraimpacts-components-library';
import TypeWriterContentProps from './TypeWriterContent.interface';
import {useTypedWord, TypePhase} from './TypeWriterContent.hook';
import {TypeWriterContainer} from './TypeWriterContent.styles';

function TypeWriterContent({
  words,
  phrase,
  className,
  fontSize = '24px',
  style,
}: TypeWriterContentProps) {
  const {typedWord, phase} = useTypedWord(words);

  return (
    <TypeWriterContainer style={style}>
      <Typography
        colorPreset="secondary"
        fontSize={fontSize}
        lineHeight="150%"
        padding="0px"
        preset="title"
        textAlign="center"
        variant="h2"
        className={`${className} 
                ${phase !== TypePhase.Deleting ? 'end-cursor' : ''}
                ${phase === TypePhase.Pausing ? 'blinking' : ''}
            `}
      >
        {phrase} <span> {typedWord} </span>
      </Typography>
    </TypeWriterContainer>
  );
}

export default TypeWriterContent;
