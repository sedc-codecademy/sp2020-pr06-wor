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

// Menu Button - Click Sound

document.querySelector(".click_sound0").addEventListener("click", function () {
    bleep.play();
});

document.querySelector(".click_sound1").addEventListener("click", function () {
    bleep.play();
});

document.querySelector(".click_sound2").addEventListener("click", function () {
    bleep.play();
});

document.querySelector(".click_sound3").addEventListener("click", function () {
    bleep.play();
});

// New Game - Click Sound

document.querySelector(".click_soundF").addEventListener("click", function () {
    bleep.play();
});
document.querySelector(".click_soundM").addEventListener("click", function () {
    bleep.play();
});
document.querySelector(".click_soundSave").addEventListener("click", function () {
    bleep.play();
});
document.querySelector(".click_soundContinue").addEventListener("click", function () {
    bleep.play();
});

// Avatars - Click Sound

document.querySelector(".click_soundAvatar0").addEventListener("click", function () {
    bleep.play();
});
document.querySelector(".click_soundAvatar1").addEventListener("click", function () {
    bleep.play();
});
document.querySelector(".click_soundAvatar2").addEventListener("click", function () {
    bleep.play();
});
document.querySelector(".click_soundAvatar3").addEventListener("click", function () {
    bleep.play();
});
document.querySelector(".click_soundAvatar4").addEventListener("click", function () {
    bleep.play();
});
document.querySelector(".click_soundAvatar5").addEventListener("click", function () {
    bleep.play();
});
document.querySelector(".click_soundAvatar6").addEventListener("click", function () {
    bleep.play();
});
document.querySelector(".click_soundAvatar7").addEventListener("click", function () {
    bleep.play();
});

// Settings - Click Sound

document.querySelector(".click_soundPlay").addEventListener("click", function () {
    bleep.play();
});

document.querySelector(".click_soundMute").addEventListener("click", function () {
    bleep.play();
});

// Images - CLick Sound

document.querySelector(".click_soundImg1").addEventListener("click", function () {
    bleep.play();
});
document.querySelector(".click_soundImg2").addEventListener("click", function () {
    bleep.play();
});
document.querySelector(".click_soundImg3").addEventListener("click", function () {
    bleep.play();
});