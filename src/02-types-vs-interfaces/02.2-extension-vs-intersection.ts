interface User {
  id: number;
  name: string;
  email: string;
}

interface Admin extends User {
  permission: string;
}

type AdminType = User & { permission: string };

// ✅ works
const admin: Admin = {
  id: 1,
  name: '...',
  email: '...',
  permission: 'admin', // <-- added field
};
