import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Extract the click event from type union.
 */
export type Event =
  | { type: 'click'; event: MouseEvent; }
  | { type: 'focus'; event: FocusEvent; }
  | { type: 'keydown'; event: KeyboardEvent; };

type ClickEvent = unknown;


/* Test the result */
type tests = [
  Expect<
    Equal<
      ClickEvent,
      { type: 'click'; event: MouseEvent }
    >
  >
];
