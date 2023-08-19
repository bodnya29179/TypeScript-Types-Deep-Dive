/* Syntax: Record<KeyType, ValueType> */

// ❌ { [key: string]: object }
function someFunc1(options: { [key: string]: object }): void {
  console.log('options', options);
}

// ✅ Record<string, object>
function someFunc2(options: Record<string, object>): void {
  console.log('options', options);
}


// ❌ { [key: string]: number }
const obj1: { [key: string]: number } = {
  key1: 1,
  key2: 2,
  key3: 3,
};

// ✅ Record<string, number>
const obj2: Record<string, number> = {
  key1: 1,
  key2: 2,
  key3: 3,
};



export {};
