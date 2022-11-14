function  aplicarMovimientoAleatorio(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divSexMode = document.getElementsByClassName("sex_mode")[0];

btnNo.addEventListener("mouseenter", function(e) {aplicarMovimientoAleatorio(e.target)});

btnSi.addEventListener("click", function(e){
    alert('Sabía que dirías que SI. TE AMO!!!!');
    divSexMode.style.display = 'block';
    const music = new Audio('sound/sound.mp3');
    music.play();
});