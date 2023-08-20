// before
{
  // @ts-ignore
  function getFirstElement(arr: any[]): any {
    return arr[0];
  }

  const numbers = [1, 2, 3, 4, 5];
  const firstNum = getFirstElement(numbers); // any

  const strings = ['apple', 'banana', 'cherry'];
  const firstStr = getFirstElement(strings); // any
}

// after
{
  // @ts-ignore
  function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }

  const numbers = [1, 2, 3, 4, 5];
  // implicit typing
  const firstNum = getFirstElement(numbers); // number

  const strings = ['apple', 'banana', 'cherry'];
  // explicit typing
  const firstStr = getFirstElement<string>(strings); // string
}

// setting default generic type
{
  // @ts-ignore
  function getFirstElement<T = unknown>(arr: T[]): T {
    return arr[0];
  }

  const something = [1, 2, 3, 4] as any;
  const firstValue = getFirstElement(something); // unknown
}


export {};
