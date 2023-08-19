/**
 * Merging interfaces into one
 */
interface Vehicle {
  name: string;
  wheels: number;
}

interface Vehicle {
  type: string;
}

const car: Vehicle = {
  name: 'car',
  wheels: 4,
  type: 'motorized',
};

type VehicleFieldType = keyof Vehicle;



export {};
