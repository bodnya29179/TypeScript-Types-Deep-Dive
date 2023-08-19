interface Product {
  id: string;
  name: string;
  price: number;
  amount: number;
}

// ❌ not picking data type
function addProductToCart1(productId: string): void {
  /* doing some actions */
}

function removeProductFromCart1(productId: string): void {
  /* doing some actions */
}

function renameProduct1(productId: string, productName: string): void {
  /* doing some actions */
}


// ✅ picking data type
function addProductToCart2(productId: Product['id']): void {
  /* doing some actions */
}

function removeProductFromCart2(productId: Product['id']): void {
  /* doing some actions */
}

function renameProduct2(productId: Product['id'], productName: Product['name']): void {
  /* doing some actions */
}



export {};
