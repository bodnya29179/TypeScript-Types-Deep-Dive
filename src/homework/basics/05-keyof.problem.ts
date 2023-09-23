import { Equal, Expect } from '../../helpers';

interface User {
  id: number;
  name: string;
  email: string;
}

/*
 * TODO: Extract all keys of the User interface.
 */
type UserFieldType = unknown;


/* Test the result */
type tests = [
  Expect<
    Equal<
      UserFieldType,
      'id' | 'name' | 'email'
    >
  >
];
