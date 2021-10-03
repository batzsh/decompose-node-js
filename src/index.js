const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite um número: ", (n) => {
  console.log(`\nNúmero de entrada: ${n}`);
  readline.close();
});
