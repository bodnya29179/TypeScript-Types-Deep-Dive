import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Fix a problem with extracting function parameter and return types
 *  with the next grouping them into a new model.
 */
type GetParametersAndReturnType<T> = {
  params: Parameters<T>;
  returnValue: ReturnType<T>;
};


/* Test the result */
type tests = [
  Expect<
    Equal<
      GetParametersAndReturnType<() => string>,
      { params: []; returnValue: string }
    >
  >,
  Expect<
    Equal<
      GetParametersAndReturnType<(s: string) => void>,
      { params: [string]; returnValue: void }
    >
  >,
  Expect<
    Equal<
      GetParametersAndReturnType<(n: number, b: boolean) => number>,
      { params: [number, boolean]; returnValue: number }
    >
  >,
];
