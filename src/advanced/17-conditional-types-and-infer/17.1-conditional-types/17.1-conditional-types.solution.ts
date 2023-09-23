import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Reverse the input types:
 *  'hello' -> 'goodbye'
 *  'goodbye' -> 'hello'
 */
type YouSayGoodbyeAndISayHello<T> = T extends 'hello' ? 'goodbye' : 'hello';


/* Test the result */
type tests = [
  Expect<
    Equal<
      YouSayGoodbyeAndISayHello<'hello'>,
      'goodbye'
    >
  >,
  Expect<
    Equal<
      YouSayGoodbyeAndISayHello<'goodbye'>,
      'hello'
    >
  >,
];
