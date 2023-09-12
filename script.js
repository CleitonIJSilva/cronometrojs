const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

let segundos = 0;
let minutos = 0;
let horas = 0;

let principalSegundos = 0;
let principalMinutos = 0;
let princiapalHoras = 0;

let timerInterval = null;
let timerStatus = "reset";





function stopMatch(){
    segundos++

    if(segundos / 60 === 1){
        segundos = 0;
        minutos++

        if(minuto / 60 === 1){
            minuto = 0;
            horas++
        }
    }

    if(segundos < 10){
        principalSegundos = "0" + segundos.toString();
    }else{
        principalSegundos = segundos
    }

    if(minutos < 10){
        principalMinutos = "0" + minutos.toString();
    }else{
        principalMinutos = minutos
    }

    if(horas < 10){
        princiapalHoras = "0" + horas.toString();
    }else{
        princiapalHoras = horas
    }


let displayTimer = document.getElementById("timer").innerText = princiapalHoras + ':' + principalMinutos+ ':' + principalSegundos;

}

startStopBtn.addEventListener('click', function(){
    if(timerStatus === 'stopped'){
        timerInterval = window.setInterval(stopMatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`
        timerStatus = 'started'
    }else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
        timerStatus = 'stopped';
    }  
} )

resetBtn.addEventListener('click', function(){

 /*   window.clearInterval('click', function(){

        horas = 0;
        minutos = 0;
       segundos = 0;
       document.getElementById('timer').innerText= "00:00:00";

    }) */  //esse está funcionando 




     // este é para consertar 
if(timerStatus=== 'reset'){


    timerInterval = window.setIntervel( 0);
    document.getElementById('resetBtn').innerHTML = `<i class="fa-solid fa-reset" id="reset"></i>`
    timerStatus = 'reset'
}else //{
   // window.clearInterval(timerInterval);
   // document.getElementById('resetBtn').innerHTML = //`i class="fa-solid fa-reset" id="reset" ><i/>`
   // timerStatus = 'reset'
}


})

