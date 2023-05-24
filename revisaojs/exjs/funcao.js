"Função"

// precismao controlaso momento e as condições para as estruturas serem executadas

function nomeFuncao(arg1, arg2){
    return arg1 + arg2
}

console.log(nomeFuncao(5,4));

// exemplo de função sem argumento

function avisar(){
    alert("esta é uma função")
}
avisar()

"DOM"

// é um modelo de doc carregado pelo navegador
//  este doc é representado atravez de uma arvore de nós
// cad um desses nós representa uma parte do documento
// o dom define um padrão para acessar doc html

// o dome uma das apis mais usadas na web, pq ele permite que cada codigo rolando no nav acesse enterajea com cada nó
// os nós podem ser adicionados aos nós para serem disparados quanso um dado evento acontecer

// podemos acesasr e manipular as informações as informações e atributos dos nossos elementos html pelo id 
// pela classe, pelo name e pelo nome da tag.
// sendo que a opção mais usada é pelo ID (por ser unico)
// os demais usamos quando queremos percorrer ou coletar varias informações

"usando id"

// para acessarmos o id usamos a sintaxe

document.getElementsById("nome").innerHTML = "Victoria"

// document se refere a pagina html;
// getElementById() recupera um elemneto pelo seu ID;
// innerHTML utilizamos para alterar/inserir o conteudo do elemeneto (tag) de marcação

// 