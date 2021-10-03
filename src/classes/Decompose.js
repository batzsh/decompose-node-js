class Decompose {
  isPrime(n) {
    for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
    return n;
  }

  getPrimesFromDivisors(divisors) {
    let primes = [];

    for (let n of divisors) {
      this.isPrime(n) ? primes.push(n) : false;
    }

    console.log(`Divisores primos: ${primes}`);
    return primes;
  }

  getDivisors(n) {
    let divisors = [];

    for (let i = 1; i <= n; i++) {
      Number.isInteger(n / i) && divisors.push(i);
    }

    console.log(`Número divisores: ${divisors}`);
    this.getPrimesFromDivisors(divisors);

    return divisors;
  }
}

module.exports = Decompose;
