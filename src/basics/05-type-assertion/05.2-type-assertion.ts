// old way
const myInput2 = <HTMLInputElement>document.getElementById('my-input');

// new way
const myInput1 = document.getElementById('my-input') as HTMLInputElement;


/* Example 3 */
const userInput: unknown = 'Hello, TypeScript!';

// old way
const strLength2 = (<string>userInput).length;

// new way
const strLength1 = (userInput as string).length;



export {};
