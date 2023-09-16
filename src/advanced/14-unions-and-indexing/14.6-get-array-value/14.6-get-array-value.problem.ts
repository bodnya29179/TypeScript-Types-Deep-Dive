import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Get fruits from array.
 */
const fruits = ['apple', 'banana', 'orange'];

type AppleOrBanana = unknown;
type Fruit = unknown;


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
