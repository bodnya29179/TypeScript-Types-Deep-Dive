{
  const person = {
    name: 'Jack',
    age: 20,
  };

  // ✅ changeable
  person.age = 10;
}

{
  const person = {
    name: 'Jack',
    age: 20,
  } as const;

  // ❌ not changeable
  person.age = 10;
}



export {};
