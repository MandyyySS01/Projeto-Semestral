let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let totalCarrinho = calcularTotal();

// Adiciona item ao carrinho e armazena no localStorage
function adicionarAoCarrinho(nome, preco, urlImagem) {
  const novoItem = { nome, preco, urlImagem };
  carrinho.push(novoItem);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(`${nome} foi adicionado ao carrinho!`);
}

// Calcula o total do carrinho
function calcularTotal() {
  return carrinho.reduce((soma, item) => soma + item.preco, 0);
}

// Atualiza a visualização do carrinho na página do carrinho
function atualizarPaginaCarrinho() {
  const elementoCarrinho = document.getElementById('carrinho');
  const elementoTotal = document.getElementById('total');

  if (carrinho.length === 0) {
    elementoCarrinho.innerHTML = '<p>Seu carrinho está vazio.</p>';
  } else {
    elementoCarrinho.innerHTML = '';
    carrinho.forEach((item, indice) => {
      const itemElemento = document.createElement('div');
      itemElemento.classList.add('item-carrinho');
      itemElemento.innerHTML = `
        <img src="${item.urlImagem}" alt="${item.nome}" class="imagem-item-carrinho">
        <div>
          <p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>
          <button onclick="removerDoCarrinho(${indice})">Remover</button>
        </div>`;
      elementoCarrinho.appendChild(itemElemento);
    });
  }
  elementoTotal.textContent = totalCarrinho.toFixed(2);
}

// Remove item do carrinho e atualiza no localStorage
function removerDoCarrinho(indice) {
  totalCarrinho -= carrinho[indice].preco;
  carrinho.splice(indice, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarPaginaCarrinho();
}

// Inicializa a página do carrinho, se estivermos em carrinho.html
if (window.location.pathname.includes('carrinho.html')) {
  atualizarPaginaCarrinho();
}
