// ⬇️ TypeScript
const enum Permission {
  user,
  superuser,
  admin,
  root,
}

const user = {
  username: 'john',
  permission: Permission.admin,
};

// ⬇️ Compilation into JavaScript
const user = {
  username: 'john',
  permission: 2, /* admin */
};
