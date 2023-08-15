const body = document.body;
const html = document.documentElement;

const height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);
export const smoothScrollTo = (
  y = height,
  { duration = height / 10, offset = 0 } = {}
) => {
  const easeOutCubic = (t) => --t * t * t + 1;
  const startY = window.scrollY;
  const difference = y - startY;
  const startTime = performance.now();

  if (y === startY + offset) {
    return Promise.resolve(undefined);
  }

  return new Promise((resolve) => {
    const step = () => {
      const progress = (performance.now() - startTime) / duration;
      const amount = easeOutCubic(progress);
      window.scrollTo({ top: startY + amount * difference - offset });
      if (progress < 0.99) {
        window.requestAnimationFrame(step);
      } else {
        resolve(undefined);
      }
    };
    step();
  });
};
