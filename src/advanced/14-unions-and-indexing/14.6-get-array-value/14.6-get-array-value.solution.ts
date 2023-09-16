import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Get fruits from array.
 */
const fruits = ['apple', 'banana', 'orange'] as const;

/* Solution 1 */
type AppleOrBanana = typeof fruits[0 | 1];
/* Solution 2 */
type AppleOrBanana = typeof fruits[0] | typeof fruits[1];

type Fruit = typeof fruits[number];


/* Test the result */
type tests = [
  Expect<
    Equal<
      AppleOrBanana,
      'apple' | 'banana'
    >
  >,
  Expect<
    Equal<
      Fruit,
      'apple' | 'banana' | 'orange'
    >
  >,
];
