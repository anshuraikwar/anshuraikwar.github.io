import { ElementID, ScrollElementIDEnum } from '@/constants/scroll-transform-exploration/element-id.enum';
import {
  phoneOutRotateAnimationUtil,
  phoneOutTranslateYAnimationUtil,
  romentoInPhoneOutOpacityAnimationUtil,
  romentoInPhoneOutRotateYAnimationUtil,
  romentoInPhoneOutTranslateXAnimationUtil,
} from '@/utils/scroll-transform-exploration/reusable-animation-utils';
import { getElementTopBounding } from '@/utils/scroll-transform-exploration/bounding-util';
import { getValueInNewRange } from '@/utils/scroll-transform-exploration/animation-util';

export const romentoInPhoneOutAnimation = () => {
  [
    ElementID.ROMENTO_LEVEL_0,
    ElementID.ROMENTO_LEVEL_1,
    ElementID.ROMENTO_LEVEL_2,
    ElementID.ROMENTO_LEVEL_3,
  ].map((levelId, index) => {
    const level = document.getElementById(levelId);

    const levelTranslateX = romentoInPhoneOutTranslateXAnimationUtil(index);
    const levelTranslateY = phoneOutTranslateYAnimationUtil(index);
    const levelRotate = phoneOutRotateAnimationUtil();
    const levelRotateY = romentoInPhoneOutRotateYAnimationUtil();
    level.style.transform = `
      perspective(1200px)
      translateX(${levelTranslateX}px)
      translateY(-${levelTranslateY}px)
      rotate(${levelRotate}deg)
      rotateY(${levelRotateY}deg)
    `;
    // perspective(1200px)translateX(64px)rotateY(90deg)
    // perspective(1200px) translateX(0px) translateY(0px) rotate(0.0062deg) rotateY(-0.0123deg)
    return null;
  });

  const romento = document.getElementById(ElementID.ROMENTO);
  romento.style.opacity = romentoInPhoneOutOpacityAnimationUtil();
};

export const romentoVideoInAnimation = () => {
  const {
    topBounding: romentoInBounding,
    maxTopBounding: oldRomentoInMax,
  } = getElementTopBounding(ScrollElementIDEnum.ROMENTO_IN);

  const romentoVideo = document.getElementById(ElementID.ROMENTO_VIDEO);

  romentoVideo.style.opacity = getValueInNewRange(
    0,
    oldRomentoInMax,
    romentoInBounding,
    0.2,
    0.7,
  );
};
