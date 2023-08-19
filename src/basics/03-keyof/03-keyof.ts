interface Product {
  id: string;
  name: string;
  price: number;
}

type ProductFieldType = keyof Product;

const field: ProductFieldType = 'id';



export {};
