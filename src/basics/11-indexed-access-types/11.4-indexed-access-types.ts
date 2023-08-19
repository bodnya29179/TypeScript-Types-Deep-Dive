const array = [1, 'example', true];

type IndexedType = typeof array[number];

const element1: IndexedType = 123;
const element2: IndexedType = 'test';
const element3: IndexedType = false;
const element4: IndexedType = {};



export {};
