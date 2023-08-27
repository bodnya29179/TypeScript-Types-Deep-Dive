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

function addProductToCart(product: Required<Product>): void {
  /* doing some actions */
}

addProductToCart(product);



export {};
