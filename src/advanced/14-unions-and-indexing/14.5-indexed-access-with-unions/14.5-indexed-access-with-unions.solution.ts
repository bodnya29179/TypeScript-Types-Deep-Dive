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

/* Solution 1 */
export type IndividualProgram = typeof programModeEnumMap[
  | 'ONE_ON_ONE'
  | 'SELF_DIRECTED'
  | 'PLANNED_ONE_ON_ONE'
  | 'PLANNED_SELF_DIRECTED'
];

/* Solution 2 */
export type IndividualProgram = typeof programModeEnumMap[
  Extract<
    keyof typeof programModeEnumMap,
    'GROUP' | 'ANNOUNCEMENT'
  >
];


/* Test the result */
type tests = [
  Expect<
    Equal<
      IndividualProgram,
      '1on1' | 'selfDirected' | 'planned1on1' | 'plannedSelfDirected'
    >
  >,
];
