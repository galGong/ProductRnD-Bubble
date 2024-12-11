const RADIUS = 300;

export const useBubblePosition = (index: number, total: number) => {
  const angle = (index * 2 * Math.PI) / total;
  const x = Math.cos(angle) * RADIUS;
  const y = Math.sin(angle) * RADIUS;

  return { x, y };
};