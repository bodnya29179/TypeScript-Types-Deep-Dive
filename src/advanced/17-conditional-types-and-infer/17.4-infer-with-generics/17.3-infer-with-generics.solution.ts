import { Equal, Expect } from '../../../helpers';

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  'click',
  'window',
  'my-event',
  { x: 12; y: 14 }
>;

/*
 * TODO: Extract the passed Point type from the getPoint() method.
 */

/* Solution 1 */
type GetPoint<T> = T extends { getPoint: any }
  ? ReturnType<T['getPoint']>
  : never;

/* Solution 2 */
type GetPoint<T> = T extends MyComplexInterface<any, any, any, any>
  ? ReturnType<T['getPoint']>
  : never;

/* Solution 3 */
type GetPoint<T> = T extends { getPoint: infer TReturn }
  ? TReturn extends (...args: any) => any ? ReturnType<TReturn> : never
  : never;

// Solution 4
type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer TLast>
  ? TLast
  : never;

type ttt = GetPoint<Example>;

/* Test the result */
type tests = [
  Expect<
    Equal<
      GetPoint<Example>,
      { x: 12; y: 14 }
    >
  >
];
