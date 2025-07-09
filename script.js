
// Lista de produ// Sempre rolar para o topo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  iniciarInatividade(); // inicia o controle de inatividade
});

// Função de inatividade
function iniciarInatividade() {
  let inatividadeTimer;

  function resetarTimer() {
    clearTimeout(inatividadeTimer);
    inatividadeTimer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 10000); // 30 segundos
  }

  // Eventos que resetam o timer
  ['mousemove', 'keydown', 'scroll', 'touchstart'].forEach(evento => {
    document.addEventListener(evento, resetarTimer);
  });

  resetarTimer(); // iniciar o contador
}
tos
const produtos = [
  {
    nome: 'Bicicleta Urbana Laranja',
    preco: 2399,
    imagem: 'images/bike1.jpg'
  },
  {
    nome: 'Bicicleta Preta',
    preco: 2399,
    imagem: 'images/bike2.jpg'
  },
  {
    nome: 'Bicicleta Verde',
    preco: 2399,
    imagem: 'images/bike3.jpg'
  },
  {
    nome: 'Bicicleta Cinza',
    preco: 2399,
    imagem: 'images/bike4.jpg'
  }
];

// Carregar produtos na página
const grid = document.querySelector('.produtos-grid');

produtos.forEach(produto => {
  const card = document.createElement('div');
  card.className = 'produto';
  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}" />
    <h3>${produto.nome}</h3>
    <p>R$ ${produto.preco}</p>
    <button>Comprar</button>
  `;
  grid.appendChild(card);
});
// Scroll suave para a seção de acessórios ao clicar na seta
document.addEventListener("DOMContentLoaded", () => {
  const seta = document.querySelector(".seta-baixo");
  const acessorios = document.getElementById("acessorios");

  if (seta && acessorios) {
    seta.addEventListener("click", (e) => {
      e.preventDefault();
      acessorios.scrollIntoView({
        behavior: "smooth"
      });
    });
  }
});
// Scroll automático para o topo após 30s de inatividade
let inatividadeTimer;

function resetarTimer() {
  clearTimeout(inatividadeTimer);
  inatividadeTimer = setTimeout(() => {
    document.querySelector(".hero").scrollIntoView({
  behavior: 'smooth'
});

  }, 30000); // 30.000 milissegundos = 30 segundos
}

// Eventos que contam como atividade
['mousemove', 'keydown', 'scroll', 'touchstart'].forEach(evento => {
  document.addEventListener(evento, resetarTimer);
});

// Inicia o timer ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  resetarTimer();
});


