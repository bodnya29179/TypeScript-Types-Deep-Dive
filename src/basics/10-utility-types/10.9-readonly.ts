/* Syntax: Readonly<Type> */

interface Todo {
  title: string;
  description: string;
  createdAt: number;
}

const todo: Readonly<Todo> = {
  title: 'TypeScript',
  description: 'Understanding the Readonly utility',
  createdAt: Date.now(),
};

todo.title = 'we cannot edit it, because it is readonly!';



export {};
