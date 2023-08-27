{
  const action = {
    type: 'CREATE',
    payload: 123,
  }; // 'action1' has a type: { type: string, payload: number }
}

{
  const action = {
    type: 'CREATE' as const, // now it's not changeable anymore
    payload: 123,
  }; // 'action2' has a type: { type: 'CREATE', payload: number }
}



export {};
