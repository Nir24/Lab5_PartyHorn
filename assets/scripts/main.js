// main.js
let ButtonSound = document.getElementById("honk-btn");
ButtonSound.addEventListener("click",function(event){
    event.preventDefault();
    if(NumFeild.value != 0 ){
        console.log("hi");
        let audioSound = document.getElementById("horn-sound");
        audioSound.play();
    }
});

// JS for visual audio adjustment
let NumFeild = document.getElementById("volume-number");
let rangeFeild = document.getElementById("volume-slider");
rangeFeild.addEventListener('input',adjustVolumeNumField);
NumFeild.addEventListener('input',adjustVolumeRangeField);

function adjustVolumeNumField(){
   NumFeild.value = rangeFeild.value;
   adjustVolumeImage();
   adjustVolume();
}
function adjustVolumeRangeField(){
    rangeFeild.value =  NumFeild.value;
    adjustVolumeImage();
    adjustVolume();
}
function adjustVolumeImage(){
    let imageVolume = document.getElementById("volume-image");
    if(NumFeild.value == 0){
        imageVolume.src = "./assets/media/icons/volume-level-0.svg"
    }else if(NumFeild.value >= 1 && NumFeild.value <= 34){
        imageVolume.src = "./assets/media/icons/volume-level-1.svg"
    }else if(NumFeild.value >= 34 && NumFeild.value <= 66){
        imageVolume.src = "./assets/media/icons/volume-level-2.svg"
    }else{
        imageVolume.src = "./assets/media/icons/volume-level-3.svg"
    }
}
function adjustVolume(){
    let audioSound = document.getElementById("horn-sound");
    audioSound.volume = (NumFeild.value)/100;
}
// JS for radio buttons
let radioHorn = document.getElementById("radio-air-horn");
let carHorn = document.getElementById("radio-car-horn");
let partyhorn = document.getElementById("radio-party-horn");
partyhorn.addEventListener('input',ChangeAudioAndImageparty)
carHorn.addEventListener('input',ChangeAudioAndImagecar)
radioHorn.addEventListener('input',ChangeAudioAndImageAir);

function ChangeAudioAndImageAir(){
    let audioSound = document.getElementById("horn-sound");
    let imagesound = document.getElementById("sound-image");
    audioSound.src="./assets/media/audio/air-horn.mp3";
    imagesound.src = "./assets/media/images/air-horn.svg";
}
function ChangeAudioAndImagecar(){
    let audioSound = document.getElementById("horn-sound");
    let imagesound = document.getElementById("sound-image");
    audioSound.src="./assets/media/audio/car-horn.mp3";
    imagesound.src = "./assets/media/images/car.svg";
}
function ChangeAudioAndImageparty(){
    let audioSound = document.getElementById("horn-sound");
    let imagesound = document.getElementById("sound-image");
    audioSound.src="./assets/media/audio/party-horn.mp3";
    imagesound.src = "./assets/media/images/party-horn.svg";
}
// TODO
