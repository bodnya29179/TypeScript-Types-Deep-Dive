import { Equal, Expect } from '../../../helpers';

const parser1 = {
  parse: () => 1,
};

const parser2 = () => '123';

const parser3 = {
  extract: () => true,
};

/*
 * TODO: Extract the returning value types from different parsers.
 */
type GetParserResult<T> = unknown;


/* Test the result */
type tests = [
  Expect<
    Equal<
      GetParserResult<typeof parser1>,
      number
    >
  >,
  Expect<
    Equal<
      GetParserResult<typeof parser2>,
      string
    >
  >,
  Expect<
    Equal<
      GetParserResult<typeof parser3>,
      boolean
    >
  >,
];
