import { ConversionType } from '@/constants/scroll-transform-exploration/conversion-type.enum';

export const getMinMaxTopBounding = (
  oldMin,
  oldMax,
  current,
) => {
  let top = current;
  if (top > 0) top = 0;
  top = Math.abs(top);
  if (top > oldMax) top = oldMax;
  if (top < oldMin) top = oldMin;
  return top;
};
export const getMinMaxBottomBounding = (
  oldMin,
  oldMax,
  current,
) => {
  let bottom = current;
  if (bottom > oldMax) bottom = oldMax;
  if (bottom < oldMin) bottom = oldMin;
  return bottom;
};

const getNewValueConversionOnLinearCurve = (
  oldMin,
  oldMax,
  current,
  newMin,
  newMax,
) => {
  const oldRange = (oldMax - oldMin);
  const newRange = (newMax - newMin);
  const newValue = (
    ((current - oldMin) * newRange)
    / oldRange
  ) + newMin;
  return newValue;
};

export const getNewValueConversionOnSinusoidalCurve = (
  x1,
  x,
  x2,
) => {
  if (x1 === x2) return x;
  const y1 = x1;
  const y2 = x2;

  const pt1 = -((y2 - y1) / 2);
  const pt2 = Math.cos((Math.PI * (x1 - x)) / (x1 - x2));
  const pt3 = ((y2 + y1) / 2);
  let y = (pt1 * pt2) + pt3;
  y = y.toFixed(4);
  return y;
};

export const getValueInNewRange = (
  oldMin,
  oldMax,
  current,
  newMin,
  newMax,
  conversionTypes = [],
  percentWRT = null,
) => {
  const oldValue = getMinMaxBottomBounding(current, oldMin, oldMax);

  let newValue = getNewValueConversionOnLinearCurve(
    oldMin,
    oldMax,
    oldValue,
    newMin,
    newMax,
  );

  newValue = getNewValueConversionOnSinusoidalCurve(
    newMin,
    newValue,
    newMax,
  );
  if ((conversionTypes).includes(ConversionType.REVERSE)) {
    newValue = newMax - (newValue - newMin);
  }
  if ((conversionTypes).includes(ConversionType.NEGATIVE)) newValue = 0 - newValue;
  if ((conversionTypes).includes(ConversionType.PERCENT)) {
    newValue = (newValue / percentWRT) * 100;
  }

  return newValue;
};
