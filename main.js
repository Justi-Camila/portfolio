// Seleciona o botão de navegação e a lista pelo id
const navegacaoMenu = document.getElementById('navegacao-menu');
const navegacaoLista = document.getElementById('navegacao-lista');

navegacaoMenu.addEventListener('click', () => {
    // Toda vez que o botão é clicado, ele alterna a classe 'active' na lista de navegação.
    navegacaoLista.classList.toggle('active');
});

// Simula o envio do formulário
document.querySelector("form").addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Formulário enviado com sucesso!");
});