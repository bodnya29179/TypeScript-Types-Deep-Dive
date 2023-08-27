// example 1
// old way
const myInput1 = <HTMLInputElement>document.getElementById('my-input');

// new way
const myInput2 = document.getElementById('my-input') as HTMLInputElement;


// example 2
const userInput: unknown = 'Hello, TypeScript!';

// old way
const strLength1 = (<string>userInput).length;

// new way
const strLength2 = (userInput as string).length;



export {};
