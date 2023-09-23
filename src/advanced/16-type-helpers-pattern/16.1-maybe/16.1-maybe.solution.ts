import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Declare a type that will extend the input type
 *  by having also null or undefined.
 */
type Maybe<T> = T | null | undefined;


/* Test the result */
type tests = [
  Expect<Equal<Maybe<string>, string | null | undefined>>,
  Expect<Equal<Maybe<number>, number | null | undefined>>,
  Expect<Equal<Maybe<boolean>, boolean | null | undefined>>,
  Expect<Equal<Maybe<null>, null | undefined>>,
];
