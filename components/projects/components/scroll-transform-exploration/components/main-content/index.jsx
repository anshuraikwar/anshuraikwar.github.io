import React from 'react';

// import: styles
import './index.css';

// import: assets
// import: constants
import { ScrollElementIDEnum } from '@/constants/scroll-transform-exploration/element-id.enum.ts';

// import: utils
// import: redux
// import: components
// import: lazy load components

export default function MainContent() {
  return (
    <div className="main_content absolute bottom-[85%]" id="main-content">
      <div className="page_content" id="page-content">
        <div className="phone_out" id={ScrollElementIDEnum.PHONE_OUT}>
          <div className="phone_rotate_x" id={ScrollElementIDEnum.PHONE_ROTATE_X} />
          <div className="phone_rotate_z" id={ScrollElementIDEnum.PHONE_ROTATE_Z} />
          <div className="phone_fade_out" id={ScrollElementIDEnum.PHONE_FADE_OUT} />
        </div>
        <div className="tv_in" id={ScrollElementIDEnum.TV_IN}>
          <div className="tv_fade_in" id={ScrollElementIDEnum.TV_FADE_IN} />
          <div className="tv_rotate_z" id={ScrollElementIDEnum.TV_ROTATE_Z} />
          <div className="tv_rotate_x" id={ScrollElementIDEnum.TV_ROTATE_X} />
          <div className="tv_legs_out" id={ScrollElementIDEnum.TV_LEGS_OUT} />
        </div>
        <div className="section_gap" id="section-gap-4" />
        <div className="tv_out" id={ScrollElementIDEnum.TV_OUT}>
          <div className="tv_fade_out" id={ScrollElementIDEnum.TV_FADE_OUT} />
        </div>
        <div className="laptop_1_in" id={ScrollElementIDEnum.LAPTOP_1_IN}>
          <div className="laptop_1_fade_in" id={ScrollElementIDEnum.LAPTOP_1_FADE_IN} />
          <div className="bottom_pos" id={ScrollElementIDEnum.BOTTOM_POS}>
            <div className="bottom_pos_0" id={ScrollElementIDEnum.BOTTOM_POS_0} />
            <div className="bottom_pos_1" id={ScrollElementIDEnum.BOTTOM_POS_1} />
            <div className="bottom_pos_2" id={ScrollElementIDEnum.BOTTOM_POS_2} />
          </div>
          <div className="laptop_bottom_fade_in" id={ScrollElementIDEnum.LAPTOP_1_BOTTOM_FADE_IN} />
        </div>
      </div>
    </div>
  );
}
