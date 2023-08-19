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
class StudentWithInterface implements User {
  id = 1;
  name = 'fake-user';
  email = 'example@mail.com';
}

// ✅ works too
class StudentWithType implements UserType {
  id = 1;
  name = 'fake-user';
  email = 'example@mail.com';
}
