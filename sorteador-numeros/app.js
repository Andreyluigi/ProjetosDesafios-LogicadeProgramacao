function atualizaCampo(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function sortear(){
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;

    let listaNumeroSorteados = [];

    for (let i = 0; i < quantidade; i++) {
        let numeroSorteado = Math.floor(Math.random() * (ate - de + 1)) + parseInt(de);
        if (listaNumeroSorteados.includes(numeroSorteado)) {
            i--;
            continue;
        }
        listaNumeroSorteados.push(numeroSorteado);
    }

    atualizaCampo(resultado , `Números sorteados:  ${listaNumeroSorteados}`)
    console.log(quantidade, de, ate, listaNumeroSorteados);
}

