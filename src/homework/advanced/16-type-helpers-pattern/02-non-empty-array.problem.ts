/*
 * TODO: Declare a type that will check that arrays are not empty.
 */
type NonEmptyArray = unknown;

/*
 * Some article that might help you!
 * https://matiashernandez.dev/blog/post/typescript-how-to-create-a-non-empty-array-type
 */
const makeEnum = (values: NonEmptyArray<string>) => {};


/* Test the result */
makeEnum(['a']);
makeEnum(['a', 'b', 'c']);

// @ts-expect-error
makeEnum([]);
