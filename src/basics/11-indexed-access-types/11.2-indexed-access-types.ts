interface Product {
  id: string;
  name: string;
  price: number;
  amount: number;
}

// ❌ not picking data type
type FieldType1 = number | string;

// ✅ picking data type
type FieldType2 = Product['name' | 'price'];



export {};
