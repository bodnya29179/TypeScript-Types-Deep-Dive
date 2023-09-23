import { Equal, Expect } from '../../../helpers';

/**
 * TODO: Fix the problem of the TError type
 *  by setting the `error` type to `undefined` as the default
 *  if the TError type was not passed.
 */
type CreateDataShape<TData, TError> = {
  data: TData;
  error: TError;
};


/* Test the result */
type tests = [
  Expect<
    Equal<
      CreateDataShape<string>,
      { data: string; error: undefined; }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<boolean, SyntaxError>,
      { data: boolean; error: SyntaxError; }
    >
  >,
];
