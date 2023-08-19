const person1 = {
  name: 'Jack',
  age: 20,
};

// ✅ changeable
person1.age = 10;

const person2 = {
  name: 'Jack',
  age: 20,
} as const;

// ❌ not changeable
person2.age = 10;
