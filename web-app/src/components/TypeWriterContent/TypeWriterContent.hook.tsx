import {useCallback, useEffect, useState} from 'react';

export enum TypePhase {
  Typing,
  Pausing,
  Deleting,
}

const TYPING_INTERVAL_MIN = 80;
const TYPING_INTERVAL_MAX = 150;
const TYPING_PAUSE_MS = 3000;
const DELETING_INTERVAL = 50;
const DELETING_PAUSE_MS = 500;

const getRandomTypingInterval = () =>
  Math.floor(Math.random() * (TYPING_INTERVAL_MAX - TYPING_INTERVAL_MIN + 1)) + TYPING_INTERVAL_MIN;

export const useTypedWord = (
  Words: string[]
): {
  typedWord: string;
  selectedWord: string;
  phase: TypePhase;
  resume: () => void;
} => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(TypePhase.Typing);
  const [typedWord, setTypedWord] = useState('');
  const resume = useCallback(() => {
    if (phase !== TypePhase.Pausing) return;
    setPhase(TypePhase.Deleting);
  }, [phase]);

  useEffect(() => {
    switch (phase) {
      case TypePhase.Typing: {
        const nextTypedWord = Words[selectedIndex].slice(0, typedWord.length + 1);

        if (nextTypedWord === typedWord) {
          setPhase(TypePhase.Pausing);
          return undefined;
        }

        const timeout = setTimeout(() => {
          setTypedWord(nextTypedWord);
        }, getRandomTypingInterval());

        return () => clearTimeout(timeout);
      }
      case TypePhase.Deleting: {
        if (!typedWord) {
          const timeout = setTimeout(() => {
            const nextIndex = selectedIndex + 1;
            setSelectedIndex(Words[nextIndex] ? nextIndex : 0);
            setPhase(TypePhase.Typing);
          }, DELETING_PAUSE_MS);
          return () => clearTimeout(timeout);
        }

        const nextRemaining = Words[selectedIndex].slice(0, typedWord.length - 1);

        const timeout = setTimeout(() => {
          setTypedWord(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case TypePhase.Pausing:
      default: {
        const timeout = setTimeout(() => {
          setPhase(TypePhase.Deleting);
        }, TYPING_PAUSE_MS);

        return () => clearTimeout(timeout);
      }
    }
  }, [Words, typedWord, selectedIndex, phase]);

  return {
    typedWord,
    phase,
    resume,
    selectedWord: Words[selectedIndex],
  };
};
