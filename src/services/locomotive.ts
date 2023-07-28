export const createLocomotive = async () => {
  const LocomotiveScroll = (await import('locomotive-scroll')).default;
  const locomotiveScroll = new LocomotiveScroll();
  return locomotiveScroll;
};
