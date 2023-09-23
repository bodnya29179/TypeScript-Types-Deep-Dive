import { Equal, Expect } from '../../../helpers';

enum UserRole {
  user = 'USER',
  superuser = 'SUPERUSER',
  admin = 'ADMIN',
}

/*
 * TODO: Convert enum to type.
 */
type UserRoleType = unknown;


/* Test the result */
type tests = [
  Expect<
    Equal<
      UserRoleType,
      'USER' | 'SUPERUSER' | 'ADMIN'
    >
  >,
];
