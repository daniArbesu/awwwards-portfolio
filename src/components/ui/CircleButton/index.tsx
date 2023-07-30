import { useEffect, useRef } from 'react';
import styles from './style.module.css';
import { gsap } from 'gsap';

interface Props {
  children: JSX.Element;
  backgroundColor?: string;
  className: string;
}

const CircleButton: React.FC<Props> = ({
  children,
  backgroundColor = '#455CE9',
  ...attributes
}) => {
  const circleRef = useRef(null);
  const timeline = useRef(gsap.timeline({ paused: true }));
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    timeline.current
      .to(
        circleRef.current,
        { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' },
        'enter'
      )
      .to(circleRef.current, { top: '-150%', width: '125%', duration: 0.25 }, 'exit');
  }, []);

  const handleMouseEnter = () => {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }
    timeline.current.tweenFromTo('enter', 'exit');
  };
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <div
      style={{ overflow: 'hidden' }}
      {...attributes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div ref={circleRef} style={{ backgroundColor }} className={styles.circle}></div>
    </div>
  );
};

export default CircleButton;
