# TypeScript: Types Deep Dive

## Structure of files

- **Basics**: `01-*.ts` - `07-*.ts`.

## Definitions

### \> Types union

`Types union` is a way to declare a type that can hold **values of multiple specified types**, allowing for greater
flexibility in variable and parameter declarations.

```typescript
interface Car {
  type: 'car';
  brand: 'mercedes';
}

interface Bike {
  type: 'bike';
  model: 'mountain';
}

type VehicleType = Car | Bike;

const vehicle: VehicleType = {
  type: 'car',
  brand: 'mercedes',
};
```

### \> Types intersection

`Types intersection` is a way to declare a type that combines multiple types into a single type that contains all the
properties and characteristics of each individual type.

```typescript
interface Person {
  name: string;
}

interface Address {
  street: string;
  city: string;
}

type PersonWithAddressType = Person & Address;

const person: PersonWithAddressType = {
  name: 'John',
  street: 'Main St.',
  city: 'New York',
};
```

### \> Types assertion

`Types assertion`  is the explicit specification of a value's type to temporarily override the type inferred by the
TypeScript compiler, aiding in type-safe interactions with values.

```typescript
interface User {
  name: string;
}

const user = {
  name: 'John',
  age: 15,
} as User;
```

### \> Const assertion

`Const assertion` is a way to tell the type system that a variable should not have its type widened,
preserving its literal value as the most specific type.

```typescript
const userPermissions = ['admin', 'user'] as const;
```

### \> Tuples
`Tuple` is a typed array with a pre-defined length and types for each index.

```typescript
const person: [string, number, boolean] = ['John', 20, true];
```

### \> Literal Types
`Literal Types` allows us to create more precise types like type combinations using template literals.

```typescript

```

## References

1. [Unions and Intersection Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html).
2. [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html).
3. [TypeScript Book](https://github.com/gibbok/typescript-book).
