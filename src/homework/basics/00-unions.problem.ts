interface User {
  id: number;
  firstName: string;
  lastName: string;
  /*
   * TODO: Ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: string;
}


/* Test the result */
const defaultUser: User = {
  id: 1,
  firstName: 'Oliver',
  lastName: 'Smith',
  // @ts-expect-error
  role: 'I_SHOULD_NOT_BE_ALLOWED',
};
