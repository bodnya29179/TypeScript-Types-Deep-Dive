/* Syntax: Required<Type> */

interface Product {
  id: string;
  name?: string;
  price?: number;
}

const product: Required<Product> = {
  id: 'fake-id',
  name: 'laptop',
  price: 800,
};



export {};
