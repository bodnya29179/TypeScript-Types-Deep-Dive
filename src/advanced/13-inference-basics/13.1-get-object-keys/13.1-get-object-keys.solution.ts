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

/*
 * Explanation:
 * 1. typeof - converts the object to interface
 * 2. keyof - gets all properties from interface
 */
type TestingFramework = keyof typeof testingFrameworks;


/* Test the result */
type tests = [
  Expect<
    Equal<
      TestingFramework,
      'vitest' | 'jest' | 'mocha'
    >
  >
];
