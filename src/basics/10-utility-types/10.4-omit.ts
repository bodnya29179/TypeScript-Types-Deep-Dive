/* Syntax: Omit<Type, Keys> */

interface Product {
  id: string;
  name: string;
  price: number;
  amount: number;
}

const product: Omit<Product, 'id' | 'name'> = {
  price: 10,
  amount: 35,
};



export {};
