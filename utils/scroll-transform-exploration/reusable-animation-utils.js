import { ConversionType } from '@/constants/scroll-transform-exploration/conversion-type.enum';
import { getValueInNewRange } from '@/utils/scroll-transform-exploration/animation-util';
import { getElementTopBounding } from '@/utils/scroll-transform-exploration/bounding-util';
import { ScrollElementIDEnum } from '@/constants/scroll-transform-exploration/element-id.enum';


export const romentoInPhoneOutOpacityAnimationUtil = () => {
  const {
    topBounding: phoneFadeOutBounding,
    maxTopBounding: oldPhoneFadeOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.PHONE_FADE_OUT);

  // romento in phone out opacity animation
  let oldOpacityMax = oldPhoneFadeOutMax;
  let opacityBounding = phoneFadeOutBounding;
  let opacityConversionType = [ConversionType.REVERSE];
  const romentoOpacity = getValueInNewRange(
    0,
    oldOpacityMax,
    opacityBounding,
    0,
    1,
    opacityConversionType,
  );
  return romentoOpacity;
};

export const romentoInPhoneOutTranslateXAnimationUtil = (
  levelId,
) => {
  const {
    topBounding: phoneOutBounding,
    maxTopBounding: oldPhoneOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.PHONE_OUT);

  // romento in phone out translate X animation
  let  oldTranslateXMax = oldPhoneOutMax;
  let  translateXBounding = phoneOutBounding;
  let  translateXConversionType = [ConversionType.NEGATIVE];
  const levelTranslateX = getValueInNewRange(
    0,
    oldTranslateXMax,
    translateXBounding,
    0,
    (32 * levelId),
    translateXConversionType,
  );
  return levelTranslateX;
};

export const romentoInPhoneOutRotateYAnimationUtil = () => {
  const {
    topBounding: phoneOutBounding,
    maxTopBounding: oldPhoneOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.PHONE_OUT);

  // romento in phone out rotate Y animation
  let oldRotateYMax = oldPhoneOutMax;
  let rotateYBounding = phoneOutBounding;
  let rotateYConversionType = [ConversionType.NEGATIVE];
  const levelRotateY = getValueInNewRange(
    0,
    oldRotateYMax,
    rotateYBounding,
    0,
    90,
    rotateYConversionType,
  );
  return levelRotateY;
};

export const phoneOutTranslateYAnimationUtil = (
  levelId,
) => {
  const {
    topBounding: phoneOutBounding,
    maxTopBounding: oldPhoneOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.PHONE_OUT);

  // phone out translate Y animation
  const levelTranslateY = getValueInNewRange(
    0,
    oldPhoneOutMax,
    phoneOutBounding,
    0,
    (32 * levelId),
  );
  return levelTranslateY;
};
export const phoneOutRotateAnimationUtil = () => {
  const {
    topBounding: phoneOutBounding,
    maxTopBounding: oldPhoneOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.PHONE_OUT);

  // phone out rotate animation
  const levelRotate = getValueInNewRange(
    0,
    oldPhoneOutMax,
    phoneOutBounding,
    0,
    45,
  );
  return levelRotate;
};

export const huluTVInTranslateXAnimationUtil = (
  levelId,
) => {
  const {
    topBounding: tvInBounding,
    maxTopBounding: oldTvInMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_IN);

  const levelTranslateX = getValueInNewRange(
    0,
    oldTvInMax,
    tvInBounding,
    0,
    (32 * levelId),
    [ConversionType.REVERSE],
  );
  return levelTranslateX;
};

export const huluTVInOutTranslateYAnimationUtil = (
  levelId,
) => {
  const {
    topBounding: tvInBounding,
    maxTopBounding: oldTvInMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_IN);
  const {
    topBounding: tvOutBounding,
    maxTopBounding: oldTvOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_OUT);

  // tv-in-out rotate Y animation
  let oldTranslateYMax = oldTvInMax;
  let translateYBounding = tvInBounding;
  let translateYConversionType = [ConversionType.REVERSE];
  if (tvOutBounding > 0) {
    oldTranslateYMax = oldTvOutMax;
    translateYBounding = tvOutBounding;
    translateYConversionType = [ConversionType.NEGATIVE];
  }
  const levelTranslateY = getValueInNewRange(
    0,
    oldTranslateYMax,
    translateYBounding,
    0,
    (32 * levelId),
    translateYConversionType,
  );
  return levelTranslateY;
};

export const tvInRotateAnimationUtil = () => {
  const {
    topBounding: tvInBounding,
    maxTopBounding: oldTvInMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_IN);

  // tv in rotate animation
  const levelRotate = getValueInNewRange(
    0,
    oldTvInMax,
    tvInBounding,
    0,
    45,
    [ConversionType.REVERSE],
  );
  return levelRotate;
};

export const huluTvInRotateXAnimationUtil = () => {
  const {
    topBounding: tvInBounding,
    maxTopBounding: oldTvInMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_IN);
  const {
    topBounding: tvOutBounding,
    maxTopBounding: oldTvOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_OUT);

  // tv-in-out rotate Y animation
  let oldRotateYMax = oldTvInMax;
  let rotateYBounding = tvInBounding;
  let rotateYConversionType = [ConversionType.REVERSE, ConversionType.NEGATIVE];
  if (tvOutBounding > 0) {
    oldRotateYMax = oldTvOutMax;
    rotateYBounding = tvOutBounding;
    rotateYConversionType = [];
  }
  const levelRotateY = getValueInNewRange(
    0,
    oldRotateYMax,
    rotateYBounding,
    0,
    90,
    rotateYConversionType,
  );
  return levelRotateY;
};

export const tvInOutOpacityAnimationUtil = () => {
  const {
    topBounding: tvFadeInBounding,
    maxTopBounding: oldTvFadeInMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_FADE_IN);
  const {
    topBounding: tvFadeOutBounding,
    maxTopBounding: oldTvFadeOutMax,
  } = getElementTopBounding(ScrollElementIDEnum.TV_FADE_OUT);

  // hulu tv in out opacity animation
  let oldOpacityMax = oldTvFadeInMax;
  let opacityBounding = tvFadeInBounding;
  let opacityConversionType = [];
  if (tvFadeOutBounding > 0) {
    oldOpacityMax = oldTvFadeOutMax;
    opacityBounding = tvFadeOutBounding;
    opacityConversionType = [ConversionType.REVERSE];
  }
  const huluTvOpacity = getValueInNewRange(
    0,
    oldOpacityMax,
    opacityBounding,
    0,
    1,
    opacityConversionType,
  );
  return huluTvOpacity;
};
