import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Create a type that gets 2 types
 *  and returns an object with `data` and `error` fields
 *  that have these passed types.
 *
 * Example: string, TypeError -> { data: string; error: TypeError }.
 */
type CreateDataShape<TData, TError> = {
  data: TData;
  error: TError;
};


/* Test the result */
type tests = [
  Expect<
    Equal<
      CreateDataShape<string, TypeError>,
      {
        data: string;
        error: TypeError;
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<number, Error>,
      {
        data: number;
        error: Error;
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<boolean, SyntaxError>,
      {
        data: boolean;
        error: SyntaxError;
      }
    >
  >,
];
