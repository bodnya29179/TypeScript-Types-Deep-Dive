import { Equal, Expect } from '../../../helpers';

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

/*
 * TODO: Extract all interface fields that have id substring to a new one.
 */
type OnlyIdKeys<T> = unknown;


/* Test the result */
type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
