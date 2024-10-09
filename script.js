console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex=0;
let audioElement = new Audio('songs\lmu.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName:"salam-e-ishq", filePath: "songs\lmu.mp3",coverPath:"cover.jpg"},
    {songName:"salam-e-ishq", filePath: "songs\lmu.mp3",coverPath:"cover.jpg"},
    {songName:"salam-e-ishq", filePath: "songs\lmu.mp3",coverPath:"cover.jpg"},
    {songName:"salam-e-ishq", filePath: "songs\lmu.mp3",coverPath:"cover.jpg"},
    {songName:"salam-e-ishq", filePath: "songs\lmu.mp3",coverPath:"cover.jpg"},
    {songName:"salam-e-ishq", filePath: "songs\lmu.mp3",coverPath:"cover.jpg"},
]

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        console.log("Song playing")
    }
})
// Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
})
