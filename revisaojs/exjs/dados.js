
"Tipos de Dados"

let idadeAluno = 18; // int - numeros inteiros
let valorProduto = 5.35; // float - numeros quebrados
let nomeAluno = "Pedro"; // string - variaveis de texto
let casado = true; //booleano - recebe valores falsos ou verdadeiros
let linguagens = [JAVA, C, PYTHON]; // array - conjunto de elementos, colchetes separados por virgulas

"Manipulando Textos e Numeros "

// Podemos precisar mudar o tipo da variavel, como por exemplo de float para interagir.
// Assim usamos o "parseint"

let numFloat = 123.456;
console.log(parseInt(numFloat)); //Retorna o valor como inteiro

// Se a string for composta de numeros podemos transforma-la tambem, para isso podemos usar parseint
// o valor perdera as casas depois da virgula 

let numStringng = 123.456;
console.log(parseFloat(numString)); //retorna todo o numero

// retornar valor textual de uma variavel numerica utilize a função "toString();"

let nFloat = 123.456;
console.log(numFloat.toString()); // o formato é o mesmo, so que em formato de string

// para conferir a conversão dos valores, podemos utilizar o verificador "typeof", que retorna o tipo da variavel

let nmFloat = 123.456;
let nmString= nmFloat.toString();
let verificar = typeof nmString
console.log(verificar)

"Manipulando Textos e Numeros"

// Os textos strings devem estar entre aspas duplas ou simples.

let nomeAluno1 = "Pedrinho"
let nomeAluno2 = "Joaozinho"

// Quando precisamos usar algum caracter reservado em nosso texto usamos a barra invertiad "\" antes do caracetere para ele fazer parte do texto

let pedido = "Quero um copo d\`agua "

// Podemos verificar o tamnho da nossa string da nossa string utilizando o metodo "lenght"
let lerolero = "Quero um copo d\`agua "
alert(lerolero.length)

// Outro metodo que podemos utilizar é o "indexOf()" eme retorna a primeira posição na string de um trecho do texto

let txt = "Estão chegando as provas"
console.log(txt.indexOf("as")); // retorna o valor 15 que é o valor da primeira correspondencia 

// para saber a ultima vez que o trecho aparece no texto utilizamos o "lastIndexOf()"

let tt = "Estão chegando as provas"
console.log(tt.lastIndexOf("as")); // Ele vai retornar o valor "22" que é a posição da ocorrencia

// Nos podemos extrair parte do texto, para isso usamos o "slice", quando apontamos o inicio e o fim do trecho que queremos extrair
// ai ele retorna o o trecho como uma nova string

let tx = "Estão chegando as provas"
console.log(tx.slice(0,5)); // retorna estão que esta entre 0 e 5

// temos tambem o "substr() que recebe a posição inicial e a quantidade de caracteres que queremos pegar"

let texto = "Estão chegando as provas"
console.log(txt.substring(6,8)); // ele retorna a string chegando

// Tambem é possivel substituirmos um trecho do texto "replace()" receb o trecho  que deve ser substituido e o trecho que entra no lugar dele

let textinho = "Estão chegando as provas"
console.log(textinho.replace("provas","avaliações")); //retorna provas por avaliações

// o metodo "toUpperCase()" vai converter toda a string em letras maiusculas

let teto = "estão chegando as provas"
console.log(teto(teto.toUpperCase));

// O metodo "toLowerCase()" vai converter todas as letras em minusculas

let tet = "estão chegando as provas"
console.log(tet.toLowerCase);

// Para os numeros nos tambem podeos definir algumas formas de apresentação

let nume =123.456
console.log(nume.toFixed(2)); // define o numero de casas decimais do valor

// se quisermos definir um numero de casas independente do ponto usamos o "toPrecision()", que define o numero de casas do valor como um todo

let numerinho = 123.456
console.log(numerinho.toPrecision(4)); // vai retornar o valor com 4 digitos

console.log(numerinho.toPrecision(6));
console.log(numerinho.toPrecision(9));

"Operadores matematicos"


// para manipularmos os valores podemos utilizar os operadores matematicos
// sao os mesmos do python, menos % modulo e **potencia

let a = 10;
let b = 10;

let soma = a + b;
let subtração = a + b;
let multiplicação = a * b;
let divisão = a / b;

// exibindo no console

console.log("o resultado da soma é" + soma);
console.log("o resultado da subtração é" + subtração);
console.log("o resultado da multiplicação é" + multiplicação);
console.log("o resultado da divisão:" + divisão);

// operadores ternarios, define o numero a ser verificado 
 let sete = 7;

// verifica se o numero é par ou impar 

let paridade = (sete % 2 == 0) ? 'par' : 'impar';

// imprime o resultado no console 
console.log('o numero ${sete} é ${paridade}'); //o numero 7 é impar 

// aqui usamos o operador ternario ?: para ver se o numero é par ou impar
// a expressão (sete % 2 == 0) retorna true se o resto da divisão de numero por 2 for igual a zero, oq eu significa que o numero é par
// caso contrario, retorna false
// depois console.log mostra o resultado no console