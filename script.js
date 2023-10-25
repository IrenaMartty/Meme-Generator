// VARIABLES //

// FUNCIONES //
const $ = (selector) => document.querySelector(selector)

const downloadMeme = () => {
    domtoimage.toBlob($(".meme-template")).then((blob) => {
        saveAs(blob, "my-meme.png")
    })
}
const initializeProject = () => {
$("#download").addEventListener("click", downloadMeme)}

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
$("#mode-button-1").addEventListener("click", () => {
    const currentTheme = $("body").getAttribute("data-theme")
        if(currentTheme) {
            $("body").removeAttribute("data-theme", "light-theme")
            $(".button-light-mode").style.display = "none"
            $(".button-dark-mode").style.display = "block"
        
        } else {
            $("body").setAttribute("data-theme", "light-theme")
            $(".button-light-mode").style.display = "block"
            $(".button-dark-mode").style.display = "none"
        }
    })

$("#mode-button-2").addEventListener("click", () => {
        const currentTheme = $("body").getAttribute("data-theme")
            if(currentTheme) {
                $("body").removeAttribute("data-theme", "light-theme")
                $(".button-light-mode").style.display = "none"
                $(".button-dark-mode").style.display = "block"
            
            } else {
                $("body").setAttribute("data-theme", "light-theme")
                $(".button-light-mode").style.display = "block"
                $(".button-dark-mode").style.display = "none"
            }
        })

// <!-- TEXT PANEL -->
// <!-- TOP TEXT --> <!-- BOTTOM TEXT -->

$("#insert-top-text").addEventListener("input", (e) => {
    $("#top-text").textContent = e.target.value
})

$("#checkbox-1").addEventListener("input", () => {
    $("#top-text").classList.toggle("hidden")
} )

$("#insert-bottom-text").addEventListener("input", (e) => {
    $("#bottom-text").textContent = e.target.value
})

$("#checkbox-3").addEventListener("input", () => {
    $("#bottom-text").classList.toggle("hidden")
} )

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

$("#button-align-left").addEventListener("click", (e) => {
    $("#top-text").style.textAlign = "left"
    $("#bottom-text").style.textAlign = "left"
})

$("#button-align-center").addEventListener("click", (e) => {
    $("#top-text").style.textAlign = "center"
    $("#bottom-text").style.textAlign = "center"
})

$("#button-align-right").addEventListener("click", (e) => {
    $("#top-text").style.textAlign = 'right'
    $("#bottom-text").style.textAlign = 'right'
})
// <!-- FONT COLOR -->


$("#pick-font-color").addEventListener("input", (e)=> {
    $("#top-text").style.color = e.target.value
    $("#bottom-text").style.color = e.target.value
})
// <!-- TEXT BACKGROUND COLOR -->

const textBackgroundColor = document.getElementById("pick-text-background-color")
textBackgroundColor.addEventListener("input", (e)=> {
    const topText = document.getElementById("top-text")
    const bottomText = document.getElementById("bottom-text")
    topText.style.backgroundColor = e.target.value
    bottomText.style.backgroundColor = e.target.value
})
 
document.getElementById("checkbox").addEventListener("click", () => {
    const topText = document.getElementById("top-text")
    const bottomText = document.getElementById("bottom-text")
    
    if (topText.style.backgroundColor === "transparent") {

      topText.style.backgroundColor = "white"
      bottomText.style.backgroundColor = "white"
    } else {
      
      topText.style.backgroundColor = "transparent"
      bottomText.style.backgroundColor = "transparent"
    }
  });
// <!-- CONTOUR -->

$("#button-contour-light").addEventListener ('click' , () => {
    $(".top-text").classList.add("text-contour-light")
    $(".bottom-text").classList.add("text-contour-light")
    $(".top-text").classList.remove("text-contour-dark")
    $(".bottom-text").classList.remove("text-contour-dark")
})

$("#button-contour-dark").addEventListener ('click' , () => {
    $(".top-text").classList.add("text-contour-dark")
    $(".bottom-text").classList.add("text-contour-dark")
    $(".top-text").classList.remove("text-contour-light")
    $(".bottom-text").classList.remove("text-contour-light")
})

$("#button-contour-none").addEventListener ('click' , () => {
    $(".top-text").classList.remove("text-contour-dark", "text-contour-light")
    $(".bottom-text").classList.remove("text-contour-dark", "text-contour-light")
})

// <!-- SPACING -->
$("#spacing").addEventListener("input", (e) => {
    $("#top-text").style.paddingTop = `${e.target.value}px`
    $("#top-text").style.paddingBottom = `${e.target.value}px`
    $("#bottom-text").style.paddingTop = `${e.target.value}px`
    $("#bottom-text").style.paddingBottom = `${e.target.value}px`
})    

// <!-- LINE SPACING -->
$("#select-spacing").addEventListener("input", (e) => {
    $("#top-text").style.lineHeight = e.target.value
    $("#bottom-text").style.lineHeight = e.target.value
})    

// <!-- IMAGE PANEL -->

// <!-- INSERT URL -->
const urlInput = document.getElementById('insert-img-url');
const memeImg = document.getElementById('meme-image');

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

// const filters = () => {
//     $(".meme-template").style.filter = `brightness(${$("#brightness-slider").value}) opacity(${$("#opacity-slider").value}) contrast(${$("#contrast-slider").value}%) blur(${$("#blur-slider").value}px) grayscale(${$("#grayscale-slider").value}%) sepia(${$("#sepia-slider").value}%) hue(${$("#hue-slider").value}deg) saturation(${$("#saturate-slider").value}%) invert(${$("#invert-slider").value})`
// }

// $("#brightness-slider").addEventListener("input", filters)
// $("#opacity-slider").addEventListener("input", filters)
// $("#contrast-slider").addEventListener("input", filters)
// $("#blur-slider").addEventListener("input", filters)
// $("#grayscale-slider").addEventListener("input", filters)
// $("#sepia-slider").addEventListener("input", filters)
// $("#hue-slider").addEventListener("input", filters)
// $("#saturate-slider").addEventListener("input", filters)
// $("#invert-slider").addEventListener("input", filters)




// <!-- FILTERS -->


const filters = () => {
    $(".meme-img").style.filter = `blur(${$("#blur-slider").value}px) grayscale(${$("#grayscale-slider").value}%)` 
}
$("#blur-slider").addEventListener("input", filters)
$("#grayscale-slider").addEventListener("input", filters)


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