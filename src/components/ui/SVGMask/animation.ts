// Fix serverside error calling window
const isClientSide = typeof window !== 'undefined';

const initialPath = isClientSide
  ? `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${
      window.innerHeight / 2
    } 100 0`
  : '';
const finalPath = isClientSide
  ? `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${
      window.innerHeight / 2
    } 100 0`
  : '';

export const pathAnimation = {
  initial: {
    d: initialPath
  },
  animate: {
    d: finalPath,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
  },
  exit: { d: initialPath, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }
};
