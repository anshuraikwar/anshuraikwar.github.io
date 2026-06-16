
import BookPages4 from '../../public/assets/booklore/pages/pages_4.webp';
import BookPages4Vertical from '../../public/assets/booklore/pages/pages_v_4.webp';

import Book1CoverFront from '../../public/assets/booklore/book_1/cover_front.webp';
import Book1CoverSpine from '../../public/assets/booklore/book_1/cover_spine.webp';
import Book1CoverBack from '../../public/assets/booklore/book_1/cover_back.webp';
import Book1Page1 from '../../public/assets/booklore/book_1/page_1.webp';
import Book1Page2 from '../../public/assets/booklore/book_1/page_2.webp';
import { BookType } from '@/types/bookType';

const bookHeight = 'min(500px, max(150px, min(35vw, 35vh)))';
export const books: BookType[] = [
  // book_1
  {
    id: 'book_1',

    height: bookHeight,
    widthRatio: 0.644,
    coverThickness: '3px',
    thicknessRatio: 0.093,
    pagesOffset: '3px',
    insideCoverColor: '#2F3547',

    coverFront: Book1CoverFront.src,
    coverSpine: Book1CoverSpine.src,
    coverBack: Book1CoverBack.src,
    page1: Book1Page1.src,
    page2: Book1Page2.src,
    pages: BookPages4.src,
    pagesVertical: BookPages4Vertical.src,

    title: '匠末藝代',
    // author: 'Yana Barbelo',
  },
]