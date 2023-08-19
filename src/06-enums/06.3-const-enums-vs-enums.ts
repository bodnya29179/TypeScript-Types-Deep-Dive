/* enums */
enum UserRole1 {
  user = 'user',
  superuser = 'super',
  admin = 'admin',
  root = 'root',
  auditor = 'auditor',
}

// selecting all roles except 'auditor'
const userPermissions1 = Object.values(UserRole1).filter((role) => role !== UserRole1.auditor);

/* const enums */
const enum UserRole2 {
  user = 'user',
  superuser = 'super',
  admin = 'admin',
  root = 'root',
  auditor = 'auditor',
}

const userPermissions = Object.values(UserRole2).filter((role) => role !== UserRole2.auditor);
