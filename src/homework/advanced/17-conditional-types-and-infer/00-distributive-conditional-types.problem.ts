import { Equal, Expect } from '../../../helpers';

type Fruit = 'apple' | 'banana' | 'orange';

type AppleOrBanana = Fruit extends 'apple' | 'banana' ? Fruit : never;

/* Test the result */
type tests = [
  Expect<
    Equal<
      AppleOrBanana,
      'apple' | 'banana'
    >
  >
];
