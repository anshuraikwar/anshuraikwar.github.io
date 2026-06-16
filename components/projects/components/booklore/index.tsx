"use client";

import React, { useEffect } from 'react';

import './index.css';

import Book from './components/book/Book';
import { books } from '@/config/booklore/bookList';

const book = books[0];
const { id: bookId } = book;

export default function BookLore() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const container = document.getElementById(`${bookId}-book-container`);
      const card = document.getElementById(`${bookId}-card`);
      const animateScrollContent = document.getElementById(`animate-scroll-content`);
      const bookFrontCover = document.getElementById(`${bookId}-cover-front`);

      if (animateScrollContent) {
        const bookDetailsBounding = animateScrollContent.getBoundingClientRect();
        const { top } = bookDetailsBounding;

        let OldValue = 0 - top;

        if (OldValue) {
          let OldMax = animateScrollContent.clientHeight;
          console.log(
            '\n top: ', top,
            '\n OldValue: ', OldValue,
            '\n OldMax: ', OldMax,
          )
          OldMax = 3 * OldMax / 4;
          var OldMin = 0;
          var OldRange = (OldMax - OldMin);

          if (OldValue < OldMin) OldValue = OldMin;
          if (OldValue > OldMax) OldValue = OldMax;

          var NewMin = 30; // 0;
          var NewMax = 45; // 15;
          var NewRange = (NewMax - NewMin);

          var NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;

          if (container) {
            // container.style.paddingLeft = `${NewValue}%`;
            container.style.paddingLeft = `10%`;
          }

          OldMin = 0;
          OldRange = (OldMax - OldMin);

          const NewRotateZ = -35

          NewMin = 0;
          NewMax = 100;
          NewRange = (NewMax - NewMin);

          NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;
          const NewRotateX = Math.abs(NewValue - (NewMax / 2));

          NewMin = 0;
          NewMax = 360;
          NewRange = (NewMax - NewMin);

          var NewRotateY = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;
          NewRotateY = 0 - NewRotateY;

          if (card) {
            card.style.transform = `rotateY(${NewRotateY}deg) rotateX(${NewRotateX}deg) rotateZ(${NewRotateZ}deg) translateZ(-75px)`;
            card.style.transition = `none`;
          }

          NewMin = 0;
          NewMax = 170;
          NewRange = (NewMax - NewMin);

          NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;

          if (bookFrontCover) {
            bookFrontCover.style.transform = `rotateY(-${NewValue}deg)`;
          }
        }
      }
    });
  }, []);

  return (
    <div className="booklore w-full h-[50%] sm:h-[75%] lg:h-full flex items-center justify-center lg:justify-end relative z-10" id="booklore">
      <Book book={book} />
      <div className="animate-scroll-content absolute bottom-[85%]" id="animate-scroll-content" />
    </div>
  );
}