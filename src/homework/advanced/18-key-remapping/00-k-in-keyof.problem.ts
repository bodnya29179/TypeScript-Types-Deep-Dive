import { Equal, Expect } from '../../../helpers';

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

/*
 * TODO: Convert the input interface by changing field types to function types that return the previous existing type.
 *
 * Example: { field: someType } -> { field: () => someType }
 */
type AttributeGetters = unknown;


/* Test the result */
type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        firstName: () => string;
        lastName: () => string;
        age: () => number;
      }
    >
  >,
];
