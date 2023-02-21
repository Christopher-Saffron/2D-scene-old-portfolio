const OpenDoorsLong = new Audio('CloseDoor2.mp3')
const OpenDoorsBonk = new Audio('CloseDoorFastWithBonk.mp3')
const OpenDoorsNoBonk = new Audio('CloseDoorFastWithoutBonk.mp3')
const ScrollSound = new Audio('ScrollSound.mp3')
const LaptopSound = new Audio('LaptopSound.mp3')
const LoadingComplete = new Audio('LoadingComplete.mp3')

const playOpenFirst = () => {
    OpenDoorsLong.currentTime = 0;
    OpenDoorsLong.play();
}

const playOpenBonk = () => {
    OpenDoorsBonk.currentTime = 0;
    OpenDoorsBonk.play();
}

const playOpenNoBonk = () => {
    OpenDoorsNoBonk.currentTime = 0;
    OpenDoorsNoBonk.play();
}

const playScrollSound = () => {
    ScrollSound.currentTime = 0;
    ScrollSound.play();
}

const playLaptopSound = () => {
    LaptopSound.currentTime = 0;
    LaptopSound.play();
}

const playLoadingComplete = () => {
    LoadingComplete.currentTime = 0;
    LoadingComplete.play();
}

export {
    playOpenFirst,
    playOpenBonk,
    playOpenNoBonk,
    playScrollSound,
    playLaptopSound,
    playLoadingComplete,
}