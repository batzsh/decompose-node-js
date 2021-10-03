const Decompose = require("./classes/Decompose");
const decompose = new Decompose();

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite um número: ", (n) => {
  console.log(`\nNúmero de entrada: ${n}`);
  decompose.getDivisors(n);
  readline.close();
});
