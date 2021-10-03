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
}

module.exports = Decompose;
