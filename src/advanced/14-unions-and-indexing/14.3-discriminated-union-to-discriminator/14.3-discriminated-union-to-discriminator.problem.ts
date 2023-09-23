import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Get event types from type union.
 */
export type Event =
  | { type: 'click'; event: MouseEvent; }
  | { type: 'focus'; event: FocusEvent; }
  | { type: 'keydown'; event: KeyboardEvent; };

type EventType = unknown;


/* Test the result */
type tests = [
  Expect<
    Equal<
      EventType,
      'click' | 'focus' | 'keydown'
    >
  >
];
