/*
 * TODO: Constraint the Maybe type by excluding passing
 *  `null` and `undefined` types.
 */

/*
 * Solution 1
 *
 * 🤨 Of course, we can set these types directly.
 */
type Maybe<T extends number | string | boolean> = T | null | undefined;


/* Solution 2 */
export type Maybe<T extends {}> = T | null | undefined;

/*
 * Explanation:
 * 1. {} represents anything that is not `null` or `undefined`.
 * It works because it also works with the simple variables too:
 *
 * ✅ const test1: {} = 1;
 * ✅ const test2: {} = '12313';
 * ✅ const test3: {} = false;
 * ✅ const test4: {} = {};
 * ❌ const test5: {} = null;
 * ❌ const test6: {} = undefined;
 *
 * 2. {} allows us to use different types like `number`, `boolean`, `string`, etc,
 * because they are present as objects in TypeScript, and you know what objects have methods.
 * At the same time, `null` or `undefined` don't have any methods inside, and they will not be allowed.
 */


/* Test the result */
type tests = [
  // @ts-expect-error
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<''>,
];
