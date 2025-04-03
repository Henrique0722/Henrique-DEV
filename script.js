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

function mostrar() {

    let mostre = document.querySelector(' .texto');
    if (mostre.style.display == 'none') {
        mostre.style.display = 'block';
    } else {
        mostre.style.display = 'none';
    }

   
}
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





