"o que fazer com java script"

"eventos"

// utilizados quando algo acontece na pagina 
// carregamento da pagina 
// clique do mouse
// envio de informações

"ler e escrever"

// é posivel escrever me conteudo de elemtnos em html e da mesma forma ler os seus valores

"validar dados"

// é possivel validar informações antes mesmo delas srem enviadas ao servidor

"sintaxe"

// ela é definida pela tag HTML 

{/* <script> 

</script> */}

"utilização"

// em um evento inline 
// diretamente no cabeçalho ou corpo da pagina
// em um arquivo externo

"sintaze e formas de utilização"
// <tag evento="instrução JS"></tag>

// sintaze e formas de utilização
// <tag evento="instrução JS"></tag>

{/* <button onclick="alert('ola mundo')"> Boas Vindas </button> */};

{/* <html>
    <head>
        <script>
            alert('Ola Mundo')
        </script>
    </head>
</html> */}

"Arquivo JVSCP externo" - "html"

{/* <html>
    <head>
    </head>
    <body>
        <script type="text/javacript" src="js/script.js"></script>
    </body>
</html> */}

"JVSCP"

alert('ola mundo!');

"Sintaxe e Formas de Utilizaçaõ"

//imprime o resultado no documento

document.write("Esta é a nossa primeira impressão na tela");

//console.log imprime o resultado no console do navegador

console.log("Está é a nossa pirmeira impressão no console");

"Variaveis e Tipos de Dados"

// Em jvsp as variaveis não são tipadaslogo, basta declara-las utilizando uma das palavras reservadas como let 
// O jvscp é CASE SENSITIVE, ele faz diferenciação entre letras maiusculas e minusculas
// a forma dedeclaração das variaveis utiliada no mercado é o CAMEL CASE,
// onde a primeira palavra começa começa com letra minuscula e as demais com letra maiuscula sem espaço entre elas

// Em jvscp armazenar valores é fundamental para resolver problemas por meio da programação. 
// Para isso criamos pequenos espaços na memoria, que podem ser mutaveis ou imutaveis
// para guardar valores mutaveis,usamos varivaveis.
// guardar valores é util para resolver problemas por meio da programação
// let cria um espaço de memoria que pode ser modificado ao  longo do programa

let nome; //cria valor com valorindefinido
let disciplina = null; //cria variavel vazia
let texto = "este é um exemplo" //cria uma variavel com um valor

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

"Caixas de Mensagem"

// Em js as caixas da mensagens são usadas para apresentar informações para o usuário.

alert("ola, sou uma caixa aberta");

"Console"

// O console em js é uam ferramenta que permite que os desenvolvedores vizualizarem mensagens, erros e informações, enauqnaot estão trabalhando em um programa
// É uma area no nav ou na IDE que exibe mensagens e saidas geradas pelo codigo
// O console pode ser acessado por meio do navegador da web, clicnado no botão direito do mouse na pagina selecionando "inspecionar elemento" ou teclando f12
// No ambiente de desenvolvimento integrado, o console geralmente esta localizado na parte inferior da janela do IDE
// O console permite que os devs vejam as infos que estão sendo geradas pelo cod em tempo real
// ajuda a depurar problemas e a entender como o codigo esta funcionando
// É comumente usado para exibit valores de variaveis, mensagens e depuração e erros durante a exec do programam

let mensagem = "ola mundo"
console.log(mensagem);

// aqui uma variavel é declarada e atribuida ao valor de texto que contem a mensagem "Ola mundo"
// Em seguida, a mensagem é exibida no console usadno o metodo concole.log()
// Esse metodo console.log é usado para exibir mensagens de depuração e saida de dados no connsole
// Ele aceita um ou mais argumentos separados por virgulas e exibe esses argumnetos no console




