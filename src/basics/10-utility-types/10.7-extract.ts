/* Syntax: Extract<Type, UnionType> */


// example 1
type PermissionType = 'admin' | 'user' | 'superuser' | 'auditor';

const permission: Extract<PermissionType, 'admin' | 'reviewer'> = 'admin';

// example 2
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; x: number }
  | { kind: 'rectangle'; x: number; y: number };

const shape: Extract<Shape, { kind: 'circle' }> = {
  kind: 'circle',
  radius: 10,
};



export {};
