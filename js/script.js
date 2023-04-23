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
let airCon = doc.getElementById('air-con')
let intColors = doc.querySelector('.int-colors')
let velocity = doc.getElementById('vlct')
let wheel = doc.getElementById('whl-rds')
let temperature = doc.getElementById('tmprtr')
let upButton = doc.querySelectorAll('.up')
let downButton = doc.querySelectorAll('.down')

//ext-int view changer
let extIntFunction = (flex, none)=>{
    flex.style.display = 'flex'
    none.style.display = 'none'
}
//interior color changer
function colorChanger(button, image){
    button.onclick = () =>{
        extIntImage.src = image
    }
}
//equipment 
function longVersionAirCon(airCon, longVersion){
    onclick = () =>{
        if (airCon.checked === true && longVersion.checked === true) {
            price.textContent = "95, 990"
        } else if(airCon.checked === true) {
            price.textContent = "92, 990"
        }  else if(longVersion.checked === true){
            price.textContent = "93, 990"
        }
        if(airCon.checked === false && longVersion.checked === false){
            price.textContent = "89, 990"
        }
    }
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
upDown(upButton, downButton, wheel)
colorChanger(intBlack, intImageBlack)
colorChanger(intWhite, intImageWhite)
colorChanger(intBright, intImageBright)
longVersionAirCon(airCon, longVersion)


