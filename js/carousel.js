class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static items = [
        new Carousel('img/imagem_1.jpg', 'Esta é a nova Ranger Ford 2022. Verifique novidades.', 'lancamento.html'),
        new Carousel('img/imagem_2.jpg', 'Ford a nossa história', '#'),
        new Carousel('img/imagem_3.jpg', 'Nova Ford Bronco Sport 2022', 'lancamento.html')
    ];

    static currentIndex = 0;
    static intervalId = null;

    static start() {
        Carousel.next();
        Carousel.intervalId = setInterval(Carousel.next, 2000);
    }

    static next() {
        const current = Carousel.items[Carousel.currentIndex];

        const carouselDiv = document.getElementById('carousel');
        const carouselTitleDiv = document.getElementById('carousel-title');

        if (carouselDiv && carouselTitleDiv) {
    
            carouselDiv.style.backgroundImage = `url('${current.image}')`;
            carouselDiv.style.backgroundRepeat = 'no-repeat';
            carouselDiv.style.backgroundPosition = 'center';
            carouselDiv.style.backgroundSize = 'contain';

            carouselTitleDiv.innerHTML = `<a href="${current.url}">${current.title}</a>`;
        }

        Carousel.currentIndex = (Carousel.currentIndex + 1) % Carousel.items.length;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    Carousel.start();
});