document.querySelector('button').onclick = mySlider;

let sliderImages = document.querySelectorAll('.slider-box img');
let k=0;

function mySlider() {
    if (k < sliderImages.length) {
        console.log(k);
        let img = sliderImages[k];
        img.style.display = 'block'
        img.classList.add('animate__animated', 'animate__rollIn')
        img.addEventListener('animationend', () => {
            img.classList.add('animate__animated', 'animate__rollOut', '--animate-delay', '2s')
        } );
        k++;
    }
    else {
        startNewSlider();
    }
}

function startNewSlider() {
    sliderImages.forEach((element) => {
        element.classList.remove('animate__animated', 'animate__rollOut', 'animate__rollIn');
        element.style.display = 'none';
        k = 0;
        mySlider();
    })
}