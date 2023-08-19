// example 1
const obj = {
  id: 'fake-id',
  name: 'test',
  createdAt: Date.now(),
};

type ObjectType = typeof obj; // { id: string; name: string; createdAt: number; }


// example 2
let price = 10;
let brand = 'Apple';

type MyType = typeof price | typeof brand; // number | string


// example 3
type ObjectFieldType = keyof (typeof obj); // 'id' | 'name' | 'createdAt'


// example 4
type ObjectValueType = (typeof obj)[ObjectFieldType]; // number | string


// example 5
function someFunc(): number {
  return 1;
}

type FunctionType = typeof someFunc; // () => number




export {};
