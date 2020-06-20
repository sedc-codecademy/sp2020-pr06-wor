var audio, playbtn, mutebtn, seekslider, volumeslider, seeking = false,
    seekto;

function initAudioPlayer() {
    audio = new Audio();
    audio.src = "https://www.soundjay.com/free-music/midnight-ride-01a.mp3";
    audio.loop = true;
    audio.play();
    // Set object references
    playbtn = document.getElementById("playpausebtn");
    mutebtn = document.getElementById("mutebtn");
    // seekslider = document.getElementById("seekslider");
    volumeslider = document.getElementById("volumeslider");
    // Add Event Handling
    playbtn.addEventListener("click", playPause);
    mutebtn.addEventListener("click", mute);
    // seekslider.addEventListener("mousedown", function(event){ seeking=true; seek(event); });
    // seekslider.addEventListener("mousemove", function(event){ seek(event); });
    // seekslider.addEventListener("mouseup",function(){ seeking=false; });
    volumeslider.addEventListener("mousemove", setvolume);
    // Functions
    function playPause() {
        if (audio.paused) {
            audio.play();
            playbtn.style.background = "url(https://image.flaticon.com/icons/svg/189/189889.svg) no-repeat";
        } else {
            audio.pause();
            playbtn.style.background = "url(https://image.flaticon.com/icons/svg/148/148744.svg) no-repeat";
        }
    }

    function mute() {
        if (audio.muted) {
            audio.muted = false;
            mutebtn.style.background = "url(https://image.flaticon.com/icons/svg/204/204287.svg) no-repeat";
        } else {
            audio.muted = true;
            mutebtn.style.background = "url(https://image.flaticon.com/icons/svg/148/148757.svg) no-repeat";
        }
    }
    // function seek(event){
    //     if(seeking){
    // 	    seekslider.value = event.clientX - seekslider.offsetLeft;
    //         seekto = audio.duration * (seekslider.value / 100);
    //         audio.currentTime = seekto;
    //     }
    // }
    function setvolume() {
        audio.volume = volumeslider.value / 100;
    }
}







window.addEventListener("load", initAudioPlayer);

let bleep = new Audio();
bleep.src = "https://www.soundjay.com/button/sounds/button-3.mp3";