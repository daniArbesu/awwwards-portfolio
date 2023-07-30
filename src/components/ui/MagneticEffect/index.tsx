import { gsap } from 'gsap';
import React, { useRef, useEffect } from 'react';

interface Props {
  children: JSX.Element;
}

const MagneticEffect: React.FC<Props> = ({ children }) => {
  const magneticRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magneticRef.current, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)'
    });
    const yTo = gsap.quickTo(magneticRef.current, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)'
    });

    if (magneticRef.current !== null) {
      magneticRef.current.addEventListener('mousemove', (event: MouseEvent) => {
        if (magneticRef.current === null) return;

        const { clientX, clientY } = event;
        const { height, width, left, top } = magneticRef.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.35);
        yTo(y * 0.35);
      });
      magneticRef.current.addEventListener('mouseleave', () => {
        xTo(0);
        yTo(0);
      });
    }
  }, []);

  return React.cloneElement(children, { ref: magneticRef });
};

export default MagneticEffect;
