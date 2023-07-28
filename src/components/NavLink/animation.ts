export const slide = {
  initial: { x: '80px' },
  animate: (index: number) => ({
    x: '0px',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    delay: 0.05 * index
  }),
  exit: (index: number) => ({
    x: '80px',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * index }
  })
};
