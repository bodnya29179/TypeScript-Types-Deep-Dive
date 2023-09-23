import { Equal, Expect } from '../../../helpers';

const fakeDataDefaults = {
  String: 'Default string',
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: 'id',
};

/*
 * TODO: Extract types of the fakeDataDefaults object fields.
 */
type StringType = unknown;
type IntType = unknown;
type FloatType = unknown;
type BooleanType = unknown;
type IDType = unknown;


/* Test the result */
type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];
