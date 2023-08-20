class PairContainer<T, U> {
  constructor(public first: T, public second: U) {}

  getTuple(): [T, U] {
    return [this.first, this.second];
  }
}

const pair = new PairContainer(42, 'forty-two');

const tuple = pair.getTuple();
