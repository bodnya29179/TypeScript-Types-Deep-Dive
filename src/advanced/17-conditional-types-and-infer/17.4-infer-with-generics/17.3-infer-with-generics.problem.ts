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
type GetPoint<T> = unknown;


/* Test the result */
type tests = [
  Expect<
    Equal<
      GetPoint<Example>,
      { x: 12; y: 14 }
    >
  >
];
