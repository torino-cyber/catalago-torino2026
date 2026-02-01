let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const container = document.getElementById("produtos");

produtos.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${p.nome}</h3>
    <p>${p.categoria} • ${p.estacao}</p>
    <button onclick="addCarrinho(${p.id}, 'grade')">
      Grade (${p.minGrade} un) - R$ ${p.precoGrade}
    </button>
    <button onclick="addCarrinho(${p.id}, 'caixa')">
      Caixa (${p.qtdCaixa} un) - R$ ${p.precoCaixa}
    </button>
  `;
  container.appendChild(card);
});

function addCarrinho(id, tipo){
  const produto = produtos.find(p => p.id === id);
  carrinho.push({ produto, tipo });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Produto adicionado ao carrinho");
}
