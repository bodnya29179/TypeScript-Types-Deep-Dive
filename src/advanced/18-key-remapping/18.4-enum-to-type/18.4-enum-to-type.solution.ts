import { Equal, Expect } from '../../../helpers';

/*
 * TODO: Convert enum to type.
 */

/* ❌ Solution 1 */
{
  enum UserRole {
    user = 'USER',
    superuser = 'SUPERUSER',
    admin = 'ADMIN',
  }

  /* ❌ Code duplication */
  type UserRoleType = 'USER' | 'SUPERUSER' | 'ADMIN';


  /* Test the result */
  type tests = [
    Expect<
      Equal<
        UserRoleType,
        'USER' | 'SUPERUSER' | 'ADMIN'
      >
    >,
  ];
}

/* ❌ Solution 2 */
{
  /* ❌ It's not enum now */
  const UserRole = {
    user: 'USER' as UserRoleType,
    superuser: 'SUPERUSER' as UserRoleType,
    admin: 'ADMIN' as UserRoleType,
  }

  /* ❌ Code duplication + Values checking doesn't work */
  type UserRoleType = 'USER' | 'SUPERUSER' | 'ADMIN';


  /* Test the result */
  type tests = [
    Expect<
      Equal<
        UserRoleType,
        'USER' | 'SUPERUSER' | 'ADMIN'
      >
    >,
  ];
}

/* ✅ Solution 3 */
{
  enum UserRole {
    user = 'USER',
    superuser = 'SUPERUSER',
    admin = 'ADMIN',
  }

  type UserRoleType = `${ UserRole }`;


  /* Test the result */
  type tests = [
    Expect<
      Equal<
        UserRoleType,
        'USER' | 'SUPERUSER' | 'ADMIN'
      >
    >,
  ];
}
