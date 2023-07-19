const imageButton = document.getElementById ('img-button');
const textButton = document.getElementById ('text-button');
const modeButton = document.getElementById ('mode-button');
const meme = document.getElementById ('image-meme');

const textAside = document.getElementById('aside-text');
const imageAside = document.getElementById('aside-img');
const bothAsides = document.getElementsByClassName('side-bar');

textButton.addEventListener('click' , ()=> hideTextAside());
imageButton.addEventListener('click' , ()=> hideImageAside());

 
const hideTextAside = () => {
    imageAside.classList.add ('hidden');
    textAside.classList.remove ('hidden');

}

const hideImageAside = () => {
    imageAside.classList.remove ('hidden');
    textAside.classList.add ('hidden');

}

const changeMode = () => {
    bothAsides[0].classList.add ('dark-aside');
    bothAsides[1].classList.add ('dark-aside');
}


// MEME IMAGE 

const urlInput = document.getElementById('insert-img-url');
const memeImg = document.getElementById('meme-img');

urlInput.addEventListener('input', ()=> backgroundChange())

const backgroundChange = () => {
    memeImg.style.backgroundImage = `url('${urlInput.value}')`


}


// FILTERS

const brightInput = document.getElementById("brightness-slider");
const contrastInput = document.getElementById('contrast-slider');
const opacityInput = document.getElementById('opacity-slider');
const blurInput = document.getElementById('blur-slider');
const grayscaleInput = document.getElementById('grayscale-slider');
const sepiaInput = document.getElementById('sepia-slider');
const hueInput = document.getElementById('hue-slider');
const saturationInput = document.getElementById('saturate-slider');
const invertInput = document.getElementById('invert-slider');

// console.log(brightInput.value);
// console.log(contrastInput.value);

const filters = () => {
    memeImg.style.filter = `brightness(${brightInput.value}) opacity(${opacityInput.value}) contrast(${contrastInput.value}%) blur(${blurInput.value}px) grayscale(${grayscaleInput.value}%) sepia(${sepiaInput.value}%) hue(${hueInput.value}deg) saturation(${saturationInput.value}deg) invert(${invertInput.value})`
}

brightInput.addEventListener('input', ()=>filters());
contrastInput.addEventListener('input', ()=>filters());
opacityInput.addEventListener('input', ()=>filters());
blurInput.addEventListener('input', ()=>filters());
grayscaleInput.addEventListener('input', ()=>filters());
sepiaInput.addEventListener('input', ()=>filters());
hueInput.addEventListener('input', ()=>filters());
invertInput.addEventListener('input', ()=>filters());

const colorPicker = document.getElementById("pick-background-color");
const colorName = document.getElementById("color-name");

const cambiarFondoMeme = () => {
   
    let colorElegido = colorPicker.value
    colorName.innerHTML = `${colorElegido}`;
}

colorPicker.addEventListener("input", () => cambiarFondoMeme())
