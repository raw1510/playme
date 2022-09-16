let songIndex = 0;
var audioElement = new Audio("krish/permission_to_dance.mp3")
let masterplay = document.getElementById("play");
let range2 = document.getElementById("progress");
let mastersongname = document.getElementById("songtitle")
let masterartist = document.getElementById("artist")
let songpara = Array.from(document.getElementsByClassName("music-title"));
let songimg = Array.from(document.getElementsByClassName("music-img"));
let songs = [
    {songName: "Permission to Dance" , artist: "Bts" , filepath: "krish/permission_to_dance.mp3" , coverpath: "bg/permission_to_dance.jpg"},
    {songName: "Boy with Luv" , artist: "Bts" , filepath: "krish/Boy_with_Luv.mp3" , coverpath: "bg/Boy_with_Luv.jpg"},
    {songName: "Dynamite" , artist: "Bts" , filepath: "krish/Dynamite.mp3" , coverpath: "bg/Dynamite.jpg"}
]
//name of the song

songpara.forEach((element, i) =>{
    element.getElementsByClassName("title")[0].innerHTML = songs[i].songName;
})
songimg.forEach((element, i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
})

//play and pause 
masterplay.addEventListener('click',()=>{
 if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
 }
 else{
    audioElement.pause();
    masterplay.classList.remove('fa-pause');
    masterplay.classList.add('fa-play');
 }
})

// listen to the events progress bar
audioElement.addEventListener('timeupdate',()=>{
    console.log("timeupdate");
    prgress1 = ((audioElement.currentTime/audioElement.duration)*100);
    console.log(prgress1);
    range2.value = prgress1;
    if( prgress1 == 100){
        songIndex ++;
        console.log(songIndex)
        audioElement.src = songs[songIndex].filepath;
        var next_songname = songs[songIndex].songName;
        var next_artistname = songs[songIndex].artist;
        var next_bg = songs[songIndex].coverpath;
        document.getElementById("songtitle").innerText = next_songname;
        document.getElementById("artist").innerText = next_artistname;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        document.getElementById("back").style.background = 'url("'+next_bg+'")';
        document.getElementById("back").style.backgroundSize = 'cover';
        document.getElementById("back").style.backgroundPosition = 'center';

    }
})
range2.addEventListener('change',()=>{
    audioElement.currentTime = range2.value * audioElement.duration/100;
    
})

//next btn function
document.getElementById("nextbtn").addEventListener('click', ()=>{
    if(songIndex > songs.length - 1){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filepath;
    var next_songname = songs[songIndex].songName;
    var next_artistname = songs[songIndex].artist;
    var next_bg = songs[songIndex].coverpath;
    document.getElementById("songtitle").innerText = next_songname;
    document.getElementById("artist").innerText = next_artistname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    document.getElementById("back").style.background = 'url("'+next_bg+'")';
    document.getElementById("back").style.backgroundSize = 'cover';
    document.getElementById("back").style.backgroundPosition = 'center';
})

//pervious btn function

document.getElementById("perviousbtn").addEventListener('click', ()=>{
    console.log(songIndex);
    var a;
    songIndex -= 1;
    
    console.log(songIndex);
    if(songIndex == -1){
        songIndex = songs.length -1 ;
    }
    if(songIndex == songs.length - 1){
        songIndex = 0;
    }
    console.log("afte -1 "+songIndex);
    audioElement.src = songs[songIndex].filepath;
    var per_songname = songs[songIndex].songName;
    var per_songartist = songs[songIndex].artist;
    var per_bg = songs[songIndex].coverpath;
    document.getElementById("songtitle").innerText = per_songname;
    document.getElementById("artist").innerText = per_songartist;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    document.getElementById("back").style.background = 'url("'+per_bg+'")';
    document.getElementById("back").style.backgroundSize = 'cover';
    document.getElementById("back").style.backgroundPosition = 'center';
})

//playlist click music 

Array.from(document.getElementsByClassName("songItemPlay")).forEach ((element)=> {
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        audioElement.src = 'krish/'+index+'.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        document.getElementById("back").style.background = 'url("bg/'+index+'.jpg")';
        document.getElementById("back").style.backgroundSize = 'cover';
        document.getElementById("back").style.backgroundPosition = 'center';

        switch(index){
            case 'permission_to_dance':
                document.getElementById("songtitle").innerText = songs[0].songName;
                document.getElementById("artist").innerText = songs[0].artist;
                break;
            case 'Boy_with_Luv':
                document.getElementById("songtitle").innerText = songs[1].songName;
                document.getElementById("artist").innerText = songs[1].artist;
                break;
            case 'Dynamite':
                document.getElementById("songtitle").innerText = songs[2].songName;
                document.getElementById("artist").innerText = songs[2].artist;
                break;
        }

        // if(index == 'lost_control'){
        //     document.getElementById("songtitle").innerText = songs[0].songName;
        //     document.getElementById("artist").innerText = songs[0].artist;
        // }
        // else if(index == 'deep_end'){
        //     document.getElementById("songtitle").innerText = songs[1].songName;
        //     document.getElementById("artist").innerText = songs[1].artist;
        // }
        // else if(index == 'm'){
        //     document.getElementById("songtitle").innerText = songs[0].songName;
        //     document.getElementById("artist").innerText = songs[0].artist;
        // }
        // else if(index == 'lost_control'){
        //     document.getElementById("songtitle").innerText = songs[0].songName;
        //     document.getElementById("artist").innerText = songs[0].artist;
        // }
        // else if(index == 'lost_control'){
        //     document.getElementById("songtitle").innerText = songs[0].songName;
        //     document.getElementById("artist").innerText = songs[0].artist;
        // }
        // else if(index == 'lost_control'){
        //     document.getElementById("songtitle").innerText = songs[0].songName;
        //     document.getElementById("artist").innerText = songs[0].artist;
        // }
    })
});
