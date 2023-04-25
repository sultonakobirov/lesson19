let doc = document
let imgCont = doc.getElementById('img-cont')
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
let maxRadius = 20
let minRadius = 18
let maxTemp = 54
let minTemp = -29
let upButtonTmp = doc.getElementById('uptmp')
let downButtonTmp = doc.getElementById('downtmp')
temperatureContent = temperature.textContent
temperatureContent = parseInt(temperatureContent)
let maxVel = 254
let minVel = 1
let upButtonVlc = doc.getElementById('upvlct')
let downButtonVlc = doc.getElementById('downvlct')
let velocityContent = parseInt(velocity.textContent)
let batteryContent = parseInt(battery.textContent)

//ext-int config view changer
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
//exterior interoir image changer 
extIntChanger.addEventListener('click', () => {
    if(extIntChanger.checked === true){
        extIntImage.setAttribute('src', extImage)
        imgCont.setAttribute("style","height:500px");
        extIntFunction(exterior, interior)
    }else{
        extIntImage.src = intImageBlack
        interior.style.display = 'flex'
        exterior.style.display = 'none'
        indicatorCont.style.gap = '80px'
        imgCont.setAttribute("style","height:760px");
        extIntFunction(interior, exterior)
    }
})
//you will know how velocity temperature affects on power reserve of the car 
function upDownFunc(up, down, innum, min, max, indicontent, dist, distcontent){
    up.onclick = () => {
        indicontent.textContent = innum 
            if (innum <= max) {
                innum = innum + 1 
                if (innum >= 80) {
                    distcontent = distcontent - 2
                    dist.textContent = distcontent
                }
            } else{
                innum = innum + 0
            }
    }
    down.onclick = () => {
        if (innum >= min) {
            innum =innum - 1
            if (innum <= 0) {
                distcontent = distcontent - 10
                dist.textContent = distcontent
            }
        }else{
            innum =innum - 0
        }
        indicontent.textContent = innum 
    }
}
upDownFunc(upButtonVlc, downButtonVlc, velocityContent, minVel, maxVel, velocity, battery, batteryContent)
upDownFunc(upButtonTmp, downButtonTmp, temperatureContent, minTemp, maxTemp, temperature, battery, batteryContent)
upDownFunc(upButtonWhl, downButtonWhl, wheelContent, minRadius, maxRadius, wheel, null)
colorChanger(intBlack, intImageBlack)
colorChanger(intWhite, intImageWhite)
colorChanger(intBright, intImageBright)
longVersionAirCon(airCon, longVersion)


