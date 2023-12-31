/* Syntax: Exclude<UnionType, ExcludedMembers> */

// example 1
type PermissionType = 'admin' | 'user' | 'superuser' | 'auditor';

const permission: Exclude<PermissionType, 'admin' | 'superuser'> = 'auditor';

// example 2
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; x: number }
  | { kind: 'rectangle'; x: number; y: number };

const shape: Exclude<Shape, { kind: 'circle' }> = {
  kind: 'square',
  x: 5,
};



export {};
