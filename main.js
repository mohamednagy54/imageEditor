// Catch HTML Element
let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");
let downloadBtn = document.getElementById("download");
let uploadBtn = document.getElementById("upload");
let img = document.getElementById("img");
let reset = document.querySelector("span");
let imgBox = document.querySelector(".img-box");

let canvas = document.getElementById("canvas");
const conText = canvas.getContext("2d");


function resetValue(){
    img.style.filter = "none"
    saturate.value = '100'
    contrast.value = '100'
    brightness.value = '100'
    sepia.value = '0'
    grayscale.value = '0'
    blur.value = '0'
    hueRotate.value = '0'

}


window.onload = () => {
    downloadBtn.style.display = "none"
    reset.style.display = "none"
    imgBox.style.display = "none";
}

uploadBtn.onchange = () => {
    resetValue()
    downloadBtn.style.display = "block"
    reset.style.display = "block"
    imgBox.style.display = "block";
    
    let file = new FileReader();
    file.readAsDataURL(uploadBtn.files[0]);
    
    file.onload = () => {
        img.src = file.result;

    }
    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        conText.drawImage(img,0,0,canvas.width,canvas.height)
        img.style.display = "none"
        
    }
}

let filters = document.querySelectorAll("ul li input");


filters.forEach(fliter => {
    fliter.addEventListener("input",function() {
        conText.filter = `
        
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px)
            hue-rotate(${hueRotate.value}deg)
        
        
        `

        conText.drawImage(img,0,0,canvas.width,canvas.height)

        
    })
    
})

downloadBtn.onclick = () => {
    downloadBtn.href = canvas.toDataURL();
    
}