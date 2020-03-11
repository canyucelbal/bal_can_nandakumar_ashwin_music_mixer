(() => {
	const droparea = document.querySelector('.mainDropArea'),
	dropZones = document.querySelectorAll('.dropArea'),
	iconrow = document.querySelectorAll('.IconRow img'),

	musicIcons = document.querySelector('.musicIconsArea');



function allowDrag(event) {
	console.log ('dragged an image');

event.dataTransfer.setData("text/plain", dropZones.id);
}


function allowDragOver(event) {
	event.preventDefault();
	console.log ('dragged over a drop zone');
}

function allowDrop(event) {
	console.log("drop");
  let draggedImage = event.dataTransfer.getData("text/plain", dropZones.id);

 if (droparea.childNodes.length == 0){

 	dropZones.appendChild(document.querySelector(`#${draggedImage}`));
 }
 else if (this.childNodes.length > 0){
 	this.appendChild(document.querySelector(`#${draggedImage}`));

 	musicIcons.appendChild(iconrow.firstChild);
 }
 }



iconrow.forEach(piece => piece.addEventListener('dragstart', allowDrag));

dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));	

})();