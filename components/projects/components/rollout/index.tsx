"use client";

import { useRef, useState, useEffect } from 'react';

import tapes from '../../../../config/rollout/tapes-config';
import Roller from "./roller";

export default function Rollout() {
  const rolloutRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = rolloutRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
            // observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={rolloutRef} className='h-full w-full relative'>
      {tapes.map((tape) => (
        <Roller
          key={tape.id}
          tape={tape}
          isVisible={isVisible}
        />
      ))}
    </div >
  )
}