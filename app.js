//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// ====================================
// CHALLENGE: Amigo Secreto
// Desafio de projeto da ONE
// Por: Eduardo Bressan
// ====================================

// ------------------------------------
// > Variáveis
// ------------------------------------
let listaAmigosArray = [];
let listaAmigosHtml = document.getElementById("listaAmigos");


// ----------------------------------------
// > Função para adicionar amigos à lista
// ----------------------------------------
function adicionarAmigo(){
    let nomeAmigo = document.getElementById("amigo").value;

    // Verifica se o campo está vazio ou contém apenas espaços
    // Caso esteja, exibe um alerta
    if (nomeAmigo == "" || nomeAmigo == " " || nomeAmigo == null) {
        alert("Por favor, insira um nome.");
    }
    // Caso contrário, adiciona o nome escrito para a lista de amigos
    else {
        listaAmigosArray.push(nomeAmigo);
        listaAmigosHtml.innerHTML += `<li>${nomeAmigo}</li>`;
        exibirListaAmigos(listaAmigosArray);
    }
    // Limpa o campo de input após verificações.
    limparCampo();
    
}

// -----------------------------------------------------------------
// > Função para exibir a lista de Amigos no console (console.log)
// -----------------------------------------------------------------
function exibirListaAmigos(listaAmigos){
    console.log("Lista de amigos:");
    tamanhoLista = listaAmigos.length;
    posicao = 0;

    while (posicao < tamanhoLista) {
        console.log(listaAmigos[posicao]);
        posicao++;
    }
}

// ---------------------------------------
// > Função para limpar o campo de input
// ---------------------------------------
function limparCampo() {
    campo = document.getElementById("amigo");   // Associa o campo de input à variável
    campo.value = "";                           // Limpa o campo de input
}

// --------------------------------------
// > Função para sortear amigo secreto
// --------------------------------------
function sortearAmigo() {
    console.log("Sorteando amigo secreto...");
    let tamanhoListaAmigos = listaAmigosArray.length;

    if (tamanhoListaAmigos === 0) {
        alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
        return;
    }
    else {
        console.log("Entrando na Lógico do sorteio...");
        let posicaoSorteada = Math.floor(Math.random() * listaAmigosArray.length);
        let amigoSorteado = listaAmigosArray[posicaoSorteada];
        let textoAmigoSorteado = `O amigo secreto sorteado é: ${amigoSorteado}`;
        document.getElementById("resultado").innerHTML = textoAmigoSorteado;
        limparCampo();
    }
}