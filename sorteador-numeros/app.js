function atualizaCampo(tag, texto){
let campo = document.querySelector(tag)
campo.innerHTML = texto; 
}

function alterarStatusBotao() {
        let botao = document.getElementById('btn-reiniciar');
        if (botao.classList.contains('container__botao-desabilitado')) {
                botao.classList.remove('container__botao-desabilitado');
                botao.classList.add('container__botao');
        } else {
                botao.classList.remove('container__botao');
                botao.classList.add('container__botao-desabilitado');
        }
}

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let listaNumeroSorteados = [];

    if (quantidade>ate){
        alert("Você não pode inserir uma quantidade maior que o número limite!!")
        return
    }else if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return;
    }

    for (let i = 0; i < quantidade; i++) {
        let numeroSorteado = Math.floor(Math.random() * (ate - de + 1)) + parseInt(de);
        if (listaNumeroSorteados.includes(numeroSorteado)) {
            i--;
            continue;
        }
        listaNumeroSorteados.push(numeroSorteado);
    }
    let textoComFormatacao = `<label class="texto__paragrafo">Números sorteados: ${listaNumeroSorteados}</label>`;
    atualizaCampo('#resultado', textoComFormatacao);
    console.log(quantidade, de, ate, listaNumeroSorteados);
    alterarStatusBotao()
}

function reiniciar() {
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
        alterarStatusBotao();
}
