# TypeScript: Types Deep Dive

## Structure of files

- **Basics**: `00-*.ts` - `12-*.ts`.
- **Advanced**: will be ready soon...

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

### \> Keyof

`keyof` is a keyword which is used to extract the key type from an object type.

```typescript
keyof Something
```

### \> Typeof

`typeof` is a keyword which is used to check the type of variable.

```typescript
typeof Something
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
type LiteralType = `${Type1}-${Type2}`;
```

### \> Utility types

#### Partial

`Partial` changes all the properties in an object to be optional.

```typescript
Partial<Type>
```

#### Required

`Required` changes all the properties in an object to be required.

```typescript
Required<Type>
```

#### Record

`Record` is a shortcut to defining an object type with a specific key type and value type.

```typescript
Record<KeyType, ValueType>
```

#### Omit

`Omit` removes keys from an object type.

```typescript
Omit<Type, Keys>
```

#### Pick

`Pick` removes all but the specified keys from an object type.

```typescript
Pick<Type, Keys>
```

#### Exclude

`Exclude` removes types from a union.

```typescript
Exclude<UnionType, ExcludedMembers>
```

#### ReturnType

`ReturnType` extracts the return type of function type.

```typescript
ReturnType<Type>
```

#### Parameters

`Parameters` extracts the parameter types of a function type as an array.

```typescript
Parameters<Type>
```

#### Readonly

`Readonly` is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned
a value.

```typescript
Parameters<Type>
```

#### Awaited

`Readonly` is meant to model operations like await in async functions, or the .then() method on Promises - specifically,
the way that they recursively unwrap Promises.

```typescript
Awaited<Type>
```

#### Other utilities <ins>for self-processing</ins>:
```typescript
Extract<Type, Union>
```

```typescript
NonNullable<Type>
```

```typescript
InstanceType<Type>
```

```typescript
Uppercase<StringType>
```

```typescript
Lowercase<StringType>
```

```typescript
Capitalize<StringType>
```

```typescript
Uncapitalize<StringType>
```

### \> Indexed access types

`Indexed access types` can be used to look up a specific property on another type.

```typescript
Type['property']
```

### \> Generics

`Generics` are a mechanism that allows you to create generic types or functions that can work with different data types
while maintaining type safety. They allow you to provide compile-time type checking and use this type information to
improve data handling.

## References

1. [Unions and Intersection Types](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html).
2. [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html).
3. [TypeScript Book](https://github.com/gibbok/typescript-book).
4. [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html).
5. [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html).

## Repository link

![Repo link](./images/qr-code.png)
