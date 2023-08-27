/* enums */
{
  enum UserRole {
    user = 'user',
    superuser = 'super',
    admin = 'admin',
    root = 'root',
    auditor = 'auditor',
  }

  // selecting all roles except 'auditor'
  const userPermissions = Object.values(UserRole).filter((role) => role !== UserRole.auditor);
}

/* const enums */
{
  const enum UserRole {
    user = 'user',
    superuser = 'super',
    admin = 'admin',
    root = 'root',
    auditor = 'auditor',
  }

  const userPermissions = Object.values(UserRole).filter((role) => role !== UserRole.auditor);
}



export {};
