/* Syntax: Partial<Type> */

// example 1
interface Product {
  id: string;
  name: string;
  price: number;
}

const product: Partial<Product> = {};

// example 2
interface Todo {
  id: number;
  title: string;
  description: string
}

function updateTodo(todo: Todo, updatePayload: Partial<Todo>): Todo {
  return {
    ...todo,
    ...updatePayload,
  };
}

const todoBefore: Todo = {
  id: 1,
  title: 'Go to beer pub with friends',
  description: 'The Wall Street, 52',
}

const todoAfter = updateTodo(todoBefore, { description: 'event is canceled :(' });



export {};
