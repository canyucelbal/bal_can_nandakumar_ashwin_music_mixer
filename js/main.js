(() => {
	const droparea = document.querySelector('.mainDropArea'),
	dropZones = document.querySelectorAll('.dropArea'),
	iconrow = document.querySelectorAll('.IconRow img'),
	audioElement = document.querySelector('audio'),
	musicIcons = document.querySelector('.musicIconsArea');


const pieceNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];

function playTrack() {
 
console.log("playing audio");
  let audioSource = iconrow.dataset.musicref;
  audioElement.src = `audio/${audioSource}.wav`;

 audioElement.load();
audioElement.play();
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
}


function allowDragOver(event) {
	event.preventDefault();
	console.log ('dragged over a drop zone');
}

function allowDrop(event) {
	getref();
	console.log("drop");
  let draggedImage = event.dataTransfer.getData("text/plain", this.id);

 if (this.childNodes.length == 0){

 	this.appendChild(document.querySelector(`#${draggedImage}`));
 }
 else if (this.childNodes.length > 0){
 	this.appendChild(document.querySelector(`#${draggedImage}`));

 	musicIcons.appendChild(iconrow.firstChild);
 }
playTrack();
}

iconrow.forEach(piece => piece.addEventListener('click', getref));

iconrow.forEach(piece => piece.addEventListener('click', resetPieces));

iconrow.forEach(piece => piece.addEventListener('dragstart', allowDrag));

dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));	

})();