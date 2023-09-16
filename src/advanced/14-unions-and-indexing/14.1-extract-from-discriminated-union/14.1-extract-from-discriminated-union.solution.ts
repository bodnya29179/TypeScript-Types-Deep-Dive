import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Extract the click event from type union.
 */
export type Event =
  | { type: 'click'; event: MouseEvent; }
  | { type: 'focus'; event: FocusEvent; }
  | { type: 'keydown'; event: KeyboardEvent; };

/* Solution 1 */
type ClickEvent = Extract<Event, { type: 'click' }>;

/* Solution 2 */
type ClickEvent = Extract<Event, { event: MouseEvent }>;


/* Test the result */
type tests = [
  Expect<
    Equal<
      ClickEvent,
      { type: 'click'; event: MouseEvent }
    >
  >
];
