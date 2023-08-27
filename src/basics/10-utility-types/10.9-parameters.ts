/* Syntax: Parameters<Type> */

/* some library limited by scope */
namespace SomeLibrary {
  interface Coordinates {
    x: number;
    y: number;
  }

  export function getDistanceBetweenTwoPoints(point1: Coordinates, point2: Coordinates): number {
    const powX = Math.pow(point2.x - point1.x, 2);
    const powY = Math.pow(point2.y - point1.y, 2);

    return Math.sqrt(powX + powY);
  }
}

/*
 * typeof SomeLibrary.getDistanceBetweenTwoPoints
 * will give us (point1: Coordinates, point2: Coordinates) => number
 */
type FunctionType = typeof SomeLibrary.getDistanceBetweenTwoPoints;

let point: Parameters<FunctionType>[0]; // { x: number; y: number; }



export {};
