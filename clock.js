const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

var buttonClock = document.getElementById("#buttonClock");
var buttonCronometro = document.getElementById("#buttonCronometro");
var buttonAlarme = document.getElementById("#buttonAlarme");
var buttonTemporizador = document.getElementById("#buttonTemporizador");

const clock = setInterval(function time() {
    let dateToday = new Date();

    let hr = dateToday.getHours();
    let mim = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (mim < 10) hr = '0' + mim;
    if (sec < 10) sec = '0' + sec;

    hours.textContent = hr;
    minutes.textContent = mim;
    seconds.textContent = sec;

});

buttonClock.addEventListener('click', () => {

    /*if(ja estiver em relogio, n fazer nada)   {
        break;
    }
    else
     trocar pra relogio
    */

})