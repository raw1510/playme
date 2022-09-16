let songIndex = 0;
var audioElement = new Audio("krish/Doobey_Gehraiyaan.mp3")
let masterplay = document.getElementById("play");
let range2 = document.getElementById("progress");
let mastersongname = document.getElementById("songtitle")
let masterartist = document.getElementById("artist")
let songpara = Array.from(document.getElementsByClassName("music-title"));
let songimg = Array.from(document.getElementsByClassName("music-img"));
let songs = [
    {songName: "Doobey Gehraiyaan" , artist: "SawanoHiroyuki" , filepath: "krish/Doobey_Gehraiyaan.mp3" , coverpath: "bg/Doobey_Gehraiyaan.jpg"},
    {songName: "Kesariya Brahmāstra" , artist: "Alan Walker" , filepath: "krish/Kesariya_Brahmāstra.mp3" , coverpath: "bg/Kesariya_Brahmāstra.jpg"},
    {songName: "Kho Gaye Hum Kahan" , artist: "Alan Walker" , filepath: "krish/Kho_Gaye_Hum_Kahan.mp3" , coverpath: "bg/Kho_Gaye_Hum_Kahan.jpg"},
    {songName: "Mileya Mileya" , artist: "Alan Walker" , filepath: "krish/Mileya_Mileya.mp3" , coverpath: "bg/Mileya_Mileya.jpg"},
    {songName: "OFFO" , artist: "Alan Walker" , filepath: "krish/OFFO.mp3" , coverpath: "bg/OFFO.jpg"},
    {songName: "Udd Gaye" , artist: "Alan Walker" , filepath: "krish/Udd_Gaye.mp3" , coverpath: "bg/Udd_Gaye.jpg"},
    {songName: "Woh Din Chhichhore" , artist: "Alan Walker" , filepath: "krish/Woh_Din_Chhichhore.mp3" , coverpath: "bg/Woh_Din_Chhichhore.jpg"},
    
    {songName: "Behti Hawa Sa Tha Woh" , artist: "Alan Walker" , filepath: "krish/Behti_Hawa_Sa_Tha_Woh.mp3" , coverpath: "bg/Behti_Hawa_Sa_Tha_Woh.jpg"},
    {songName: "Channa Mereya" , artist: "Alan Walker" , filepath: "krish/Channa_Mereya.mp3" , coverpath: "bg/Channa_Mereya.jpg"},
    {songName: "Hawayein" , artist: "Alan Walker" , filepath: "krish/Hawayein.mp3" , coverpath: "bg/Hawayein.jpg"},
    {songName: "Sukoon Mila" , artist: "Alan Walker" , filepath: "krish/Sukoon_Mila.mp3" , coverpath: "bg/Sukoon_Mila.jpg"},
    {songName: "Tu Jo Mila" , artist: "Alan Walker" , filepath: "krish/Tu_Jo_Mila.mp3" , coverpath: "bg/Tu_Jo_Mila.jpg"},

    {songName: "Yaaron" , artist: "Alan Walker" , filepath: "krish/Yaaron.mp3" , coverpath: "bg/Yaaron.jpg"},
    {songName: "Sunn Raha Hai Rozana" , artist: "Alan Walker" , filepath: "krish/Sunn_Raha_Hai_Rozana.mp3" , coverpath: "bg/Sunn_Raha_Hai_Rozana.jpg"},
    {songName: "Tu Jo Mila Raabta" , artist: "Alan Walker" , filepath: "krish/Tu_Jo_Mila_Raabta.mp3" , coverpath: "bg/Tu_Jo_Mila_Raabta.jpg"},
    {songName: "BESABRIYAAN" , artist: "Alan Walker" , filepath: "krish/BESABRIYAAN.mp3" , coverpath: "bg/BESABRIYAAN.jpg"},
    {songName: "Tera Yaar Hoon Main" , artist: "Alan Walker" , filepath: "krish/Tera_Yaar_Hoon_Main.mp3" , coverpath: "bg/Tera_Yaar_Hoon_Main.jpg"},

    {songName: "Kamariya" , artist: "Alan Walker" , filepath: "krish/Kamariya.mp3" , coverpath: "bg/Kamariya.jpg"},
    {songName: "Chogada" , artist: "Alan Walker" , filepath: "krish/Chogada.mp3" , coverpath: "bg/Chogada.jpg"},
    {songName: "Ek Ladki Ki Dekha Toh Aisa Laga" , artist: "Alan Walker" , filepath: "krish/Ek_Ladki_Ko_Dekha_Toh_Aisa__Laga.mp3" , coverpath: "bg/Ek_Ladki_Ko_Dekha_Toh_Aisa__Laga.jpg"},
    {songName: "Ek Zindagi" , artist: "Alan Walker" , filepath: "krish/Ek_Zindagi.mp3" , coverpath: "bg/Ek_Zindagi.jpg"},

    {songName: "Moti Veraana" , artist: "Alan Walker" , filepath: "krish/Moti_Veraana.mp3" , coverpath: "bg/Moti_Veraana.jpg"},
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
        // document.getElementById("back").style.backgroundPosition = 'center';

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
            case 'Doobey_Gehraiyaan':
                document.getElementById("songtitle").innerText = songs[0].songName;
                document.getElementById("artist").innerText = songs[0].artist;
                break;
            case 'Kesariya_Brahmāstra':
                document.getElementById("songtitle").innerText = songs[1].songName;
                document.getElementById("artist").innerText = songs[1].artist;
                break;
            case 'Kho_Gaye_Hum_Kahan':
                document.getElementById("songtitle").innerText = songs[2].songName;
                document.getElementById("artist").innerText = songs[2].artist;
                break;
            case 'Mileya_Mileya':
                document.getElementById("songtitle").innerText = songs[3].songName;
                document.getElementById("artist").innerText = songs[3].artist;
                break;
            case 'OFFO':
                document.getElementById("songtitle").innerText = songs[4].songName;
                document.getElementById("artist").innerText = songs[4].artist;
                break;
            case 'Udd_Gaye':
                document.getElementById("songtitle").innerText = songs[5].songName;
                document.getElementById("artist").innerText = songs[5].artist;
                break;
            case 'Woh_Din_Chhichhore':
                document.getElementById("songtitle").innerText = songs[6].songName;
                document.getElementById("artist").innerText = songs[6].artist;
                break;
            case 'Behti_Hawa_Sa_Tha_Woh':
                document.getElementById("songtitle").innerText = songs[7].songName;
                document.getElementById("artist").innerText = songs[7].artist;
                break;
            case 'Channa_Mereya':
                document.getElementById("songtitle").innerText = songs[8].songName;
                document.getElementById("artist").innerText = songs[8].artist;
                break;
            case 'Hawayein':
                document.getElementById("songtitle").innerText = songs[9].songName;
                document.getElementById("artist").innerText = songs[9].artist;
                break;
            case 'Sukoon_Mila':
                document.getElementById("songtitle").innerText = songs[10].songName;
                document.getElementById("artist").innerText = songs[10].artist;
                break;
            case 'Tu_Jo_Mila':
                document.getElementById("songtitle").innerText = songs[11].songName;
                document.getElementById("artist").innerText = songs[11].artist;
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
