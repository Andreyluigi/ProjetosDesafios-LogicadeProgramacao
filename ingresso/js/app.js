    let cadeiraInf = 400;
    let cadeiraSup = 200;
    let pista = 100;

function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    console.log(tipoIngresso, quantidade)
    // if (cadeiraInf>=quantidade && cadeiraInf>0){
    //     alert(`Voce comprou ${quantidade} ingresso(s)`)
    //     cadeiraInf = cadeiraInf - quantidade;
    //     console.log(cadeiraInf)
    // }
    // else if (cadeiraSup >= quantidade && cadeiraSup > 0) {
    //     alert(`Voce comprou ${quantidade} ingresso(s)`)
    //     cadeiraSup = cadeiraSup - quantidade;
    //     console.log(cadeiraSup)
    // }
    // else if (pista >= quantidade && pista > 0) {
    //     alert(`Voce comprou ${quantidade} ingresso(s)`)
    //     pista = pista - quantidade;
    //     console.log(pista)
    // }
    if (tipoIngresso == 'inferior'){
     if (cadeiraInf>=quantidade && cadeiraInf>0){
         alert(`Voce comprou ${quantidade} ingresso(s)`)
        cadeiraInf = cadeiraInf - quantidade;
         console.log(cadeiraInf)
        }
    }else {
         alert("Quantidade de ingressos indisponível!")
    }
    if (tipoIngresso == 'superior'){
        if (cadeiraSup >= quantidade && cadeiraSup > 0) {
            alert(`Voce comprou ${quantidade} ingresso(s)`)
            cadeiraSup = cadeiraSup - quantidade;
            console.log(cadeiraSup)
        }
    } else {
        alert("Quantidade de ingressos indisponível!")
    }
    if (tipoIngresso == 'pista'){
        if (pista >= quantidade && pista > 0){
            alert(`Voce comprou ${quantidade} ingresso(s)`)
            pista = pista - quantidade;
            console.log(pista)
        }
    } else {
        alert("Quantidade de ingressos indisponível!")
    }
}