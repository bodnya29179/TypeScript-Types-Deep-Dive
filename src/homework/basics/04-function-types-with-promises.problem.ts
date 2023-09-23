interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/*
 * TODO: Fix the type errors inside the createThenGetUser() function.
 */
const createThenGetUser = async (
  createUser: unknown,
  getUser: unknown,
): Promise<User> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};


/* Test the result */
const createUser = (): Promise<string> => Promise.resolve('1');

const getUser = (): Promise<User> => Promise.resolve({
  id: '1',
  firstName: 'Oliver',
  lastName: 'Smith',
});

createThenGetUser(createUser, getUser)
  .then(console.log);
