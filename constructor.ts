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

  // 사칙연산 메서드 
  public add(): number {
    return this._a + this._b;
  }

  public subtract(): number {
    return this._a - this._b;
  }

  public multiply(): number {
    return this._a * this._b;
  }

  public divde(): number {
    if (this._b === 0 ) {
      throw new Error("0으로 나눌 수 없습니다.")
    }
    return this._a / this._b;
  }
}