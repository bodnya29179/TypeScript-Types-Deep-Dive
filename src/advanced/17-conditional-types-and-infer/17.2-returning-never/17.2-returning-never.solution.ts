import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Return never if passed type is not 'hello' or 'goodbye'.
 */
type YouSayGoodbyeAndISayHello<T> = T extends ('hello' | 'goodbye')
  ? (T extends 'hello' ? 'goodbye' : 'hello')
  : never;


/* Test the result */
type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<'hello'>, 'goodbye'>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'goodbye'>, 'hello'>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'alright pal'>, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>,
];
