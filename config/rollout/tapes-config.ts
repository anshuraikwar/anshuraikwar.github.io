const rollerOffset = 500;
type Tape = {
  id: string;
  top: string;
  left: string;
  delay: number;
  theme: string;
  rotate: number;
};

const tapes: Tape[] = [
  {
    id: 'roller-1',
    top: '65%',
    left: 'calc(-2 * var(--roll-width))',
    rotate: -13,
    theme: 'white',
    delay: 100,
  },
  {
    id: 'roller-2',
    top: '85%',
    left: 'calc(-2 * var(--roll-width))',
    rotate: -5,
    theme: 'white',
    delay: 1 * rollerOffset,
  },
  {
    id: 'roller-3',
    top: '-95%',
    left: 'calc(-2 * var(--roll-width))',
    rotate: 20,
    theme: 'white',
    delay: 2 * rollerOffset,
  },
  {
    id: 'roller-4',
    top: '-12%',
    left: 'calc(-2 * var(--roll-width))',
    rotate: 30,
    theme: 'black',
    delay: 3 * rollerOffset,
  },
  {
    id: 'roller-5',
    top: '84%',
    left: 'calc(-2 * var(--roll-width))',
    rotate: -30,
    theme: 'white',
    delay: 4 * rollerOffset,
  },
  {
    id: 'roller-6',
    top: '40%',
    left: 'calc(-2 * var(--roll-width))',
    rotate: -20,
    theme: 'black',
    delay: 5 * rollerOffset,
  },
  {
    id: 'roller-7',
    top: '-17%',
    left: 'calc(-2 * var(--roll-width))',
    rotate: 7,
    theme: 'white',
    delay: 6 * rollerOffset,
  },
  {
    id: 'roller-8',
    top: '58%',
    left: 'calc(-2* var(--roll-width))',
    rotate: -5,
    theme: 'black',
    delay: 7 * rollerOffset,
  },
];
export default tapes;
