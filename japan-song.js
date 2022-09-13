let songIndex = 0;
var audioElement = new Audio("krish/EIGHTYSIX.mp3")
let masterplay = document.getElementById("play");
let range2 = document.getElementById("progress");
let mastersongname = document.getElementById("songtitle")
let masterartist = document.getElementById("artist")
let songpara = Array.from(document.getElementsByClassName("music-title"));
let songimg = Array.from(document.getElementsByClassName("music-img"));
let songs = [
    {songName: "EIGHTYSIX" , artist: "SawanoHiroyuki" , filepath: "krish/EIGHTYSIX.mp3" , coverpath: "bg/EIGHTYSIX.jpg"},
    {songName: "Black Clover Beautiful" , artist: "Alan Walker" , filepath: "krish/Black_Clover.mp3" , coverpath: "bg/Black_Clover.jpg"},
    {songName: "Fruits basket season 3" , artist: "Alan Walker" , filepath: "krish/Fruits_basket_season_3.mp3" , coverpath: "bg/Fruits_basket_season_3.jpg"},
    {songName: "Fruits Basket 2019" , artist: "Alan Walker" , filepath: "krish/Fruits_Basket_2019.mp3" , coverpath: "bg/Fruits_Basket_2019.jpg"},
    {songName: "Grand Escape WWY" , artist: "Alan Walker" , filepath: "krish/Grand_Escape_WWY.mp3" , coverpath: "bg/Grand_Escape_WWY.jpg"},
    {songName: "Homura_炎 (DS)" , artist: "Alan Walker" , filepath: "krish/Homura_炎.mp3" , coverpath: "bg/Homura_炎.jpg"},
    {songName: "Hare hare ya" , artist: "Alan Walker" , filepath: "krish/Hare_hare_ya.mp3" , coverpath: "bg/Hare_hare_ya.jpg"},
    {songName: "OST SuzumeNanoka" , artist: "Alan Walker" , filepath: "krish/OST_SuzumeNanoka.mp3" , coverpath: "bg/OST_SuzumeNanoka.jpg"},
    {songName: "Your Name Original" , artist: "Alan Walker" , filepath: "krish/Your_name.mp3" , coverpath: "bg/Your_name.jpg"},
    {songName: "ただ声一つ" , artist: "Alan Walker" , filepath: "krish/ただ声一つ.mp3" , coverpath: "bg/ただ声一つ.jpg"},
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
            case 'EIGHTYSIX':
                document.getElementById("songtitle").innerText = songs[0].songName;
                document.getElementById("artist").innerText = songs[0].artist;
                break;
            case 'Black_Clover':
                document.getElementById("songtitle").innerText = songs[1].songName;
                document.getElementById("artist").innerText = songs[1].artist;
                break;
            case 'Fruits_basket_season_3':
                document.getElementById("songtitle").innerText = songs[2].songName;
                document.getElementById("artist").innerText = songs[2].artist;
                break;
            case 'Fruits_Basket_2019':
                document.getElementById("songtitle").innerText = songs[3].songName;
                document.getElementById("artist").innerText = songs[3].artist;
                break;
            case 'Grand_Escape_WWY':
                document.getElementById("songtitle").innerText = songs[4].songName;
                document.getElementById("artist").innerText = songs[4].artist;
                break;
            case 'Homura_炎':
                document.getElementById("songtitle").innerText = songs[5].songName;
                document.getElementById("artist").innerText = songs[5].artist;
                break;
            case 'Hare_hare_ya':
                document.getElementById("songtitle").innerText = songs[6].songName;
                document.getElementById("artist").innerText = songs[6].artist;
                break;
            case 'OST_SuzumeNanoka':
                document.getElementById("songtitle").innerText = songs[7].songName;
                document.getElementById("artist").innerText = songs[7].artist;
                break;
            case 'Your_name':
                document.getElementById("songtitle").innerText = songs[8].songName;
                document.getElementById("artist").innerText = songs[8].artist;
                break;
            case 'ただ声一つ':
                document.getElementById("songtitle").innerText = songs[9].songName;
                document.getElementById("artist").innerText = songs[9].artist;
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
