/*
 * TODO: Constraint the Maybe type by excluding passing
 *  `null` and `undefined` types.
 */
export type Maybe<T> = T | null | undefined;


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
