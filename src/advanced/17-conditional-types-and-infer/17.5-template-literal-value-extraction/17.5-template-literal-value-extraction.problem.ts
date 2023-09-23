import { Equal, Expect } from '../../../helpers';

type Names = [
  'Oliver Smith',
  'Emma Johnson',
  'Liam Davis',
  'Sophia Brown',
  'Noah Taylor',
];

/*
 * TODO: Extract a surname of passed name.
 */
type GetSurname = unknown;


/* Test the result */
type tests = [
  Expect<Equal<GetSurname<Names[0]>, 'Smith'>>,
  Expect<Equal<GetSurname<Names[1]>, 'Johnson'>>,
  Expect<Equal<GetSurname<Names[2]>, 'Davis'>>,
  Expect<Equal<GetSurname<Names[3]>, 'Brown'>>,
  Expect<Equal<GetSurname<Names[4]>, 'Taylor'>>,
];
