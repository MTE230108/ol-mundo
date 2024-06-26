//n1
let nome = 'jão'
console.log(nome)

//n2
let a = 5; let b = 10; let resultado = a + b
console.log(resultado)

//n3
let primeironome = 'josefa';
let ultimonome = ' silva';
let nomeintero = primeironome + ultimonome
console.log(nomeintero)

//n4
let pessoa = {
   nome: 'mateus',
   idade: 16,
   endereço: 'rua pedrosa',
   telefone: 123456765
}
console.log(pessoa)

//n5
let fruta = ['maçã', 'banana', 'laranja']
fruta.push('uva')
console.log(fruta)

//n6
let numeros = [1, 2, 3, 4, 5];
numeros.push(5);
numeros.push(1);
console.log(numeros)

//n6
let cores = ['vermelho', 'verde', 'azul']
console.log(cores)
for (i = 0; i < cores.length; i++) {
   console.log(cores[i])
}
//n7
let idade = 16
if (idade >= 18) {
   console.log('você é maior de 18 anos')
} else {
   console.log('você tem menos de 18 anos')
}


// exercicio 8

let nota = 6;

if (nota >= 7) {
   console.log("Aprovado");
} else if (nota >= 5 && nota < 7) {
   console.log("Recuperação");
} else {
   console.log("Reprovado");
}

// exercicio 9

let diaDaSemana = 3;

switch (diaDaSemana) {
   case 1:
      console.log("Domingo");
      break;
   case 2:
      console.log("Segunda-feira");
      break;
   case 3:
      console.log("Terça-feira");
      break;
   case 4:
      console.log("Quarta-feira");
      break;
   case 5:
      console.log("Quinta-feira");
      break;
   case 6:
      console.log("Sexta-feira");
      break;
   case 7:
      console.log("Sábado");
      break;
   default:
      console.log("Valor inválido para dia da semana");
}

// exercicio 10

for (let i = 1; i <= 10; i++) {
   console.log(i);
}
// exercicio 11

// Declarando e atribuindo um valor inicial para a variável contador
let contador = 1;

// Utilizando um loop while para exibir os números de 1 a 5 no console
while (contador <= 5) {
   console.log(contador);
   contador++; // Incrementando o valor da variável contador
}

// exercicio 12

let numero = 0;

do {
   console.log(numero);
   numero++;
} while (numero < 3);

// exercicio 13

// Declarando o vetor valores com os valores dados
let valores = [10, 20, 30, 40, 50];

// Declarando uma variável para armazenar a soma dos elementos
let soma = 0;

// Utilizando um loop for para calcular a soma dos elementos do vetor
for (let i = 0; i < valores.length; i++) {
   soma += valores[i];
}

// Exibindo o resultado da soma no console
console.log("A soma dos elementos é:", soma);

// exercicio 14

// Declarando o vetor numeros com valores numéricos
numero = [15, 8, 22, 37, 11, 45, 6];

// Declarando uma variável para armazenar o maior número
let maiorNumero = numero[0]; // Assumindo que o primeiro elemento é o maior inicialmente

// Utilizando um loop for para encontrar o maior número no vetor
for (let i = 1; i < numero.length; i++) {
   if (numero[i] > maiorNumero) {
      maiorNumero = numero[i];
   }
}

// Exibindo o maior número encontrado no console
console.log("O maior número no vetor é:", maiorNumero);

// exercicio 15

// Declarando o vetor numeros com valores numéricos
numeros = [15, 8, 22, 37, 11, 45, 6];

// Declarando uma variável para armazenar o menor número
let menorNumero = numeros[0]; // Assumindo que o primeiro elemento é o menor inicialmente

// Utilizando um loop for para encontrar o menor número no vetor
for (let i = 1; i < numeros.length; i++) {
   if (numeros[i] < menorNumero) {
      menorNumero = numeros[i];
   }
}

// Exibindo o menor número encontrado no console
console.log("O menor número no vetor é:", menorNumero);

// exercicio 16

let n = 5;

let fatorial = 1;

for (let i = 1; i <= n; i++) {
   fatorial *= i;
}

console.log(`O fatorial de ${n} é:`, fatorial);

// exercicio 17

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {

   if (numeros[i] % 2 === 0) {
      console.log(numeros[i] + " é par");
   } else {
      console.log(numeros[i] + " é ímpar");
   }
}

// exercicio 18

// Declarando e atribuindo uma string para a variável texto
texto = "Esta é uma string de exemplo com várias vogais.";

// Convertendo o texto para minúsculas para facilitar a contagem (opcional)
texto = texto.toLowerCase();

// Declarando uma variável para contar as vogais
let countVogais = 0;

// Utilizando um loop for para percorrer cada caractere da string
for (let i = 0; i < texto.length; i++) {
   // Verificando se o caractere atual é uma vogal
   if (texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u') {
      countVogais++;
   }
}

// Exibindo o resultado da contagem de vogais no console
console.log("Número de vogais na string:", countVogais);

// exercicio 19

// Declarando e atribuindo uma string para a variável texto
let texto = "Hello, world!";

// Declarando uma variável para armazenar a string invertida
let textoInvertido = "";

// Utilizando um loop for para percorrer a string de trás para frente
for (let i = texto.length - 1; i >= 0; i--) {
   textoInvertido += texto[i];
}

// Exibindo o resultado da string invertida no console
console.log("String original:", texto);
console.log("String invertida:", textoInvertido);

// macaco final

// Declarando e atribuindo valores para as variáveis inicio e fim (intervalo)
let inicio = 10;
let fim = 30;

// Utilizando um loop for para percorrer todos os números no intervalo
for (let numero = inicio; numero <= fim; numero++) {
   // Verificando se o número atual é primo
   let ehPrimo = true;
// Números primos são maiores que 1 e divisíveis apenas por 1 e por eles mesmosif (numero > 1)
   for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
         ehPrimo = false;
         break; // Se encontrarmos um divisor, já sabemos que não é primo, então podemos parar o loop
      } else {
      ehPrimo = false; // 0 e 1 não são considerados primos
      }

      // Se for primo, exibe no console
      if (ehPrimo) {
         console.log(numero + " é primo");
      }
}
}
