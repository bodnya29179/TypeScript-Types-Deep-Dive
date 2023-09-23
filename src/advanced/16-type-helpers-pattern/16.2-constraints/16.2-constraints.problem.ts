import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Fix a problem with declaring a type that receives a path on input
 *  and returns the route.
 *
 * Example: 'products' -> '/products'.
 */
type AddRoutePrefix<TRoute> = `/${TRoute}`;


/* Test the result */
type tests = [
  Expect<Equal<AddRoutePrefix<''>, '/'>>,
  Expect<Equal<AddRoutePrefix<'about'>, '/about'>>,
  Expect<Equal<AddRoutePrefix<'about/team'>, '/about/team'>>,
  Expect<Equal<AddRoutePrefix<'blog'>, '/blog'>>,
  // @ts-expect-error
  AddRoutePrefix<boolean>,
  // @ts-expect-error
  AddRoutePrefix<number>,
];
