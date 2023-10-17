// VARIABLES //

// FUNCIONES //
const $ = (selector) => document.querySelector(selector)

const downloadMeme = () => {
    domtoimage.toBlob($("#download-meme")).then((blob) => {
        saveAs(blob, "my-meme.png")
    })
}

const addColor = (selector, color) => $(selector).style.color = color

const hideElement = (selector) => $(selector).classList.add("visibility--hidden")
const showElement = (selector) => $(selector).classList.remove("visibility--hidden")


// EVENTOS //


// <!-- TEXT-IMAGE SWITCH BUTTONS -->
$("#text-button").addEventListener ('click' , () => {
    $("#aside-text").classList.remove("hidden")
    $("#aside-img").classList.add("hidden")
})

$("#img-button").addEventListener ('click' , () => {
    $("#aside-img").classList.remove("hidden")
    $("#aside-text").classList.add("hidden")
})

// <!-- SIDE BAR -->
$(".x-button-text").addEventListener("click", () => {
    $("aside").style.display = "none"
})

$(".x-button-img").addEventListener("click", () => {
    $("aside").style.display = "none"
    
}) 
$("#text-button").addEventListener("click", () => {
    $("aside").style.display = "block"
})


$("#img-button").addEventListener("click", () => {
    $("aside").style.display = "block"
})

// <!-- DARK MODE-LIGHT MODE SWITCH BUTTON -->
$("#mode-button").addEventListener("click", () => {
    const currentTheme = $("body").getAttribute("data-theme")
        if(currentTheme) {
            $("body").removeAttribute("data-theme", "light-theme")
            
        } else {
            $("body").setAttribute("data-theme", "light-theme")

        }
      
    })
// <!-- TEXT PANEL -->
// <!-- TOP TEXT --> <!-- BOTTOM TEXT -->

$("#insert-top-text").addEventListener("input", (e) => {
    $("#top-text").textContent = e.target.value
})

$("#insert-bottom-text").addEventListener("input", (e) => {
    $("#bottom-text").textContent = e.target.value
})

// <!-- FONT -->
// <!-- FONT FAMILY -->
$("#select-font").addEventListener("input", (e) => {
    $("#top-text").style.fontFamily = e.target.value
    $("#bottom-text").style.fontFamily = e.target.value
})
    
// <!-- FONT SIZE -->

$("#font-size").addEventListener("input", (e) => {
    $("#top-text").style.fontSize = `${e.target.value}px`
    $("#bottom-text").style.fontSize = `${e.target.value}px`
})

$("#button-align-left").addEventListener("input", (e) => {
    $("#top-text").style.textAlign = ("left")
    $("#bottom-text").style.textAlign = ("left")
})

$("#button-align-center").addEventListener("input", (e) => {
    $("#top-text").style.textAlign = "center"
    $("#bottom-text").style.textAlign = "center"
})

$("#button-align-right").addEventListener("input", (e) => {
    $("#top-text").style.textAlign = 'right'
    $("#bottom-text").style.textAlign = 'right'
})


// <!-- IMAGE PANEL -->

// <!-- INSERT URL -->
const urlInput = document.getElementById('insert-img-url');
const memeImg = document.getElementById('meme-img');

urlInput.addEventListener('input', ()=> backgroundChange())

const backgroundChange = () => {
    memeImg.style.backgroundImage = `url('${urlInput.value}')`

}

// <!-- BACKGROUND -->
$("#pick-background-color").addEventListener("input", (e)=> {
    $(".meme-image").style.backgroundColor = e.target.value
})

$("#select-blend-mode").addEventListener("input", (e)=> {
    $(".meme-image").style.backgroundBlendMode = e.target.value
})

// <!-- FILTERS -->

const filters = () => {
    $(".meme-image").style.filter = `brightness(${$("#brightness-slider").value}) opacity(${$("#opacity-slider").value}) contrast(${$("#contrast-slider").value}%) blur(${$("#blur-slider").value}px) grayscale(${$("#grayscale-slider").value}%) sepia(${$("#sepia-slider").value}%) hue(${$("#hue-slider").value}deg) saturation(${$("#saturate-slider").value}%) invert(${$("#invert-slider").value})`
}

$("#brightness-slider").addEventListener("input", filters)
$("#opacity-slider").addEventListener("input", filters)
$("#contrast-slider").addEventListener("input", filters)
$("#blur-slider").addEventListener("input", filters)
$("#grayscale-slider").addEventListener("input", filters)
$("#sepia-slider").addEventListener("input", filters)
$("#hue-slider").addEventListener("input", filters)
$("#saturate-slider").addEventListener("input", filters)
$("#invert-slider").addEventListener("input", filters)

console.log(filters)

$("#button-default").addEventListener("click", () => {
    $("#brightness-slider").value = "1"
    $("#opacity-slider").value = "1"
    $("#contrast-slider").value = "0"
    $("#blur-slider").value = "0"
    $("#grayscale-slider").value = "0"
    $("#sepia-slider").value = "0"
    $("#hue-slider").value = "0"
    $("#saturate-slider").value = "0"
    $("#invert-slider").value = "0"
    $(".meme-image").style.filter = "none"
})




