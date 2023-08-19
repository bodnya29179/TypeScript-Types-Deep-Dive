// ⬇️ TypeScript
enum Permission {
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
var Permission;

(function (Permission) {
  Permission[Permission['user'] = 0] = 'user';
  Permission[Permission['superuser'] = 1] = 'superuser';
  Permission[Permission['admin'] = 2] = 'admin';
  Permission[Permission['root'] = 3] = 'root';
})(Permission || (Permission = {}));

const user = {
  username: 'john',
  permission: Permission.admin,
};



export {};
