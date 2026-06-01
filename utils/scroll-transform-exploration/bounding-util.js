import { getMinMaxBottomBounding, getMinMaxTopBounding } from './animation-util';

export const getElementTopBounding = (
  elementId,
) => {
  const element = document.getElementById(elementId);
  if(!element) return { topBounding: 0, minTopBounding: 0, maxTopBounding: 0 };

  const elementBounding = element.getBoundingClientRect();
  const { top: currentTopBounding } = elementBounding;

  const minTopBounding = 0;
  const maxTopBounding = element.clientHeight;
  const topBounding = getMinMaxTopBounding(
    minTopBounding,
    maxTopBounding,
    currentTopBounding,
  );

  return { topBounding, minTopBounding, maxTopBounding };
};
