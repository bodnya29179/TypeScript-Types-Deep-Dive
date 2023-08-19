interface Person {
  firstName: string;
  lastName: string;
}

// ❌ not allowed
const person: Person = {};

// ✅ allowed
const person = {} as Person;

person.firstName = 'Sarah';
person.lastName = 'jane';



export {};
