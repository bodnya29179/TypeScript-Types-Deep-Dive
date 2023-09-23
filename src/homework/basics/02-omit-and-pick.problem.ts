import { Equal, Expect } from '../../helpers';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/*
 * TODO: create a new object type with only the firstName and lastName properties of User.
 */
type MyType = unknown;


/* Test the result */
type tests = [
  Expect<
    Equal<
      MyType,
      { firstName: string; lastName: string }
    >
  >
];
