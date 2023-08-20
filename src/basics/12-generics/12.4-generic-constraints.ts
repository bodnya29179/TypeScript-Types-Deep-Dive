function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key): Type[Key] {
  return obj[key];
}

const obj = { a: 1, b: 2, c: 3, d: 4 };

getProperty(obj, 'a');
getProperty(obj, 'm');



export {};
