/* Syntax: Awaited<Type> */

// example 1
type ValueFromPromiseType = Awaited<Promise<string>>;

const value: ValueFromPromiseType = 'test';

// example 2
type ExtractValueType = Awaited<boolean | Promise<number>>; // number | boolean


// example 2
function someFunc(): Promise<{ x: number; y: number; }> {
  return Promise.resolve({ x: 1, y: 1 });
}

/*
 * typeof someFunc
 * will give us () => Promise<{ x: number; y: number; }>
 *
 * ReturnType<type someFunc>
 * will give us Promise<{ x: number; y: number; }>
 *
 * Awaited<ReturnType<type someFunc>>
 * will give us { x: number; y: number; }
 */
type FunctionType = Awaited<ReturnType<typeof someFunc>>;

const point: FunctionType = { x: 5, y: 5 };



export {};
