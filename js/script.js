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
let upButtonWhl = doc.getElementById('upwhl')
let downButtonWhl = doc.getElementById('downwhl')

let inPrice = 89
let wheelContent = parseInt(wheel.textContent)
let maxRadius = 21
let minRadius = 17

let maxTemp = 55
let minTemp = -30
let upButtonTmp = doc.getElementById('uptmp')
let downButtonTmp = doc.getElementById('downtmp')
temperatureContent = temperature.textContent
temperatureContent = parseInt(temperatureContent)

let maxVel = 255
let minVel = 0
let upButtonVlc = doc.getElementById('upvlct')
let downButtonVlc = doc.getElementById('downvlct')
let velocityContent = parseInt(velocity.textContent)
let batteryContent = parseInt(battery.textContent)

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
            price.textContent = inPrice + 6
        } else if(airCon.checked === true) {
            price.textContent = inPrice + 3
        }  else if(longVersion.checked === true){
            price.textContent = inPrice + 4
        }
        if(airCon.checked === false && longVersion.checked === false){
            price.textContent = inPrice
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



function upDownFunc(up, down, innum, min, max, indicontent, dist, distcontent){
    up.onclick = () => {
        innum = innum+1
        if (innum >= 80) {
            distcontent = distcontent - 2
            dist.textContent = distcontent
        }
        indicontent.textContent = innum 
            if (innum >= max) {
                up.onclick = null
            }
    }
    down.onclick = () => {
        innum =innum - 1 
        indicontent.textContent = innum
        if (innum <= min) {
            down.onclick = null
        }
        if (innum <= 0) {
            distcontent = distcontent - 10
            dist.textContent = distcontent
        }
    }
}
upDownFunc(upButtonVlc, downButtonVlc, velocityContent, minVel, maxVel, velocity, battery, batteryContent)
upDownFunc(upButtonTmp, downButtonTmp, temperatureContent, minTemp, maxTemp, temperature, battery, batteryContent)
upDownFunc(upButtonWhl, downButtonWhl, wheelContent, minRadius, maxRadius, wheel, null)
colorChanger(intBlack, intImageBlack)
colorChanger(intWhite, intImageWhite)
colorChanger(intBright, intImageBright)
longVersionAirCon(airCon, longVersion)


