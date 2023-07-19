var carousel = document.querySelector('.carousel');
var carouselItems = document.querySelectorAll('.carousel-item');
var currentIndex = 0;

function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

const ativaMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('.navegation .searching')

ativaMenu.addEventListener('click', () => {
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();

    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    if (!filter) {
        ul.style.display = "none";
        return;
    }
    ul.style.display = "block";

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}
// Ocultar a lista quando a página for carregada
document.addEventListener('DOMContentLoaded', function () {
    var ul = document.getElementById("myUL");
    ul.style.display = "none";
});