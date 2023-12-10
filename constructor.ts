class Calculaator {
  private _a: number;
  private _b: number;

  constructor(a: number, b: number) {
    this._a = a;
    this._b = b;
  }

  // getter와 setter
  get a(): number {
    return this._a;
  }

  set a(value: number) {
    this._a =value;
  }

  get b(): number {
    return this._b;
  }

  set b(value: number) {
    this._b = value;
  }
}