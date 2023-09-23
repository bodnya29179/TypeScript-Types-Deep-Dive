import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Extract the `data` type from the passed object.
 */

/* Solution 1 */
type GetDataValue<T> = T extends { data: any } ? T['data'] : never;

/* Solution 2 */
type GetDataValue<T> = T extends { data: infer TData } ? TData : never;


/* Test the result */
type tests = [
  Expect<
    Equal<
      GetDataValue<{ data: 'hello' }>,
      'hello'
    >
  >,
  Expect<
    Equal<
      GetDataValue<{ data: { name: 'hello' } }>,
      { name: 'hello' }
    >
  >,
  Expect<
    Equal<
      GetDataValue<{ data: { name: 'hello'; age: 20 } }>,
      { name: 'hello'; age: 20 }
    >
  >,
  // Expect that if you pass in string but not an object, it should return never
  Expect<Equal<GetDataValue<string>, never>>,
];
