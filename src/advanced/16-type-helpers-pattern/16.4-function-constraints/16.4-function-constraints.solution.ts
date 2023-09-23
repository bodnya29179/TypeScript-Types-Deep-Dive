import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Fix a problem with extracting function parameter and return types
 *  with the next grouping them into a new model.
 */

/*
 * ❌ Not working
 *
 * We cannot use the `function` keyword by using the type.
 * In TypeScript, `function` is not a type that can be used for type constraints via `extends`
 */
type GetParametersAndReturnType<T extends function> = {
  params: Parameters<T>;
  returnValue: ReturnType<T>;
};

/*
 * ❌ Not working
 *
 * We will get the error:
 *  `Type 'Function' is not assignable to type '(...args: any) => any'`
 *
 * In TypeScript, 'Function' is not an interface or type
 * that can be referenced using 'extends'.
 *
 * Instead, you can use a function signature to represent functions:
 *  (...args: any) => any
 */
type GetParametersAndReturnType<T extends Function> = {
  params: Parameters<T>;
  returnValue: ReturnType<T>;
};

/* ✅ Works */
type GetParametersAndReturnType<T extends (...args: any) => any> = {
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
