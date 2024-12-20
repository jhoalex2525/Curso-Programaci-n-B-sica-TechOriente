document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel'); // Selecciona todos los carruseles

    carousels.forEach((carousel) => {
        const track = carousel.querySelector('.carousel-track');
        const images = Array.from(track.children);
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        let currentIndex = 0;

        const updateCarousel = () => {
            const trackWidth = track.parentElement.clientWidth; // Usa el ancho del contenedor del carrusel
            track.style.transform = `translateX(-${currentIndex * trackWidth}px)`;
        };

        const moveToNext = () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        };

        const moveToPrev = () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        };

        const initializeCarousel = () => {
            const trackWidth = track.parentElement.clientWidth;
            images.forEach((image) => {
                image.style.width = `${trackWidth}px`; // Ajusta cada imagen al ancho del carrusel
            });
            updateCarousel(); // Asegura que el carrusel comience centrado
        };

        nextButton.addEventListener('click', moveToNext);
        prevButton.addEventListener('click', moveToPrev);
        window.addEventListener('resize', initializeCarousel);

        // Inicializa el carrusel al cargar la página
        initializeCarousel();
    });
});
