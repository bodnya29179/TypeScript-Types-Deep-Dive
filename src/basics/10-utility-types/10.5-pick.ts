/* Syntax: Pick<Type, Keys> */

interface Product {
  id: string;
  name: string;
  price: number;
  amount: number;
}

const product: Pick<Product, 'price' | 'amount'> = {
  price: 10,
  amount: 35,
};



export {};
