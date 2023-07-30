import { type MotionValue, motion } from 'framer-motion';

export const HeroArrow = () => {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" />
    </svg>
  );
};

interface FooterArrowProp {
  rotate: MotionValue<number>;
}

export const FooterArrow: React.FC<FooterArrowProp> = ({ rotate }) => {
  return (
    <motion.svg
      style={{ rotate, scale: 2 }}
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" />
    </motion.svg>
  );
};
