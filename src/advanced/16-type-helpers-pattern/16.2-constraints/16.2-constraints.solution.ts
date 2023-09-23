import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Fix a problem with declaring a type that receives a path on input
 *  and returns the route.
 *
 * Example: 'products' -> '/products'.
 */

/* ❌ Not working */
type AddRoutePrefix<TRoute as string> = `/${TRoute}`;

/* ❌ Not working */
type AddRoutePrefix<TRoute<string>> = `/${TRoute}`;

/* ✅ Works */
type AddRoutePrefix<TRoute extends string> = `/${TRoute}`;

/*
 * Explanation:
 * We use the `extends string` for marking the type of Generic.
 *
 * It is like we use the parameters' type in function:
 *  function (route: string) {...}
 * Here the `route: string` means that we are setting the strict type of param.
 * The same situation we have with the TRoute.
 * So, we use `extends <type>` for setting strict type of it.
 *
 * If we are not passing the type of Generic, the TRoute will be `unknown` by default.
 * It is like we use the `unknown` type for function parameter:
 *  function (route: unknown) {...}
 * That is why the `type AddRoutePrefix<TRoute> = `/${TRoute}` gives us an error.
 */


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
