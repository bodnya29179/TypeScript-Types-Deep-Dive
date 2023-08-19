interface Product {
  id: string;
  name: string;
  price: number;
  createdAt: Date;
}

// ❌ not picking data type
type ProductFieldType1 = string | number | Date;

// ✅ picking data type
type ProductFieldType2 = Product[keyof Product];



export {};
