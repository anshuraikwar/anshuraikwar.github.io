import { ElementID, ScrollElementIDEnum } from '@/constants/scroll-transform-exploration/element-id.enum.ts';
import {
  huluTVInOutTranslateYAnimationUtil,
  huluTvInRotateXAnimationUtil,
  huluTVInTranslateXAnimationUtil,
  tvInOutOpacityAnimationUtil,
  tvInRotateAnimationUtil,
} from '@/utils/scroll-transform-exploration/reusable-animation-utils';
import { getElementTopBounding } from '@/utils/scroll-transform-exploration/bounding-util';
import { ConversionType } from '@/constants/scroll-transform-exploration/conversion-type.enum';
import { getValueInNewRange } from '@/utils/scroll-transform-exploration/animation-util';

export const huluTVInOutAnimation = () => {
  [
    ElementID.HULU_TV_LEVEL_0,
    ElementID.HULU_TV_LEVEL_1,
    ElementID.HULU_TV_LEVEL_2,
    ElementID.HULU_TV_LEVEL_3,
    ElementID.HULU_TV_LEVEL_4,
  ].map((levelId, index) => {
    const level = document.getElementById(levelId);

    const levelTranslateX = huluTVInTranslateXAnimationUtil(index);
    const levelTranslateY = huluTVInOutTranslateYAnimationUtil(index);
    const levelRotate = tvInRotateAnimationUtil();
    const levelRotateX = huluTvInRotateXAnimationUtil();
    level.style.transform = `
      perspective(1200px)
      translateX(${levelTranslateX}px)
      translateY(${levelTranslateY}px)
      rotate(-${levelRotate}deg)
      rotateX(${levelRotateX}deg)
    `;
    return null;
  });

  const huluTV = document.getElementById(ElementID.HULU_TV);
  huluTV.style.opacity = tvInOutOpacityAnimationUtil();
};

export const huluTvStandOutAnimation = () => {
  const {
    topBounding: tvLegsOutBounding,
    maxTopBounding: oldTvLegsOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_LEGS_OUT);
  const {
    topBounding: tvOutBounding,
    maxTopBounding: oldTvOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_OUT);

  // hulu tv in out translate Y animation
  let oldTranslateYMax = oldTvLegsOutMax;
  let translateYBounding = tvLegsOutBounding;
  let translateYConversionType = [ConversionType.REVERSE, ConversionType.NEGATIVE];
  if (tvOutBounding > 0) {
    oldTranslateYMax = oldTvOutMax;
    translateYBounding = tvOutBounding;
    translateYConversionType = [ConversionType.NEGATIVE];
  }
  const translateY = getValueInNewRange(
    0,
    oldTranslateYMax,
    translateYBounding,
    0,
    40,
    translateYConversionType,
  );

  const huluTvStand = document.getElementById(ElementID.HULU_TV_STAND);
  huluTvStand.style.transform = `
      perspective(1200px)
      translateY(${translateY}px)
  `;
};
