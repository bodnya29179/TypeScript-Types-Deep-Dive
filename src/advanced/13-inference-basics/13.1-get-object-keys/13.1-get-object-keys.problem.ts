import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Declare a type that will extract keys from the object.
 */
const testingFrameworks = {
  vitest: {
    label: 'Vitest',
  },
  jest: {
    label: 'Jest',
  },
  mocha: {
    label: 'Mocha',
  },
};

type TestingFramework = unknown;


/* Test the result */
type tests = [
  Expect<
    Equal<
      TestingFramework,
      'vitest' | 'jest' | 'mocha'
    >
  >
];
