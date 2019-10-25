// Define Variable




//Define UI

const kelvinScale = document.querySelector('#kelvin-scale'),
      fahrenheitScale = document.querySelector('#fahrenheit-scale'),
      sectionA = document.querySelector('#section-a'),
      sectionB = document.querySelector('#section-b'),
      selControl = document.querySelector('.sel-control'),
      fahrenheitOption = document.querySelector('.fahrenheit-option'),
      kelvinOption = document.querySelector('.kelvin-option'),
      message = document.querySelector('.message');

//Listin to kelvin scale;
//listen to fahrenheitScale;



fahrenheitScale.addEventListener('keyup',conToKelvin);
kelvinScale.addEventListener('keyup',conTofahrenheit);
kelvinOption.addEventListener('click', kelvinSwap)





//convert to Kelvin
function conToKelvin() {
    const k = (((fahrenheitScale.value)*(5/9)) + 275.15)
    if (isFinite(k)) {
        kelvinScale.value = k.toFixed(2)
        kelvinScale.disabled = true;
        kelvinScale.style.color = 'green'
        setTimeout(clearDis, 1000)
    }

}

//clearDIs
function clearDis() {
    kelvinScale.disabled = false;
    kelvinScale.value='';
}

//convert to fahreniet
function conTofahrenheit() {
    if (isNaN(kelvinScale.value) || kelvinScale.value < 0 ) {
        setMessage(`${kelvinScale.value} does not exit.Please kelvin scale can not be Negative.`, 'red')
        fahrenheitScale.style.display = none;
    }

    const f = (((kelvinScale.value - 273.15)*(9/5)) +32)
    if (isFinite(f)) {
        fahrenheitScale.value = f.toFixed(2)
        fahrenheitScale.disabled= true;
        
        fahrenheitScale.style.color ='green'
        setTimeout(clearDis, 2000)
    }
    //clearDIs
    function clearDis() {
        fahrenheitScale.disabled = false;
        fahrenheitScale.value =''
       
    }
}

//swap
function kelvinSwap(e) {
    console.log(e.target.textContent)
}


//setMessage

function setMessage(msg,color) {
    message.textContent = msg;
    message.style.color = color

    setTimeout(clearMsg, 2000)
}

function clearMsg() {
    document.querySelector('.message').remove()}