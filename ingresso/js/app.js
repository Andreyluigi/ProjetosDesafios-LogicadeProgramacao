function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = document.getElementById('qtd').value;
    
    if (tipo.value == 'pista') {
        comprarPista(qtd);
        }
    if (tipo.value == 'superior'){
        comprarSuperior(qtd)
    }
    if (tipo.value == 'inferior'){
        comprarInferior(qtd)
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}
function comprarInferior(qtd){
    let qtdinferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdinferior){
        alert('Quantidade indisponível para tipo Inferior!!');
    }else{
        qtdinferior = qtdinferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdinferior;
        alert('Compra realizada com sucesso!')
    }
}
function comprarSuperior(qtd){
    let qtdsuperior = parseInt(document.getElementById('qtd-superior').textContent)
        if (qtd > qtdsuperior) {
        alert('Quantidade indisponível para tipo Superior!');
        }else{
            qtdsuperior = qtdsuperior - qtd
            document.getElementById('qtd-superior').textContent = qtdsuperior;
            alert('compra realizada com sucesso')
        }
    }