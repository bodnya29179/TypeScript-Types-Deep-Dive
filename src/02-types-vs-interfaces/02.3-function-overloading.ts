interface Vehicle {
  getSound(): string;
}

/* ❌ cannot be overloaded */
interface Car extends Vehicle {
  getSound(): string[];
}

/* ✅ can be overloaded */
type CarType = Vehicle & { getSound(): string[] };

const car: CarType = {
  getSound(): string & string[] {
    return '' as (string & string[]);
  }
}
