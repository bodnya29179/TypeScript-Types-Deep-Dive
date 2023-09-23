import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Fix the issue of extracting the type by using indexed access.
 */
const programModeEnumMap = {
  GROUP: 'group',
  ANNOUNCEMENT: 'announcement',
  ONE_ON_ONE: '1on1',
  SELF_DIRECTED: 'selfDirected',
  PLANNED_ONE_ON_ONE: 'planned1on1',
  PLANNED_SELF_DIRECTED: 'plannedSelfDirected',
};

type GroupProgram = typeof programModeEnumMap['GROUP'];
type AnnouncementProgram = typeof programModeEnumMap['ANNOUNCEMENT'];
type OneOnOneProgram = typeof programModeEnumMap['ONE_ON_ONE'];
type SelfDirectedProgram = typeof programModeEnumMap['SELF_DIRECTED'];
type PlannedOneOnOneProgram = typeof programModeEnumMap['PLANNED_ONE_ON_ONE'];
type PlannedSelfDirectedProgram = typeof programModeEnumMap['PLANNED_SELF_DIRECTED'];


/* Test the result */
type tests = [
  Expect<Equal<GroupProgram, 'group'>>,
  Expect<Equal<AnnouncementProgram, 'announcement'>>,
  Expect<Equal<OneOnOneProgram, '1on1'>>,
  Expect<Equal<SelfDirectedProgram, 'selfDirected'>>,
  Expect<Equal<PlannedOneOnOneProgram, 'planned1on1'>>,
  Expect<Equal<PlannedSelfDirectedProgram, 'plannedSelfDirected'>>,
];
