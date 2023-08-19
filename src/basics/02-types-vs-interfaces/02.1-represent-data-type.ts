/* at first glance, they are the same */
interface User {
  id: number;
  name: string;
  email: string;
}

type UserType = {
  id: number;
  name: string;
  email: string;
};

// ✅ works
const user: User = {
  id: 1,
  name: 'fake-user',
  email: 'example@mail.com',
};



export {};
