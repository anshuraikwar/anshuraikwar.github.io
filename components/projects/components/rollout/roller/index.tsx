import React, { useEffect } from 'react';
import Image from 'next/image';

// import: styles
import './index.css';

// import: assets
// import RollerEdgeWhite from '@/public/assets/rollout/svg/roller-edges-white.svg';
// import RollerEdgeBlack from '@/public/assets/rollout/svg/roller-edges-black.svg';

const ROLLER_EDGE_WHITE = '/assets/rollout/svg/roller-edges-white.svg';
const ROLLER_EDGE_BLACK = '/assets/rollout/svg/roller-edges-black.svg';

type RollerProps = {
  tape: {
    id: string;
    top: string;
    left: string;
    delay: number;
    theme: string;
    rotate: number;
  };
  isVisible: boolean;
};

export default function Roller({
  tape,
  isVisible,
}: RollerProps) {
  const texts = [
    '____________________________________',
    'TYPOGRAPHY',
  ];

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const tapeContents = document.getElementById(`${tape.id}-rolled-out-content-with-bg`);
      if (tapeContents) {
        tapeContents.style.width = 'calc(min(100vw, 1512px) + (4 * var(--roll-width)))';
      }
    }, tape.delay);

    return () => clearTimeout(timeout);
  }, [isVisible, tape.id, tape.delay]);

  return (
    <div
      key={tape.id}
      id={tape.id}
      className="roller-positioning-container"
      style={{
        top: tape.top,
        left: tape.left,

        transform: `rotateZ(${tape.rotate}deg)`,
      }}
    >
      <div
        id={`${tape.id}-rolled-out-tape`}
        className={`rolled-out-tape ${tape.theme}`}
      >
        <div
          id={`${tape.id}-rolled-out-content-with-bg`}
          className="rolled-out-content-with-bg"
        // style={{ width: '135vw' }}
        />

        <div id="roll-poisitoned-container" className="roll-poisitoned-container">
          <div id="roll" className="roll">
            <div id="roll-edge-top" className="roll-edges top-edge">
              <img
                alt={`${tape.id}-top-edge`}
                src={tape.theme === 'black' ? ROLLER_EDGE_WHITE : ROLLER_EDGE_BLACK}
              />
            </div>
            <div id="roll-edge-bottom" className="roll-edges bottom-edge">
              <img
                alt={`${tape.id}-bottom-edge`}
                src={tape.theme === 'black' ? ROLLER_EDGE_WHITE : ROLLER_EDGE_BLACK}
              />
            </div>
            <div id="roll-content" className="roll-content">
              {texts.map((string, stringIndex) => {
                const delay = `calc(${stringIndex - 1.33} * var(--rolling-animation-duration) * 0.67)`;

                return (
                  <div
                    key={`${tape.id}_${string}`}
                    id={`${string}_${stringIndex}`}
                    className="roll-text-position-cont"
                    style={{
                      animationDelay: `${delay}`,
                    }}
                  >
                    <div
                      className="roll-text-char-cont"
                    >
                      <div
                        className="roll-text-char"
                        style={{
                          animationDelay: `${delay}`,
                        }}
                      >
                        <div>
                          {string}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
