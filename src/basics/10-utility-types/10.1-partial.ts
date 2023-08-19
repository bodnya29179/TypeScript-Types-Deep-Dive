/* Syntax: Partial<Type> */

interface Product {
  id: string;
  name: string;
  price: number;
}

const product: Partial<Product> = {};



export {};
