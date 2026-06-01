/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';

// import: styles
import './animation-container-styles/index.css';
import './animation-container-styles/romento-styles.css';
import './animation-container-styles/tv-styles.css';
import './animation-container-styles/laptop-styles.css';

// import: assets
const ROMENTO_LOGO = '/assets/scroll-transform-exploration/svg/romento-logo.svg';
const ROMENTO_VIDEO = '/assets/scroll-transform-exploration/video/romento.mp4';
const HULU_TV = '/assets/scroll-transform-exploration/img/huluTV.webp';
const HULU_TV_VIDEO = '/assets/scroll-transform-exploration/video/huluTV.mp4';
const LAPTOP_1 = '/assets/scroll-transform-exploration/img/laptop_1.webp';
const LAPTOP_1_VIDEO = '/assets/scroll-transform-exploration/video/laptop_1.mp4';

// import: constants
import { ElementID } from '@/constants/scroll-transform-exploration/element-id.enum.ts';

// import: utils
// import: redux
// import: components
// import: lazy load components

const KEYS_CONFIG = [
  [
    {
      className: 'single_key',
      number: 10,
    },
    {
      className: 'double_key',
      number: 1,
    },
  ],
  [
    {
      className: 'single_key',
      number: 12,
    },
  ],
  [
    {
      className: 'double_key',
      number: 1,
    },
    {
      className: 'single_key',
      number: 8,
    },
    {
      className: 'double_key',
      number: 1,
    },
  ],
  [
    {
      className: 'single_key',
      number: 3,
    },
    {
      className: 'space_bar',
      number: 1,
    },
    {
      className: 'single_key',
      number: 3,
    },
  ],
];

export default function AnimationContainer() {
  useEffect(() => {
    const ScrollText = document.getElementById(ElementID.SCROLL_CONT);
    if (!ScrollText) return;

    ScrollText.style.opacity = 1;
    ScrollText.style.transform = 'translateX(-50%) translateY(0px)';
    ScrollText.style.transition = 'transform 0.5s ease 0.1s, opacity 0.5s ease 0.1s';

    const removeTransitionTimer = setTimeout(() => {
      ScrollText.style.transition = 'none';
      clearTimeout(removeTransitionTimer);
    }, 600);
  }, []);

  return (
    <div className="animation_container" id={ElementID.ANIMATION_CONTAINER}>

      {/* romento */}
      <div className="romento" id={ElementID.ROMENTO}>
        <div className="romento_level l_0 frame" id={ElementID.ROMENTO_LEVEL_0} />
        <div className="romento_level l_1" id={ElementID.ROMENTO_LEVEL_1}>
          <div className="romento_video_cont" id={ElementID.ROMENTO_VIDEO}>
            <video className="romento_video" src={ROMENTO_VIDEO} loop autoPlay muted playsInline>
              <track />
            </video>
          </div>
        </div>
        <div className="romento_level l_2" id={ElementID.ROMENTO_LEVEL_2}>
          <div className="romento_gradient" />
        </div>
        <div className="romento_level l_3" id={ElementID.ROMENTO_LEVEL_3}>
          <div className="romento_svg_cont">
            <img src={ROMENTO_LOGO} alt="Romento Logo" />
          </div>
          <div className="romento_text_cont">
            <p className="romento_text">
              Promt conversation and record video with people you love.
            </p>
          </div>
          <div className="home_bar_cont">
            <div className="home_bar romento_home_bar" />
          </div>
        </div>
      </div>

      {/* hulu_tv */}
      <div className="hulu_tv" id={ElementID.HULU_TV}>
        <div className="hulu_tv_level l_0" id={ElementID.HULU_TV_LEVEL_0}>
          <div className="hulu_tv_background" />
          <div className="hulu_tv_stand" id={ElementID.HULU_TV_STAND}>
            <div className="tv_stand_v1" />
            <div className="tv_stand_v2" />
            <div className="tv_stand_h" />
          </div>
        </div>
        <div className="hulu_tv_level l_1" id={ElementID.HULU_TV_LEVEL_1}>
          <div className="hulu_tv_video_cont" id={ElementID.HULU_TV_VIDEO_CONT}>
            <video className="hulu_tv_video" src={HULU_TV_VIDEO} loop autoPlay muted playsInline>
              <track />
            </video>
          </div>
        </div>
        <div className="hulu_tv_level l_2" id={ElementID.HULU_TV_LEVEL_2}>
          <div className="hulu_tv_gradient" />
        </div>
        <div className="hulu_tv_level l_3" id={ElementID.HULU_TV_LEVEL_3}>
          <div className="hulu_tv_image_cont">
            <img src={HULU_TV} alt="" className="hulu_tv_image" />
          </div>
        </div>
        <div className="hulu_tv_level l_4" id={ElementID.HULU_TV_LEVEL_4} />
      </div>

      {/* laptop_1 */}
      <div className="laptop" id={ElementID.LAPTOP_1}>
        <div className="laptop_level l_0 laptop_top" id={ElementID.LAPTOP_1_LEVEL_0}>
          <div className="laptop_bottom_cont" id={ElementID.LAPTOP_1_BOTTOM_CONT}>
            <div className="laptop_bottom" id={ElementID.LAPTOP_1_BOTTOM}>
              <div className="laptop_keyboard_cont">
                <div className="trackpad" />
                <div className="connector" />
                <div className="keys">
                  {KEYS_CONFIG.map((row, index) => (
                    <div key={`keys_row_${index}`} className={`keys_row_${index}`} id={`keys_row_${index}`}>
                      {row.map((rowKey) => (Array.from(Array(rowKey.number).keys()).map((key) => (
                        <div key={key} className={`key ${rowKey.className}`} />
                      ))
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="laptop_level l_1" id={ElementID.LAPTOP_1_LEVEL_1}>
          <div className="laptop_1_video_cont" id={ElementID.LAPTOP_1_VIDEO_CONT}>
            <video className="laptop_1_video" src={LAPTOP_1_VIDEO} loop autoPlay muted playsInline>
              <track />
            </video>
          </div>
        </div>
        <div className="laptop_level l_2" id={ElementID.LAPTOP_1_LEVEL_2}>
          <div className="laptop_1_gradient" />
        </div>
        <div className="laptop_level l_3" id={ElementID.LAPTOP_1_LEVEL_3}>
          <div className="laptop_1_image_cont">
            <img src={LAPTOP_1} alt="" className="laptop_image" />
          </div>
        </div>
      </div>
    </div>
  );
}
