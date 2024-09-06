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

