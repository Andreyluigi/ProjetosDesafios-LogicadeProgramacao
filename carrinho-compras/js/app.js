let total = 0; 
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$--'
function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x </span>${nomeProduto}<span class="texto-azul">R$${valorUnitario}</span>
        </section>`

    total = total + preco;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$ ${total}`
    
    console.log(produto, quantidade, nomeProduto, valorUnitario)
}

function limpar(){
    let total = 0; 
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$--'
    document.getElementById('quantidade').value = '';
    document.getElementById('produto').value = 'Fone de ouvido - R$100';
}