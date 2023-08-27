/* Syntax: ReturnType<Type> */

/* some library limited by scope */
namespace SomeLibrary {
  interface Coordinates {
    x: number;
    y: number;
  }

  export function getCoordinates(): Coordinates {
    return { x: 1, y: 1 };
  }
}

/*
 * typeof getCoordinates
 * will give us () => { x: number; y: number; }
 */
let coordinates: ReturnType<typeof SomeLibrary.getCoordinates>;



export {};
