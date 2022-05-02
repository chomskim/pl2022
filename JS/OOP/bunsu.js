class Comparable {
  compareTo(obj) {}
}

class Bunsu extends Comparable {
  constructor(top, bot) {
    super();
    this.bunja = top;
    this.bunmo = bot;
    this.normalize();
  }
  toString() {
    return `${this.bunja}/${this.bunmo}`;
  }
  compareTo(right) {
    // 0 보다 크거나 작거나 같다는 것만 구분.
    return this.bunja * right.bunmo - this.bunmo * right.bunja;
  }
  static gcd(n, m) {
    // static은 class에 대해 하나만 존재, Bunsu.gcd 로 사용.
    // Euclids Greatest Common Divisor algorithm.
    while (n !== m) {
      if (n < m) {
        m = m - n;
      } else {
        n = n - m;
      }
    }
    return n;
  }
  normalize() {
    // Normalize fraction by
    // (a) moving sign to bunja
    // (b) ensuring bunja and bunmo have no common divisors
    let sign = 1;
    if (this.bunja < 0) {
      sign = -1;
      this.bunja = -this.bunja;
    }
    if (this.bunmo < 0) {
      sign = -sign;
      this.bunmo = -this.bunmo;
    }
    let d = this.bunja !== 0 ? Bunsu.gcd(this.bunja, this.bunmo) : 1;
    this.bunja = sign * (this.bunja / d);
    this.bunmo = this.bunmo / d;
    //console.log(`sign=${sign} d=${d} bunja=${this.bunja} bunmo=${this.bunmo}`)
  }
  plus(right) {
    return new Bunsu(this.bunja * right.bunmo + right.bunja * this.bunmo, this.bunmo * right.bunmo);
  }

  minus(right) {
    // binary - operator (a - b)
    return new Bunsu(this.bunja * right.bunmo - right.bunja * this.bunmo, this.bunmo * right.bunmo);
  }

  multiply(right) {
    return new Bunsu(this.bunja * right.bunja, this.bunmo * right.bunmo);
  }

  div(right) {
    return new Bunsu(this.bunja * right.bunmo, this.bunmo * right.bunja);
  }

  negative() {
    // unary - operator (-a)
    return new Bunsu(-this.bunja, this.bunmo);
  }

  next() {
    // ++ operator
    this.bunja += this.bunmo;
    return this;
  }
}

let a = new Bunsu(0, 1); // Value is 0/1
let b = new Bunsu(4, 1); // Value is 4/1
let c = new Bunsu(6, 8); // Value is 6/8, which is converted to 3/4
console.log(`Constructed values ${a} ${b} ${c}`);

let d = c; // d reference c(3/4) instance(aliasing)
c.next();
console.log(`Value of c is ${c}`);
console.log(`Value of d is ${d}`);

// Test arithmetic instructions
c = new Bunsu(3, 4);
console.log(`Value of c is ${c}`);
console.log(`Value of d is ${d}`);
// d = b + c -- operator overloading 이 되면(C++) 이 식을 그대로 쓸 수 있다.
d = b.plus(c);
console.log(`4 + 3/4 is ${d}`);
// d = b - c
d = b.minus(c);
console.log(`4 - 3/4 is ${d}`);
//let e = (b + (-c));
let e = b.plus(c.negative());
console.log(`Done with negation e = ${e}`);

if (d.compareTo(e) === 0) {
  console.log(`Subtraction test successful.`);
} else {
  console.log(`Subtraction test failed.`);
}

a = new Bunsu(6, 8);
b = new Bunsu(7, 8);
if (a.compareTo(b) < 0) {
  console.log(`Compare successful. a<=>b = ${a.compareTo(b)}`);
}
if (a.compareTo(b) <= 0) {
  console.log(`a<=b = ${a.compareTo(b) <= 0}`);
}

let h = new Bunsu(0, 1);
for (let i = 1; i <= 30; ++i) {
  //h = h + new Bunsu(1,i);
  h = h.plus(new Bunsu(1, i));
  console.log(` 1/1+...+1/${i} = ${h}`);
}
console.log(` 1/1+...+1/30 = ${h}`);

a = new Bunsu(1, 1);
console.log(`a + (++a) ${a.plus(a.next())}`); // side effect
