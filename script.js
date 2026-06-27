let images = [];
let index = 0;

function openGallery(project) {


	if (project === "dvma") {

		images = Array.from(
			{ length: 26 },
			(_, i) => `assets/dvma/slike/${i + 1}.jpg`
		);

	}


	if (project === "nu") {

		images = Array.from(
			{ length: 2 },
			(_, i) => `assets/nu/slike/${i + 1}.jpg`
		);

	}


	if (project === "rvma") {

		images = Array.from(
			{ length: 1 },
			(_, i) => `assets/rvma/slike/${i + 1}.jpg`
		);

	}


	index = 0;


	document.getElementById("modal").style.display = "block";


	loadImage();

}

function loadImage() {

	const img = document.getElementById("modalImg");


	img.style.opacity = 0;


	img.onload = function(){

		img.style.opacity = 1;

	};


	img.src = images[index];

}

function closeGallery() {
	document.getElementById("modal").style.display = "none";
}

function change(dir) {
	index += dir;

	if (index < 0) index = images.length - 1;
	if (index >= images.length) index = 0;

	loadImage();
}

function toggleProject(event, button) {

	event.stopPropagation();

	const details = button.nextElementSibling;
	const project = button.closest(".project");


	details.classList.toggle("open");
	project.classList.toggle("expanded");


	if (details.classList.contains("open")) {
		button.innerHTML = "Hide details ↑";
	}
	else {
		button.innerHTML = "View details ↓";
	}

}



function toggleProjectCard(project) {

	const button = project.querySelector(".expand-btn");

	const details = project.querySelector(".project-details");


	details.classList.toggle("open");
	project.classList.toggle("expanded");


	if (details.classList.contains("open")) {
		button.innerHTML = "Hide details ↑";
	}
	else {
		button.innerHTML = "View details ↓";
	}

}

// =========================
// MOBILE SWIPE GALLERY
// =========================

let touchStartX = 0;
let touchEndX = 0;


const modalImage = document.getElementById("modalImg");


modalImage.addEventListener("touchstart", function(event) {

	touchStartX = event.changedTouches[0].screenX;

});


modalImage.addEventListener("touchend", function(event) {

	touchEndX = event.changedTouches[0].screenX;

	handleSwipe();

});


function handleSwipe() {

	const swipeDistance = touchEndX - touchStartX;


	// minimum swipe distance
	if (Math.abs(swipeDistance) < 50) {
		return;
	}


	// swipe left = next
	if (swipeDistance < 0) {

		change(1);

	}


	// swipe right = previous
	else {

		change(-1);

	}

}