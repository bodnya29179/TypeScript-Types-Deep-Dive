// ✅ changeable
{
  const numbers = [1, 2, 3]; // 'numbers1' has a type: number[]

  numbers[0] = 111;
  numbers.push(10);
}

// ❌ not changeable
{
  const numbers = [1, 2, 3] as const; // 'numbers2' has a type: readonly [1, 2, 3]

  numbers[0] = 111;
  numbers.push(10);
}



export {};
