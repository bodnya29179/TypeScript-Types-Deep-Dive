import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Exclude the keydown event from type union.
 */
export type Event =
  | { type: 'click'; event: MouseEvent; }
  | { type: 'focus'; event: FocusEvent; }
  | { type: 'keydown'; event: KeyboardEvent; };

type NonKeyDownEvents = Exclude<Event, { type: 'keydown' }>;


/* Test the result */
type tests = [
  Expect<
    Equal<
      NonKeyDownEvents,
      | { type: 'click'; event: MouseEvent }
      | { type: 'focus'; event: FocusEvent }
    >
  >,
];
