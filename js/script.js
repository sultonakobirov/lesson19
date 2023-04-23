let doc = document
let extIntImage = doc.querySelector('.image')
let extIntChanger = doc.querySelector('.ext-int-check')
let intImageBlack = './images/interiorblack.jpg'
let intImageWhite = './images/interiorwhite.webp'
let intImageBright = './images/interiorbright.jpg'
let extImage = './images/exterior.png'
let interior = doc.getElementById('indicators-int')
let exterior = doc.getElementById('indicators-ext')
let indicatorCont = doc.getElementById('indicators-cont')
let intBlack = doc.getElementById('black')
let intWhite = doc.getElementById('white')
let intBright = doc.getElementById('bright')
let price = doc.getElementById('price')
let battery = doc.getElementById('battery')
let longVersion = doc.getElementById('long-version')


//ext-int view changer
let extIntFunction = (flex, none)=>{
    flex.style.display = 'flex'
    none.style.display = 'none'
}
extIntChanger.addEventListener('click', () => {
    if(extIntChanger.checked === true){
        extIntImage.setAttribute('src', extImage)
        extIntFunction(exterior, interior)
    }else{
        extIntImage.src = intImageBlack
        interior.style.display = 'flex'
        exterior.style.display = 'none'
        indicatorCont.style.gap = '80px'
        extIntFunction(interior, exterior)
    }
})


//Interior 
intBlack.onclick = () => {
        extIntImage.src = intImageBlack
}   
intWhite.onclick = () => {
    extIntImage.src = intImageWhite
}
intBright.onclick = () => {
    extIntImage.src = intImageBright
}
longVersion.onclick = () => {
    if(longVersion.checked == true){
        price.textContent = '94, 990'
    }else{
        price.textContent = price.value
    }
}

