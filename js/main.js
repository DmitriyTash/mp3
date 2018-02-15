var songs = ['Cymba & Victoria Rojas - The Forest.mp3',
'Ellie Goulding - Your Song.mp3',
'Gemini - Graduation.mp3',
'Moby - Alice (Noisia Remix).mp3',
'Mysea - Give Me Love (original mix).mp3',
'NERD - Hypnotize U.mp3',
'Olivia Millerschin - I Can Say.mp3',
's - Opher Yisrael - Cutting the Chase.mp3',
'Shivaree - Goodnight Moon.mp3',
'Sub Focus - Last Jungle.mp3'];

var  songTitle = document.getElementById('songTitle');
var  fill = document.getElementById('fill');

var currentTime = document.getElementById('currentTime')
var duration = document.getElementById('duration')

var song = new Audio();
var currentSong = 0 ;//points to the current song

window.onload = playSong;

function playSong(){
    
    song.src = "songs/" + songs[currentSong]; //set the source of 0 song
    
    songTitle.textContent = songs[currentSong]; //set the title of the song
    
    song.play(); //play the song
}


function playOrPauseSong(){

	if(song.paused){
		song.play();
		$("#play img").attr("src"/"img","pause.png");
	}
    else{
        song.pause();
        $("#play img").attr("src"/"img","play.png");
    }
}


song.addEventListener('timeupdate',function(){
    var position = song.currentTime / song.duration
    
    fill.style.width = position * 100 +'%'
})

function next(){
    currentSong++
    if(currentSong > 9){
        currentSong = 0
    }
    playSong()
    $("#play img").attr("src","pause.png")
}

function pre(){
    currentSong--
    if(currentSong < 0){
        currentSong = 9
    }
    playSong()
    $("#play img").attr("src","pause.png")
}


function convertTime (secs) {
	var min = Math.floor(secs/60)
	var sec = secs % 60
	min = (min < 10) ? "0" + min : min
	sec = (sec < 10) ? "0" + sec : sec
	return (min + "." + sec)
}

function showDuration () {
	var d = Math.floor(song.duration)
	songSlider.setAttribute("max", d)
	duration.textContent = convertTime(d)
}







