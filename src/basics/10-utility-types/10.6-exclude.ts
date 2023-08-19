/* Syntax: Exclude<UnionType, ExcludedMembers> */

type PermissionType = 'admin' | 'user' | 'superuser' | 'auditor';

const permission: Exclude<PermissionType, 'admin' | 'superuser'> = 'auditor';



export {};
