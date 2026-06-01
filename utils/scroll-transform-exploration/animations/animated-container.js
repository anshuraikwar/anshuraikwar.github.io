import { ElementID, ScrollElementIDEnum } from '@/constants/scroll-transform-exploration/element-id.enum.ts';
import { getElementTopBounding } from '@/utils/scroll-transform-exploration/bounding-util';
import { getValueInNewRange } from '@/utils/scroll-transform-exploration/animation-util';
import { ConversionType } from '@/constants/scroll-transform-exploration/conversion-type.enum.ts';

export const animatedContainerScaleAnimation = () => {
  const {
    topBounding: phoneOutBounding,
    maxTopBounding: oldPhoneOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.PHONE_OUT);
  const {
    topBounding: tabletInBounding,
    maxTopBounding: oldTabletInMax,
  } = getElementTopBounding(ScrollElementIDEnum.TABLET_IN);
  const {
    topBounding: tabletOutBounding,
    maxTopBounding: oldTabletOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.TABLET_OUT);

  const animatedContainer = document.getElementById(ElementID.ANIMATION_CONTAINER);

  let initialScale = 0.75; // 0.5; // 1;
  let huluTvScale = 0.75; // 0.5; // 1;
  let tabletScale = 0.825; // 0.75; // 1.25;
  const windowWidth = window.innerWidth;
  if (windowWidth < 809) {
    initialScale = 0.561; // 0.425; // 0.85;
    huluTvScale = 0.363; // 0.275; // 0.55;
    tabletScale = 0.75; // 0.5; // 1;
  }

  let oldScaleMax = oldPhoneOutMax;
  let scaleBounding = phoneOutBounding;
  let newScaleMax = initialScale; // 1;
  let scaleConversionType = [ConversionType.REVERSE];
  if (tabletInBounding > 0) {
    oldScaleMax = oldTabletInMax;
    scaleBounding = tabletInBounding;
    newScaleMax = tabletScale;
    scaleConversionType = [];
  }
  if (tabletOutBounding > 0) {
    oldScaleMax = oldTabletOutMax;
    scaleBounding = tabletOutBounding;
    newScaleMax = tabletScale;
    scaleConversionType = [ConversionType.REVERSE];
  }
  const scale = getValueInNewRange(
    0,
    oldScaleMax,
    scaleBounding,
    huluTvScale,
    newScaleMax,
    scaleConversionType,
  );
  animatedContainer.style.transform = `
    perspective(1200px)
    scale(${scale})
  `;
};
