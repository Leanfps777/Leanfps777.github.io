let currentIndex = 0;
const intervalo = 3000; // Intervalo em milissegundos (3 segundos)

function moveSlide(direction) {
    const slidesInner = document.querySelector('.slides-inner');
    const items = document.querySelectorAll('.slides-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    slidesInner.style.transform = `translateX(${offset}%)`;
}

function autoPlay() {
    setInterval(() => {
        moveSlide(1); // Move para o próximo slide
    }, intervalo);
}

// Iniciar o autoplay quando a página carregar
window.onload = autoPlay;


