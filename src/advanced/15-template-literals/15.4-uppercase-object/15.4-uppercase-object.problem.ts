import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Declare an object type
 *  that will include all Event keys in upper case
 *  and will have string types.
 */
type Event = `log_in` | 'log_out' | 'sign_up';

type ObjectOfKeys = unknown;

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        LOG_IN: string;
        LOG_OUT: string;
        SIGN_UP: string;
      }
    >
  >,
];
