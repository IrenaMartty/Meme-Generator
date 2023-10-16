// VARIABLES //

// FUNCIONES //
const $ = (selector) => document.querySelector(selector)

const downloadMeme = () => {
    domtoimage.toBlob($(".download-meme")).then((blob) => {
        saveAs(blob, "my-meme.png")
    })
}
const hideElement = (selector) => $(selector).classList.add("visibility--hidden")
const showElement = (selector) => $(selector).classList.remove("visibility--hidden")

// EVENTOS //

// TEXT-IMAGE SWITCH BUTTONS

$("#text-button").addEventListener ('click' , () => {
    $("#aside-text").classList.remove("hidden")
    $("#aside-img").classList.add("hidden")
})

$("#img-button").addEventListener ('click' , () => {
    $("#aside-img").classList.remove("hidden")
    $("#aside-text").classList.add("hidden")
})

// MEME IMAGE UPLOAD

const urlInput = document.getElementById('insert-img-url');
const memeImg = document.getElementById('meme-img');

urlInput.addEventListener('input', ()=> backgroundChange())

const backgroundChange = () => {
    memeImg.style.backgroundImage = `url('${urlInput.value}')`


}

// DARK MODE-LIGHT MODE SWITCH BUTTON

$("#mode-button").addEventListener("click", () => {
    const currentTheme = $("body").getAttribute("data-theme")
        if(currentTheme) {
            $("body").removeAttribute("data-theme", "light-theme")
            
        } else {
            $("body").setAttribute("data-theme", "light-theme")

        }
      
    })
    
// // FILTERS

// const brightInput = document.getElementById("brightness-slider");
// const contrastInput = document.getElementById('contrast-slider');
// const opacityInput = document.getElementById('opacity-slider');
// const blurInput = document.getElementById('blur-slider');
// const grayscaleInput = document.getElementById('grayscale-slider');
// const sepiaInput = document.getElementById('sepia-slider');
// const hueInput = document.getElementById('hue-slider');
// const saturationInput = document.getElementById('saturate-slider');
// const invertInput = document.getElementById('invert-slider');

// // console.log(brightInput.value);
// // console.log(contrastInput.value);

// const filters = () => {
//     memeImg.style.filter = `brightness(${brightInput.value}) opacity(${opacityInput.value}) contrast(${contrastInput.value}%) blur(${blurInput.value}px) grayscale(${grayscaleInput.value}%) sepia(${sepiaInput.value}%) hue(${hueInput.value}deg) saturation(${saturationInput.value}deg) invert(${invertInput.value})`
// }

// brightInput.addEventListener('input', ()=>filters());
// contrastInput.addEventListener('input', ()=>filters());
// opacityInput.addEventListener('input', ()=>filters());
// blurInput.addEventListener('input', ()=>filters());
// grayscaleInput.addEventListener('input', ()=>filters());
// sepiaInput.addEventListener('input', ()=>filters());
// hueInput.addEventListener('input', ()=>filters());
// invertInput.addEventListener('input', ()=>filters());

// const colorPicker = document.getElementById("pick-background-color");
// const colorName = document.getElementById("color-name");

// const cambiarFondoMeme = () => {
   
//     let colorElegido = colorPicker.value
//     colorName.innerHTML = `${colorElegido}`;
// }

// colorPicker.addEventListener("input", () => cambiarFondoMeme())


