console.log("welcome to spotify");
// initialize the events
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPLay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"song",filepath:"songs/1.mp3",coverPath:"1.jpg"},
    {songName:"song2",filepath:"songs/2.mp3",coverPath:"2.jpg"},
    {songName:"song3",filepath:"songs/3.mp3",coverPath:"3.jpg"},
    {songName:"song4",filepath:"songs/4.mp3",coverPath:"4.jpg"},
    {songName:"song5",filepath:"songs/5.mp3",coverPath:"5.jpg"},
    {songName:"song6",filepath:"songs/6.mp3",coverPath:"6.jpg"},
    {songName:"song7",filepath:"songs/7.mp3",coverPath:"7.jpg"},
    {songName:"song8",filepath:"songs/8.mp3",coverPath:"8.jpg"},
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
    
})
//audioElement.play()
// handle play pause click
masterPLay.addEventListener('click',()=>{
    
    if(audioElement.paused || audioElement.currentTime<=0)
    {
       audioElement.play();
       masterPLay.classList.remove('fa-play-circle');
       masterPLay.classList.add('fa-pause-circle');
       gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPLay.classList.remove('fa-pause-circle');
        masterPLay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
// LIsten to events
audioElement.addEventListener('timeupdate', ()=>{ 
    //update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
myProgressBar.value=progress; 
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle');
    })
    }
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click', (e)=>{ 
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
    })
    
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9)
    {
     songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`songs/$(songIndex+1).mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPLay.classList.remove('fa-play-circle');
    masterPLay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
     songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`songs/$(songIndex+1).mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPLay.classList.remove('fa-play-circle');
    masterPLay.classList.add('fa-pause-circle');

})