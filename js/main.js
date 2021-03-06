(() => {
	const droparea = document.querySelector('.mainDropArea'),
	dropZones = document.querySelectorAll('.dropArea'),
	iconrow = document.querySelectorAll('.IconRow img'),
	audioElement = document.querySelector('audio'),
	musicIcons = document.querySelector('.musicIconsArea'),
	pause = document.querySelector('.pause'),
	play = document.querySelector('.play'),
	refresh = document.querySelector('.refresh');

let globalPaused = false;	

const pieceNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];

function playTrack(track) {
 
console.log("playing audio");
  audioElement.src = `audio/${track}.wav`;
  if (globalPaused) {
    console.log('paused');
    resumeTrack();
    return;

  }
 audioElement.load();
                 let audio = document.createElement('audio');

audio.addEventListener("ended", function(){
  document.body.removeChild(audio);
});

    audio.src=`audio/${track}.wav`;

    document.body.appendChild(audio);
    audio.play();
    audio.volume = 0.5;
audioElement.play();
audioElement.volume = 0.5;

  }

function getref(){
	pieceNames.forEach((piece, index) =>{
	iconrow[index].src = `images/icon_jpg_files/${"music_icons" + piece}.svg`;
	iconrow[index].id = `${"music_icons" + piece}`;
});
}

function resetPieces(){
	for (let i=0; i < dropZones.length; i++){
		if(dropZones[i].childNodes.length != 0)
		musicIcons.appendChild(dropZones[i].firstChild);
	}
}

function allowDrag(event) {
	console.log ('dragged an image');

event.dataTransfer.setData("text/plain", this.id);
event.dataTransfer.setData("trackref", this.dataset.musicref);
}


function allowDragOver(event) {
	event.preventDefault();
	console.log ('dragged over a drop zone');
}

function allowDrop(event) {

	console.log("drop");
	let trackref = event.dataTransfer.getData("trackref");
  let draggedImage = event.dataTransfer.getData("text/plain", this.id);

 if (this.childNodes.length == 0){

 	this.appendChild(document.querySelector(`#${draggedImage}`));
 }
 else if (this.childNodes.length > 0){
 	this.appendChild(document.querySelector(`#${draggedImage}`));

 	musicIcons.appendChild(iconrow.firstChild);
 }
playTrack(trackref);
}



function pauseTrack() {
  audioElement.pause();
  globalPaused = true;
}

function playMusic() {
  audioElement.play();
}

function refreshTrack() {
audioElement.currentTime = 0;
}


iconrow.forEach(piece => piece.addEventListener('click', getref));

iconrow.forEach(piece => piece.addEventListener('click', resetPieces));

iconrow.forEach(piece => piece.addEventListener('dragstart', allowDrag));
	getref();
dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));	
pause.addEventListener('click', pauseTrack);	
play.addEventListener('click', playMusic);	
refresh.addEventListener('click',refreshTrack);
})();