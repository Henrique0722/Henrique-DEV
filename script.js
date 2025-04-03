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
const mybutton = document.getElementById("scrollToTopBtn");

// Quando o usuário rolar, verificar a posição da rolagem
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.classList.add("show"); // Adiciona a classe 'show' quando a rolagem é maior que 20px
    } else {
        mybutton.classList.remove("show"); // Remove a classe 'show' quando a rolagem é menor ou igual a 20px
    }
};

// Função para rolar até o topo de forma suave
function scrollToTop() {
    window.scrollTo({
        top: 0,             // Vai até o topo da página
        behavior: "smooth"  // Rolagem suave
    });
}





