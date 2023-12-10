var Calculator = /** @class */ (function () {
    function Calculator(a, b) {
        this._a = a;
        this._b = b;
    }
    Object.defineProperty(Calculator.prototype, "a", {
        // getter와 setter
        get: function () {
            return this._a;
        },
        set: function (value) {
            this._a = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculator.prototype, "b", {
        get: function () {
            return this._b;
        },
        set: function (value) {
            this._b = value;
        },
        enumerable: false,
        configurable: true
    });
    // 사칙연산 메서드 
    Calculator.prototype.add = function () {
        return this._a + this._b;
    };
    Calculator.prototype.subtract = function () {
        return this._a - this._b;
    };
    Calculator.prototype.multiply = function () {
        return this._a * this._b;
    };
    Calculator.prototype.divde = function () {
        if (this._b === 0) {
            throw new Error("0으로 나눌 수 없습니다.");
        }
        return this._a / this._b;
    };
    // static 메서드
    Calculator.addStatic = function (a, b) {
        return a + b;
    };
    Calculator.subtractStatic = function (a, b) {
        return a - b;
    };
    Calculator.multiplyStatic = function (a, b) {
        return a * b;
    };
    Calculator.divideStatic = function (a, b) {
        if (b === 0) {
            throw new Error("0으로 나눌 수 없습니다.");
        }
        return a + b;
    };
    return Calculator;
}());
// 사용 예
var calc = new Calculator(10, 5);
console.dir(Calculator); //?
/**
 * 생성자 함수의 구조를 위의 console.dir()로 확인하면 아래의 '구조'를 확인할 수 있습니다.
 * static, 즉 정적 메서드는 생성자 함수의 프로퍼티로 붙어있는 것이 아니라, 생성자 함수 자체의 프로퍼티로 붙어있는 것을 확인할 수 있습니다.
 * static(정적이다) 라는 해당 표현의 의미와 public 키워드의 차이는
 * 정적 메서드는 생성자 함수의 인스턴스를 생성하지 않고도 사용할 수 있지만, public 메서드는 인스턴스를 생성해야만 사용할 수 있다는 것입니다.
 * 우리가 흔히 사용하고 봐왔던 메서드는 public 메서드입니다
 * static 메서드와 매우 혼동되는 부분이므로 Calculator.addStatic() 메서드는 new 키워드를 사용하지 않고서도 사용할 수 있습니다.
 {
  [λ: Calculator]
    addStatic: [λ],
    subtractStatic: [λ],
    multiplyStatic: [λ],
    divideStatic: [λ]
 }
 */
console.log(calc.add()); // 15
console.log(calc.subtract()); // 5
console.log(calc.multiply()); // 50
console.log(Calculator.addStatic(10, 5)); // 15 (static 메서드 사용)
