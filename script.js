
//abrir e fechar o menu hamburguer
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagens/menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imagens/close.png";
    }
}

//quando o usuario diminuir a tela, o menu vira um hamburguer
function mostrar() {

    let mostre = document.querySelector(' .texto');
    if (mostre.style.display == 'none') {
        mostre.style.display = 'block';
    } else {
        mostre.style.display = 'none';
    }

   
}

//botao de retorno para o inicio
window.onload = function() {
    const mybutton = document.getElementById("scrollToTopBtn");

    // Quando o usuário rolar a página, verifica a posição da rolagem
    window.onscroll = function() {
        // Se o usuário rolar para baixo mais de 20px, o botão aparece
        if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
            mybutton.classList.add("show"); // Adiciona a classe 'show' para mostrar o botão
        } else {
            mybutton.classList.remove("show"); // Remove a classe 'show' para esconder o botão
        }
    };

    // Função para rolar até o topo de forma suave
    function scrollToTop() {
        window.scrollTo({
            top: 0,             // Vai até o topo da página
            behavior: "smooth"  // Rolagem suave
        });
    }

    // Expondo a função scrollToTop para o escopo global (a partir do HTML)
    window.scrollToTop = scrollToTop;
};


//escrita automatica de saudação
  function escreverTextoAutomatico(elementoId, texto, velocidade = 100) {
    const elemento = document.getElementById(elementoId);
    let index = 0;

    elemento.innerHTML = ""; // Limpa antes de começar

    function escrever() {
      if (index < texto.length) {
        elemento.innerHTML += texto[index] === "\n" ? "<br>" : texto[index];
        index++;
        setTimeout(escrever, velocidade);
      }
    }

    escrever();
  }

  document.addEventListener("DOMContentLoaded", function() {
    escreverTextoAutomatico("meuTexto", "Seja bem-vindo(a) ao meu mundo digital!", 100);
  });
    




