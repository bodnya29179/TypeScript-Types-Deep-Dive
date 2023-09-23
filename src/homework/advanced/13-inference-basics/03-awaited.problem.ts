import { Equal, Expect } from '../../../helpers';

const getUser = () => {
  return Promise.resolve({
    id: '123',
    name: 'John',
    email: 'john@example.com',
  });
};

/*
 * TODO: Fix the extracting the user interface from the getUser() function return type.
 */
type ReturnValue = ReturnType<typeof getUser>;


/* Test the result */
type tests = [
  Expect<
    Equal<
      ReturnValue,
      { id: string; name: string; email: string }
    >
  >,
];
