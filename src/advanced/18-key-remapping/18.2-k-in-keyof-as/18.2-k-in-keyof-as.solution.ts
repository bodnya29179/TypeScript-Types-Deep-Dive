import { Equal, Expect } from '../../../helpers';

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

/*
 * TODO: Convert the input interface by changing field names and types to function types
 *  that return the previous existing type.
 *
 * Example: { field: someType } -> { getField: () => someType }
 */
type AttributeGetters = {
  [Key in keyof Attributes as `get${ Capitalize<Key> }`]: () => Attributes[Key];
};


/* Test the result */
type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        getFirstName: () => string;
        getLastName: () => string;
        getAge: () => number;
      }
    >
  >
];
