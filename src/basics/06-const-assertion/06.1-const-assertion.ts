const numbers1 = [1, 2, 3]; // 'numbers1' has a type: number[]

const numbers2 = [1, 2, 3] as const; // 'numbers2' has a type: readonly [1, 2, 3]

// ✅ changeable
numbers1.push(10);

// ❌ not changeable
numbers2.push(10);



export {};
