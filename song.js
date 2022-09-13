let songIndex = 0;
var audioElement = new Audio("krish/lost_control.mp3")
let masterplay = document.getElementById("play");
let range2 = document.getElementById("progress");
let mastersongname = document.getElementById("songtitle")
let masterartist = document.getElementById("artist")
let songpara = Array.from(document.getElementsByClassName("music-title"));
let songimg = Array.from(document.getElementsByClassName("music-img"));
let songs = [
    {songName: "Lost Control" , artist: "Alan Walker" , filepath: "krish/lost_control.mp3" , coverpath: "bg/lost_control.jpg"},
    {songName: "Deep End" , artist: "William Black" , filepath: "krish/deep_end.mp3" , coverpath: "bg/deep_end.jpg"},
    {songName: "All i want" , artist: "Liam Payne" , filepath: "krish/all_i_want.mp3" , coverpath: "bg/all_i_want.jpg"},
    {songName: "Sunflower" , artist: "Post malone" , filepath: "krish/sunflower.mp3" , coverpath: "bg/sunflower.jpg"},
    {songName: "Light Switch" , artist: "Charlie Puth" , filepath: "krish/Light_Switch.mp3" , coverpath: "bg/Light_Switch.jpg"},
    {songName: "Make Me Fall" , artist: "Ghost Dragon" , filepath: "krish/Make_Me_Fall.mp3" , coverpath: "bg/Make_Me_Fall.jpg"},
    {songName: "Where We Started" , artist: "Lost Sky" , filepath: "krish/Where_We_Started.mp3" , coverpath: "bg/Where_We_Started.jpg"},
    {songName: "PayPhone" , artist: "Maroon 5" , filepath: "krish/payphone.mp3" , coverpath: "bg/payphone.jpg"},
    {songName: "Memories" , artist: "sabai" , filepath: "krish/Memories.mp3" , coverpath: "bg/Memories.jpg"},

    {songName: "Bad Liar" , artist: "Imagine Dragons" , filepath: "krish/bad_liar.mp3" , coverpath: "bg/bad_liar.jpg"},
    {songName: "Run Back to You" , artist: "Hoang" , filepath: "krish/Run_Back_to_You.mp3" , coverpath: "bg/Run_Back_to_You.jpg"},
    {songName: "Dreams pt.2" , artist: "Lost Sky" , filepath: "krish/Dreams2.mp3" , coverpath: "bg/Dreams2.jpg"},
    {songName: "End of Time" , artist: "Alan Walker" , filepath: "krish/End_of_Time.mp3" , coverpath: "bg/End_of_Time.jpg"},
    {songName: "Faded" , artist: "Alan walker" , filepath: "krish/Faded.mp3" , coverpath: "bg/Faded.jpg"},
    {songName: "Feelings" , artist: "Diviners & Azertion" , filepath: "krish/Feelings.mp3" , coverpath: "bg/Feelings.jpg"},
    {songName: "Happi" , artist: "Mangoo" , filepath: "krish/Happi.mp3" , coverpath: "bg/Happi.jpg"},
    {songName: "Heat Waves" , artist: "Glass Animals" , filepath: "krish/heat_waves.mp3" , coverpath: "bg/heat_waves.jpg"},
    {songName: "I Dont Care" , artist: "Justin Bieber and Ed Sheeran" , filepath: "krish/I_Dont_Care.mp3" , coverpath: "bg/I_Dont_Care.jpg"},
    {songName: "I Wanna Go" , artist: "J4CKO and Ajax" , filepath: "krish/I_Wanna_Go.mp3" , coverpath: "bg/I_Wanna_Go.jpg"},
    {songName: "Im A Mess" , artist: "Bebe Rexha" , filepath: "krish/Im_A_Mess.mp3" , coverpath: "bg/Im_A_Mess.jpg"},
    {songName: "Let Me Down Slowly" , artist: "Alec Benjamin" , filepath: "krish/Let_Me_Down.mp3" , coverpath: "bg/Let_Me_Down.jpg"},
    {songName: "Like Me Better" , artist: "Lauv" , filepath: "krish/Like_Me_Better.mp3" , coverpath: "bg/Like_Me_Better.jpg"},
    {songName: "Lose Somebody" , artist: "Kygo and OneRepublic" , filepath: "krish/Lose_Somebody.mp3" , coverpath: "bg/Lose_Somebody.jpg"},
    {songName: "Miracles" , artist: "Axel Johansson" , filepath: "krish/Miracles.mp3" , coverpath: "bg/Miracles.jpg"},
    {songName: "Night Changes" , artist: "OneRepublic" , filepath: "krish/Night_Changes.mp3" , coverpath: "bg/Night_Changes.jpg"},
    {songName: "No Friends" , artist: "Cadmium and Rosendale" , filepath: "krish/No_Friends.mp3" , coverpath: "bg/No_Friends.jpg"},
    {songName: "Perfect" , artist: "Ed Sheeran" , filepath: "krish/Perfect.mp3" , coverpath: "bg/Perfect.jpg"},
    {songName: "Positions" , artist: "Ariana Grande" , filepath: "krish/positions.mp3" , coverpath: "bg/positions.jpg"},
    {songName: "Revive" , artist: "Lione" , filepath: "krish/Revive.mp3" , coverpath: "bg/Revive.jpg"},
    {songName: "Bring Me Back" , artist: "Miles Away" , filepath: "krish/Bring_Me_Back.mp3" , coverpath: "bg/Bring_Me_Back.jpg"},
    {songName: "Sad Song" , artist: "We The Kings" , filepath: "krish/Sad_Song.mp3" , coverpath: "bg/Sad_Song.jpg"},
    {songName: "Sad Sometimes" , artist: "Alan Walker" , filepath: "krish/SadSometimes.mp3" , coverpath: "bg/SadSometimes.jpg"},
    {songName: "Sounxstate Alone" , artist: "Sounxstate" , filepath: "krish/Sounxstate_Alone.mp3" , coverpath: "bg/Sounxstate_Alone.jpg"},
    {songName: "Surrender" , artist: "Natalie Taylor" , filepath: "krish/Surrender.mp3" , coverpath: "bg/Surrender.jpg"},
    {songName: "Takeaway" , artist: "Illenium and The Chainsmokers" , filepath: "krish/Takeaway.mp3" , coverpath: "bg/Takeaway.jpg"},
    {songName: "Way Back Home" , artist: "Shaun" , filepath: "krish/Way_Back_Home.mp3" , coverpath: "bg/Way_Back_Home.jpg"},
    {songName: "We Dont Talk Anymore" , artist: "Charlie Puth" , filepath: "krish/We_Dont_Talk_Anymore.mp3" , coverpath: "bg/We_Dont_Talk_Anymore.jpg"},
    {songName: "You Broke Me First" , artist: "Tate McRae" , filepath: "krish/you_broke_me_first.mp3" , coverpath: "bg/you_broke_me_first.jpg"},
    
    {songName: "All We Know" , artist: "Tate McRae" , filepath: "krish/All_We_Know.mp3" , coverpath: "bg/All_We_Know.jpg"},
    {songName: "Always" , artist: "Tate McRae" , filepath: "krish/Always.mp3" , coverpath: "bg/Always.jpg"},
    {songName: "Better Lying" , artist: "Tate McRae" , filepath: "krish/Better_Lying.mp3" , coverpath: "bg/Better_Lying.jpg"},
    {songName: "Broken" , artist: "Tate McRae" , filepath: "krish/Broken.mp3" , coverpath: "bg/Broken.jpg"},
    {songName: "Crash" , artist: "Tate McRae" , filepath: "krish/Crash.mp3" , coverpath: "bg/Crash.jpg"},
    {songName: "Deep Blue" , artist: "Tate McRae" , filepath: "krish/Deep_Blue.mp3" , coverpath: "bg/Deep_Blue.jpg"},
    {songName: "Glimpse of Us" , artist: "Tate McRae" , filepath: "krish/Glimpse_of_Us.mp3" , coverpath: "bg/Glimpse_of_Us.jpg"},
    {songName: "Lighthouse" , artist: "Tate McRae" , filepath: "krish/Lighthouse.mp3" , coverpath: "bg/Lighthouse.jpg"},
    {songName: "Lonely Eyes" , artist: "Tate McRae" , filepath: "krish/Lonely_Eyes.mp3" , coverpath: "bg/Lonely_Eyes.jpg"},
    {songName: "Mean It" , artist: "Tate McRae" , filepath: "krish/Mean_t.mp3" , coverpath: "bg/Mean_t.jpg"},
    {songName: "Million Days" , artist: "Tate McRae" , filepath: "krish/Million_Days.mp3" , coverpath: "bg/Million_Days.jpg"},
    {songName: "Take You Home" , artist: "Tate McRae" , filepath: "krish/Take_You_Home.mp3" , coverpath: "bg/Take_You_Home.jpg"},
    {songName: "Cost of Being Perfect" , artist: "Tate McRae" , filepath: "krish/Cost_of_Being_Perfect.mp3" , coverpath: "bg/Cost_of_Being_Perfect.jpg"},
    {songName: "Two Of Us" , artist: "Tate McRae" , filepath: "krish/Two_Of_Us.mp3" , coverpath: "bg/Two_Of_Us.jpg"},
    {songName: "Without Me" , artist: "Tate McRae" , filepath: "krish/Without_Me.mp3" , coverpath: "bg/Without_Me.jpg"},
    {songName: "Play" , artist: "Alan Walker" , filepath: "krish/Play.mp3" , coverpath: "bg/Play.jpg"},
    {songName: "Older" , artist: "Sasha Alex Sloan" , filepath: "krish/Older.mp3" , coverpath: "bg/Older.jpg"}
]
//name of the song
// songpara.forEach((element, i) =>{
//     element.getElementsByClassName("title")[0].innerHTML = songs[i].songName;
// })
// songimg.forEach((element, i) =>{
//     element.getElementsByTagName("img")[0].src = songs[i].coverpath;
// })


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
            case 'lost_control':
                document.getElementById("songtitle").innerText = songs[0].songName;
                document.getElementById("artist").innerText = songs[0].artist;
                break;
            case 'deep_end':
                document.getElementById("songtitle").innerText = songs[1].songName;
                document.getElementById("artist").innerText = songs[1].artist;
                break;
            case 'all_i_want':
                document.getElementById("songtitle").innerText = songs[2].songName;
                document.getElementById("artist").innerText = songs[2].artist;
                break;
            case 'sunflower':
                document.getElementById("songtitle").innerText = songs[3].songName;
                document.getElementById("artist").innerText = songs[3].artist;
                break;
            case 'Light_Switch':
                document.getElementById("songtitle").innerText = songs[4].songName;
                document.getElementById("artist").innerText = songs[4].artist;
                break;
            case 'Make_Me_Fall':
                document.getElementById("songtitle").innerText = songs[5].songName;
                document.getElementById("artist").innerText = songs[5].artist;
                break;
            case 'Where_We_Started':
                document.getElementById("songtitle").innerText = songs[6].songName;
                document.getElementById("artist").innerText = songs[6].artist;
                break;
            case 'payphone':
                document.getElementById("songtitle").innerText = songs[7].songName;
                document.getElementById("artist").innerText = songs[7].artist;
                break;
            case 'Memories':
                document.getElementById("songtitle").innerText = songs[8].songName;
                document.getElementById("artist").innerText = songs[8].artist;
                break;
            case 'bad_liar':
                document.getElementById("songtitle").innerText = songs[9].songName;
                document.getElementById("artist").innerText = songs[9].artist;
                break;
            case 'Run_Back_to_You':
                document.getElementById("songtitle").innerText = songs[10].songName;
                document.getElementById("artist").innerText = songs[10].artist;
                break;
            case 'Dreams2':
                document.getElementById("songtitle").innerText = songs[11].songName;
                document.getElementById("artist").innerText = songs[11].artist;
                break;
            case 'End_of_Time':
                document.getElementById("songtitle").innerText = songs[12].songName;
                document.getElementById("artist").innerText = songs[12].artist;
                break;
            case 'Faded':
                document.getElementById("songtitle").innerText = songs[13].songName;
                document.getElementById("artist").innerText = songs[13].artist;
                break;
            case 'Feelings':
                document.getElementById("songtitle").innerText = songs[14].songName;
                document.getElementById("artist").innerText = songs[14].artist;
                break;
            case 'Happi':
                document.getElementById("songtitle").innerText = songs[15].songName;
                document.getElementById("artist").innerText = songs[15].artist;
                break;
            case 'heat_waves':
                document.getElementById("songtitle").innerText = songs[16].songName;
                document.getElementById("artist").innerText = songs[16].artist;
                break;
            case 'I_Dont_Care':
                document.getElementById("songtitle").innerText = songs[17].songName;
                document.getElementById("artist").innerText = songs[17].artist;
                break;
            case 'I_Wanna_Go':
                document.getElementById("songtitle").innerText = songs[18].songName;
                document.getElementById("artist").innerText = songs[18].artist;
                break;
            case 'Im_A_Mess':
                document.getElementById("songtitle").innerText = songs[19].songName;
                document.getElementById("artist").innerText = songs[19].artist;
                break;
            case 'Let_Me_Down':
                document.getElementById("songtitle").innerText = songs[20].songName;
                document.getElementById("artist").innerText = songs[20].artist;
                break;
            case 'Like_Me_Better':
                document.getElementById("songtitle").innerText = songs[21].songName;
                document.getElementById("artist").innerText = songs[21].artist;
                break;
            case 'Lose_Somebody':
                document.getElementById("songtitle").innerText = songs[22].songName;
                document.getElementById("artist").innerText = songs[22].artist;
                break;
            case 'Miracles':
                document.getElementById("songtitle").innerText = songs[23].songName;
                document.getElementById("artist").innerText = songs[23].artist;
                break;
            case 'Night_Changes':
                document.getElementById("songtitle").innerText = songs[24].songName;
                document.getElementById("artist").innerText = songs[24].artist;
                break;
            case 'No_Friends':
                document.getElementById("songtitle").innerText = songs[25].songName;
                document.getElementById("artist").innerText = songs[25].artist;
                break;
            case 'Perfect':
                document.getElementById("songtitle").innerText = songs[26].songName;
                document.getElementById("artist").innerText = songs[26].artist;
                break;
            case 'positions':
                document.getElementById("songtitle").innerText = songs[27].songName;
                document.getElementById("artist").innerText = songs[27].artist;
                break;
            case 'Revive':
                document.getElementById("songtitle").innerText = songs[28].songName;
                document.getElementById("artist").innerText = songs[28].artist;
                break;
            case 'Bring_Me_Back':
                document.getElementById("songtitle").innerText = songs[29].songName;
                document.getElementById("artist").innerText = songs[29].artist;
                break;
            case 'Sad_Song':
                document.getElementById("songtitle").innerText = songs[30].songName;
                document.getElementById("artist").innerText = songs[30].artist;
                break;
            case 'SadSometimes':
                document.getElementById("songtitle").innerText = songs[31].songName;
                document.getElementById("artist").innerText = songs[31].artist;
                break;
            case 'Sounxstate_Alone':
                document.getElementById("songtitle").innerText = songs[32].songName;
                document.getElementById("artist").innerText = songs[32].artist;
                break;
            case 'Surrender':
                document.getElementById("songtitle").innerText = songs[33].songName;
                document.getElementById("artist").innerText = songs[33].artist;
                break;
            case 'Takeaway':
                document.getElementById("songtitle").innerText = songs[34].songName;
                document.getElementById("artist").innerText = songs[34].artist;
                break;
            case 'Way_Back_Home':
                document.getElementById("songtitle").innerText = songs[35].songName;
                document.getElementById("artist").innerText = songs[35].artist;
                break;
            case 'We_Dont_Talk_Anymore':
                document.getElementById("songtitle").innerText = songs[36].songName;
                document.getElementById("artist").innerText = songs[36].artist;
                break;
            case 'you_broke_me_first':
                document.getElementById("songtitle").innerText = songs[37].songName;
                document.getElementById("artist").innerText = songs[37].artist;
                break;
            case 'All_We_Know':
                document.getElementById("songtitle").innerText = songs[38].songName;
                document.getElementById("artist").innerText = songs[38].artist;
                break;
            case 'Always':
                document.getElementById("songtitle").innerText = songs[39].songName;
                document.getElementById("artist").innerText = songs[39].artist;
                break;
            case 'Better_Lying':
                document.getElementById("songtitle").innerText = songs[40].songName;
                document.getElementById("artist").innerText = songs[40].artist;
                break;
            case 'Broken':
                document.getElementById("songtitle").innerText = songs[41].songName;
                document.getElementById("artist").innerText = songs[41].artist;
                break;
            case 'Crash':
                document.getElementById("songtitle").innerText = songs[42].songName;
                document.getElementById("artist").innerText = songs[42].artist;
                break;
            case 'Deep_Blue':
                document.getElementById("songtitle").innerText = songs[43].songName;
                document.getElementById("artist").innerText = songs[43].artist;
                break;
            case 'Glimpse_of_Us':
                document.getElementById("songtitle").innerText = songs[44].songName;
                document.getElementById("artist").innerText = songs[44].artist;
                break;
            case 'Lighthouse':
                document.getElementById("songtitle").innerText = songs[45].songName;
                document.getElementById("artist").innerText = songs[45].artist;
                break;
            case 'Lonely_Eyes':
                document.getElementById("songtitle").innerText = songs[46].songName;
                document.getElementById("artist").innerText = songs[46].artist;
                break;
            case 'Mean_t':
                document.getElementById("songtitle").innerText = songs[47].songName;
                document.getElementById("artist").innerText = songs[47].artist;
                break;
            case 'Million_Days':
                document.getElementById("songtitle").innerText = songs[48].songName;
                document.getElementById("artist").innerText = songs[48].artist;
                break;
            case 'Take_You_Home':
                document.getElementById("songtitle").innerText = songs[49].songName;
                document.getElementById("artist").innerText = songs[49].artist;
                break;
            case 'Cost_of_Being_Perfect':
                document.getElementById("songtitle").innerText = songs[50].songName;
                document.getElementById("artist").innerText = songs[50].artist;
                break;
            case 'Two_Of_Us':
                document.getElementById("songtitle").innerText = songs[51].songName;
                document.getElementById("artist").innerText = songs[51].artist;
                break;
            case 'Without_Me':
                document.getElementById("songtitle").innerText = songs[52].songName;
                document.getElementById("artist").innerText = songs[52].artist;
                break;
            case 'Play':
                document.getElementById("songtitle").innerText = songs[53].songName;
                document.getElementById("artist").innerText = songs[53].artist;
                break;
            case 'Older':
                document.getElementById("songtitle").innerText = songs[54].songName;
                document.getElementById("artist").innerText = songs[54].artist;
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
songpara.forEach((element, i) =>{
    element.getElementsByClassName("title")[0].innerHTML = songs[i].songName;
})
songimg.forEach((element, i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
})
