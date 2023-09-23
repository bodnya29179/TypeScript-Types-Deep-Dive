import { Equal, Expect } from '../../../helpers';

const frontendToBackendEnumMap = {
  singleModule: 'SINGLE_MODULE',
  multiModule: 'MULTI_MODULE',
  sharedModule: 'SHARED_MODULE',
} as const;

/*
 * TODO: Extract values from the frontendToBackendEnumMap object.
 */
type BackendModuleEnum = unknown;


/* Test the result */
type tests = [
  Expect<
    Equal<
      BackendModuleEnum,
      'SINGLE_MODULE' | 'MULTI_MODULE' | 'SHARED_MODULE'
    >
  >,
];
