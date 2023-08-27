// "any" means "I don't care"
function someFunc1(callback: any): void {
  callback();
}

someFunc1(1);


// "unknown" means "I don't know"
function someFunc2(callback: unknown): void {
  callback();

  if (typeof callback === 'function') {
    callback();
  }
}


// "never" means "disallowed value"
function getType(value: unknown): string | never {
  if (typeof value === 'string') {
    return 'string';
  } else {
    throw new Error('Value is not a string');
  }
}

getType(123);



export {};
