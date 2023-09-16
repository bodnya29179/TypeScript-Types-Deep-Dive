import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Get dynamic routes from all of routes.
 */
type Routes = '/users' | '/users/:id' | '/posts' | '/posts/:id';

type DynamicRoutes = unknown;


/* Test the result */
type tests = [
  Expect<
    Equal<
      DynamicRoutes,
      '/users/:id' | '/posts/:id'
    >
  >
];
