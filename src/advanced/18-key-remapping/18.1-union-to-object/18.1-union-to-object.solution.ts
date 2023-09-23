import { Equal, Expect } from '../../../helpers';

type Route = '/' | '/about' | '/admin' | '/admin/users';

/*
 * TODO: Convert the Route union type to the object type.
 */
type RoutesObject = {
  [Key in Route]: Key;
};


/* Test the result */
type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        '/': '/';
        '/about': '/about';
        '/admin': '/admin';
        '/admin/users': '/admin/users';
      }
    >
  >,
];
