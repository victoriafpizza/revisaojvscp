// estrutura de decisão e repetição 

// A estrutura mais usada é a IF, SE USAMOS ELA PARA VERIFICAR SE UMA AFIRMAÇ~~AO É VERDADEIRA OU FALSA, OU SEJA: BOOLEANO

if(true){
    "instruções do que deve ser feito"
}

"o comando if verifica oteste logico que esta entre parenteses e se for verdadeiro ele executa as instruções que estão dentro das chaves"

"Operadores logicos"

// iguais aos de python

if(10>7){
    document.write("dez é maior que sete")
}

// aqui verificamos se 10 é maior do que 7, como é erdade ele vai imprimir a frase na tela

let valor = 10
if(valor>7){
    document.write("o valor é maior do que sete")
}

"else"

// a estrutura so realizava uam ação se o resultado fosse verdadeiro, sef osse falso nada acontecia
// o elese faz com que uma segunda situação posse ser possivel 

let valoor = 10
if(valor >= 15){
    docuemnt.write("o valor é maior ou igual a 15")
}else{
    document.write("o valor é menor que 15")
}

// para isso tambem podemos fazer uma serie de verificações para chegar na saida desejada
// para isso podemos contar com else if, apos o primeiro if

let idade = 19
if (idade<12){
    document.write("é uma criança")
}else if(idade <= 17){
    document.write("é um adolescente")
}else if(idade <= 29){
    document.write("è um jovem")
}else{
    document.write("é um adulto")
}

"&& e - || ou"

let value = 15 
if(value > 10 && value < 20){
    docuemnt.write("este valor é valido")
}

let val = 25 
if(val < 10 || val > 20){
    document.write("este valor não esta entre 10 e 20")
}

"SWITCH"

// O switch é uma estrutura de decisão que não trabalha com condições "verdadeiros e falsos"
// mas sim com valores diretos

let teste = 2
switch(teste){
    case 1:
        document.write("foi de primeira")
        break;
    case 2:
        document.write("foi na segunda vez")
        break;
    default:
        document.write("não foi nem na primeira nem na segunda")
        break;
}

// incremento e decremento
// incremento 

let lero = 7
console.log(lero); //valor igual a 1
lero = lero+1
console.log(lero); //valor igual a 8

// usamos a propria variavell para incrementar mais 1 ao seu valor

console.logo(lero);
lero++

// quando usamos ++ depois da variavel, stamos indicando que deve ser incrementado mais 1 ao seu valor 

let a = 7
console.log(a) // a = 1
a += 3 // valor igual a 10 

// quando usamos += dizemos que apartir daquele momento a variavel valor a seu proprio valo +3
// em alguns casos pode ser que precisemos fazer o contrario, como uma contagem regressiva
//  podemos usa -- pra decrementar um valor 

let b = 7
console.log(b)
b-- // - 1 ao valor da variavel
console.log(b) //valor igual a 6

// se precisamros diminuir mais de 1

let c = 5
console.log(c)
c -= 4
console.log(c)

// multiplicação e divisão

c*=4
console.log(c) // valor igual a 20
c /= 8 
console.log(c); //valor igual a 2.5

"For"

// o comando for é a estrutura mais utilizada, e procura utilizar repetições de instruções pelo n que precisamos 

for(let d=0; d < 10; d++){
    console.log("agora d vale" + d);
}

// podemos usar como array

let frutas = ["maçã","banana","uva","pera"]
for(let d=0; d < frutas.length; d++){
    console.log(frutas[d]);
}

// length aqui serve para usarmos a propriedade lenght para saber o tamanho dp array

"for of"

let frutinhas = ["maça","banana","uva","pera"]
for (let frutinhas of frutinhas){
    console.log(frutinhas)
}

// for of serve par apercorrer um array, podemos criar uma variavel que automaticamente recebe os valores na interaão
//  aqui é "frutinha"

"while"

// para fazer repetições no codigo tambem podemos usar o comando "while"
// a sintaxe dele é diferente do for
// temos que ter uma variavel antes de inicializa-lo

let cont = 0
while (cont < 10){
    console.log("passagem" + cont);
    cont++
}

// 3 elementos para funcionar
// - iniciar uma variavel
// uma condição
// - incremento

"se não houver um incremento na variavel elepode ficar em loop infinito"

do{
    console.log("passagem" +cont)
    cont++
}while(cont == 0) // cont é igual a 0 somente na primeira passagem 

do{
    console.log("passagem" +cont)
    cont++
}while(cont < 0) // cont não é menor que 0, em outras estruturas nem passaria a primeira vez 




