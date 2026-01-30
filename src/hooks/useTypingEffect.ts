import { useState, useEffect } from 'react';

export function useTypingEffect(texts: string[], typingSpeed: number = 100, deletingSpeed: number = 50, pauseDuration: number = 2000) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      } else {
        const deleteTimeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(deleteTimeout);
      }
    } else {
      if (currentText === currentFullText) {
        setIsPaused(true);
      } else {
        const typeTimeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(typeTimeout);
      }
    }
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return { currentText, isDeleting };
}
