import { Equal, Expect } from '../../../helpers';

const myFunc = () => {
  return 'hello';
};

/*
 * TODO: Extract the myFunc() function return type.
 */
type MyFuncReturn = unknown;


/* Test the result */
type tests = [
  Expect<Equal<MyFuncReturn, string>>
];
