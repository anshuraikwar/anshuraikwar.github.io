import { ConversionType } from '@/constants/scroll-transform-exploration/conversion-type.enum.ts';

import { getElementTopBounding } from '@/utils/scroll-transform-exploration/bounding-util';
import { getValueInNewRange } from '@/utils/scroll-transform-exploration/animation-util';

const laptopInOutTranslateYAnimationUtil = (
  laptopInId,
  laptopOutId,
  levelId,
) => {
  const {
    topBounding: laptopInBounding,
    maxTopBounding: oldLaptopInMax,
  } = getElementTopBounding(laptopInId);
  const {
    topBounding: tvLaptopOutBounding,
    maxTopBounding: oldLaptopOutMax,
  } = getElementTopBounding(laptopOutId);

  // laptop in out translate Y animation
  let oldTranslateYMax = oldLaptopInMax;
  let translateYBounding = laptopInBounding;
  let translateYConversionType = [ConversionType.REVERSE];
  if (tvLaptopOutBounding > 0) {
    oldTranslateYMax = oldLaptopOutMax;
    translateYBounding = tvLaptopOutBounding;
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

export const laptopInRotateXAnimationUtil = (
  laptopInId,
  laptopOutId,
) => {
  const {
    topBounding: laptopInBounding,
    maxTopBounding: oldLaptopInMax,
  } = getElementTopBounding(laptopInId);
  const {
    topBounding: tvLaptopOutBounding,
    maxTopBounding: oldLaptopOutMax,
  } = getElementTopBounding(laptopOutId);

  // laptop in rotate X animation
  let oldRotateXMax = oldLaptopInMax;
  let rotateXBounding = laptopInBounding;
  let rotateXConversionType = [ConversionType.REVERSE, ConversionType.NEGATIVE];
  if (tvLaptopOutBounding > 0) {
    oldRotateXMax = oldLaptopOutMax;
    rotateXBounding = tvLaptopOutBounding;
    rotateXConversionType = [];
  }
  const levelRotateX = getValueInNewRange(
    0,
    oldRotateXMax,
    rotateXBounding,
    0,
    90,
    rotateXConversionType,
  );
  return levelRotateX;
};

export const laptopInOutOpacityAnimationUtil = (
  laptopFadeInId,
  laptopFadeOutId,
) => {
  const {
    topBounding: laptopFadeInBounding,
    maxTopBounding: oldLaptopFadeInMax,
  } = getElementTopBounding(laptopFadeInId);
  const {
    topBounding: laptopFadeOutBounding,
    maxTopBounding: oldLaptopFadeOutMax,
  } = getElementTopBounding(laptopFadeOutId);

  // laptop in out opacity animation
  let oldOpacityMax = oldLaptopFadeInMax;
  let opacityBounding = laptopFadeInBounding;
  let opacityConversionType = [];
  if (laptopFadeOutBounding > 0) {
    oldOpacityMax = oldLaptopFadeOutMax;
    opacityBounding = laptopFadeOutBounding;
    opacityConversionType = [ConversionType.REVERSE];
  }
  const laptopOpacity = getValueInNewRange(
    0,
    oldOpacityMax,
    opacityBounding,
    0,
    1,
    opacityConversionType,
  );
  return laptopOpacity;
};

export const laptopInOutAnimation = (
  laptopLevelIdsList,
  laptopInId,
  laptopOutId,
  laptopId,
  laptopFadeInId,
  laptopFadeOutId,
) => {
  laptopLevelIdsList.map((levelId, index) => {
    const level = document.getElementById(levelId);

    const levelTranslateY = laptopInOutTranslateYAnimationUtil(laptopInId, laptopOutId, index);
    const levelRotateX = laptopInRotateXAnimationUtil(laptopInId, laptopOutId);
    level.style.transform = `
      perspective(1200px)
      translateY(${levelTranslateY}px)
      rotateX(${levelRotateX}deg)
    `;
    return null;
  });

  const laptop = document.getElementById(laptopId);
  laptop.style.opacity = laptopInOutOpacityAnimationUtil(laptopFadeInId, laptopFadeOutId);
};

export const laptopInBottomContAnimation = (
  laptopBottomFadeIn,
  laptopBottomContId,
) => {
  const {
    topBounding: laptopBottomContFadeInBounding,
    maxTopBounding: oldLaptopBottomContFadeInMax,
  } = getElementTopBounding(laptopBottomFadeIn);

  // laptop-in bottom-cont opacity animation
  const laptopBottomContOpacity = getValueInNewRange(
    0,
    oldLaptopBottomContFadeInMax,
    laptopBottomContFadeInBounding,
    0,
    1,
  );

  // laptop-in bottom-cont perspective animation
  const laptopBottomContPersp = getValueInNewRange(
    0,
    oldLaptopBottomContFadeInMax,
    laptopBottomContFadeInBounding,
    1200,
    5000,
  );

  const laptopBottomCont = document.getElementById(laptopBottomContId);
  laptopBottomCont.style.opacity = laptopBottomContOpacity;
  laptopBottomCont.style.transform = `
    perspective(${laptopBottomContPersp}px)
  `;
};

export const laptopInBottomAnimation = (
  laptopInId,
  laptopOutId,
  laptopBottomId,
) => {
  const {
    topBounding: laptopInBounding,
    maxTopBounding: oldLaptopInMax,
  } = getElementTopBounding(laptopInId);
  const {
    topBounding: laptopOutBounding,
    maxTopBounding: oldLaptopOutMax,
  } = getElementTopBounding(laptopOutId);

  // laptop-in bottom translateY animation
  let oldTranslateYMax = oldLaptopInMax;
  let translateYBounding = laptopInBounding;
  let newTranslateYMin = 38;

  let translateYConversionType = [];
  if (laptopOutBounding > 0) {
    oldTranslateYMax = oldLaptopOutMax;
    translateYBounding = laptopOutBounding;
    newTranslateYMin = 59.5;
    translateYConversionType = [ConversionType.REVERSE];
  }
  const laptopBottomTranslateY = getValueInNewRange(
    0,
    oldTranslateYMax,
    translateYBounding,
    newTranslateYMin,
    62.5,
    translateYConversionType,
  );

  // laptop-in-out bottom scale animation
  let oldScaleMax = oldLaptopInMax;
  let scaleBounding = laptopInBounding;
  let scaleConversionType = [];
  if (laptopOutBounding > 0) {
    oldScaleMax = oldLaptopOutMax;
    scaleBounding = laptopOutBounding;
    scaleConversionType = [ConversionType.REVERSE];
  }
  const laptopBottomScale = getValueInNewRange(
    0,
    oldScaleMax,
    scaleBounding,
    0.7,
    1.15,
    scaleConversionType,
  );

  // laptop-in-out bottom rotateX animation
  let oldRotateXMax = oldLaptopInMax;
  let rotateXBounding = laptopInBounding;
  let rotateXConversionType = [];
  if (laptopOutBounding > 0) {
    oldRotateXMax = oldLaptopOutMax;
    rotateXBounding = laptopOutBounding;
    rotateXConversionType = [ConversionType.REVERSE];
  }
  const laptopBottomRotateX = getValueInNewRange(
    0,
    oldRotateXMax,
    rotateXBounding,
    90,
    95,
    rotateXConversionType,
  );

  const laptopBottom = document.getElementById(laptopBottomId);
  laptopBottom.style.transform = `
    perspective(1200px)
    translateY(${laptopBottomTranslateY}%)
    scale(${laptopBottomScale})
    rotateX(-${laptopBottomRotateX}deg)
  `;
};