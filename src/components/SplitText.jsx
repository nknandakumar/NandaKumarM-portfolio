import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const SplitText = ({
  text = 'developer',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, y: 40 },
  animationTo = { opacity: 1, y: 0 },
  easing = 'easeOut',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  infinite = false,
}) => {
  const words = text.split(' ').map(word => word.split(''));
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline ${className}`}
      style={{ textAlign, whiteSpace: 'normal', wordWrap: 'break-word' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.map((letter, letterIndex) => {
            const index = words
              .slice(0, wordIndex)
              .reduce((acc, w) => acc + w.length, 0) + letterIndex;

            return (
              <motion.span
                key={index}
                initial={animationFrom}
                animate={inView ? animationTo : animationFrom}
                transition={{
                  duration: 0.6,
                  delay: index * (delay / 1000),
                  ease: easing,
                  repeat: infinite ? Infinity : 0,
                  repeatType: 'reverse',
                }}
                className="inline-block transform transition-opacity will-change-transform"
              >
                {letter}
              </motion.span>
            );
          })}
          <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
        </span>
      ))}
    </p>
  );
};

export default SplitText;
