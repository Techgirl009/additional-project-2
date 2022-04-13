var peter_pan = "";
function preload()
{
	peter_pan = loadSound("peter_pan.mp3");
}

function play()
{
     peter_pan.play();	
}
//Define stop_music() function called on click of "Stop Music" and write code to stop the audio from playing inside this function (Hint: use p5 stop() function to stop the audio)
function stop_music()
{
     peter_pan.stop();	
}


function setup(){
}