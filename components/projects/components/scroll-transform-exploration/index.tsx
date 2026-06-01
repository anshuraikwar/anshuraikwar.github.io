"use client";

import React, { useEffect } from 'react';

import './index.css';

import { ElementID, ScrollElementIDEnum } from '@/constants/scroll-transform-exploration/element-id.enum';

import AnimationContainer from './components/animation-container';
import MainContent from './components/main-content';

import { animatedContainerScaleAnimation } from '@/utils/scroll-transform-exploration/animations/animated-container';
import { romentoInPhoneOutAnimation, romentoVideoInAnimation } from '@/utils/scroll-transform-exploration/animations/romento';
import { huluTVInOutAnimation, huluTvStandOutAnimation } from '@/utils/scroll-transform-exploration/animations/hulu-tv';
import {
  laptopInBottomAnimation,
  laptopInBottomContAnimation,
  laptopInOutAnimation,
} from '@/utils/scroll-transform-exploration/animations/laptop';


export default function ScrollTransformExploration() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // whole animated container
      animatedContainerScaleAnimation();

      // romento in phone out animation
      romentoInPhoneOutAnimation();
      romentoVideoInAnimation();

      // hulu tv animation
      huluTVInOutAnimation();
      huluTvStandOutAnimation();

      // laptop-1 animation
      laptopInBottomContAnimation(
        ScrollElementIDEnum.LAPTOP_1_BOTTOM_FADE_IN,
        ElementID.LAPTOP_1_BOTTOM_CONT,
      );
      laptopInBottomAnimation(
        ScrollElementIDEnum.LAPTOP_1_IN,
        ScrollElementIDEnum.LAPTOP_1_OUT,
        ElementID.LAPTOP_1_BOTTOM,
      );
      laptopInOutAnimation(
        [
          ElementID.LAPTOP_1_LEVEL_0,
          ElementID.LAPTOP_1_LEVEL_1,
          ElementID.LAPTOP_1_LEVEL_2,
          ElementID.LAPTOP_1_LEVEL_3,
        ],
        ScrollElementIDEnum.LAPTOP_1_IN,
        ScrollElementIDEnum.LAPTOP_1_OUT,
        ElementID.LAPTOP_1,
        ScrollElementIDEnum.LAPTOP_1_FADE_IN,
        ScrollElementIDEnum.LAPTOP_1_FADE_OUT,
      );
    });
  }, []);

  return (
    <div className="scroll_transform_exploration w-full h-[75vw] lg:h-full flex items-center justify-center lg:justify-end relative z-10" id="scroll_transform_exploration">
      <AnimationContainer />
      <MainContent />
    </div>
  );
}