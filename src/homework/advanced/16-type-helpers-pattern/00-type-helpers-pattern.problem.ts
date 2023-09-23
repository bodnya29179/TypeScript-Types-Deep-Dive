import { Equal, Expect } from '../../../helpers';

/**
 * TODO: Fix the problem of passing types.
 *  We should return the same type as we passed to the input.
 */
type ReturnWhatIPassIn = unknown;


/* Test the result */
type tests = [
  Expect<Equal<ReturnWhatIPassIn<1>, 1>>,
  Expect<Equal<ReturnWhatIPassIn<'1'>, '1'>>,
  Expect<Equal<ReturnWhatIPassIn<true>, true>>,
  Expect<Equal<ReturnWhatIPassIn<false>, false>>,
  Expect<Equal<ReturnWhatIPassIn<null>, null>>,
];
