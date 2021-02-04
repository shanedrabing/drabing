var source = "../data/Flechte.mp3"
var audio = document.createElement("audio");

audio.autoplay = true;

audio.load()
audio.addEventListener("load", audio.play, true);
audio.src = source;
