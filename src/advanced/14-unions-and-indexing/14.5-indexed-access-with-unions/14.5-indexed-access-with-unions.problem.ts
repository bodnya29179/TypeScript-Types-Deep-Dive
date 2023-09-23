import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Get all individual programs from object: 1on1, selfDirected, planned1on1, plannedSelfDirected.
 */
const programModeEnumMap = {
  GROUP: 'group',
  ANNOUNCEMENT: 'announcement',
  ONE_ON_ONE: '1on1',
  SELF_DIRECTED: 'selfDirected',
  PLANNED_ONE_ON_ONE: 'planned1on1',
  PLANNED_SELF_DIRECTED: 'plannedSelfDirected',
} as const;

type IndividualProgram = unknown;


/* Test the result */
type tests = [
  Expect<
    Equal<
      IndividualProgram,
      '1on1' | 'selfDirected' | 'planned1on1' | 'plannedSelfDirected'
    >
  >,
];
