function buscarDestino() {
    alert('Essa funcionalidade ainda não foi implementada!');
}

function verMais() {
    alert('Essa funcionalidade ainda não foi implementada!');
}

window.addEventListener('resize', function() {
    var sliderContainer = document.getElementById('slider-container');
    if (window.innerWidth <= 992) {
        sliderContainer.classList.remove('container');
        sliderContainer.classList.add('container-fluid');
    } else {
        sliderContainer.classList.remove('container-fluid');
        sliderContainer.classList.add('container');
    }
});