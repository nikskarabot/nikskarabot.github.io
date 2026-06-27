let images = [];
let index = 0;


/* =========================
   GALLERY
========================= */


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


	document.getElementById("modal").style.display = "flex";


	loadImage();

}



function loadImage() {


	const img = document.getElementById("modalImg");


	img.style.opacity = 0;


	const preload = new Image();


	preload.onload = function() {

		img.src = preload.src;

		img.style.opacity = 1;

	};


	preload.src = images[index];



	// preload next image for smoother switching

	if (images.length > 1) {

		let nextIndex = (index + 1) % images.length;


		let nextImage = new Image();

		nextImage.src = images[nextIndex];

	}

}



function closeGallery() {

	document.getElementById("modal").style.display = "none";

}



function change(dir) {


	index += dir;


	if (index < 0) {

		index = images.length - 1;

	}


	if (index >= images.length) {

		index = 0;

	}


	loadImage();

}






/* =========================
   PROJECT EXPANSION
========================= */


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






/* =========================
   MOBILE SWIPE
========================= */


let touchStartX = 0;

let touchEndX = 0;



const modalImage = document.getElementById("modalImg");



if (modalImage) {


	modalImage.addEventListener(
		"touchstart",
		function(event) {

			touchStartX =
			event.changedTouches[0].screenX;

		}
	);



	modalImage.addEventListener(
		"touchend",
		function(event) {

			touchEndX =
			event.changedTouches[0].screenX;


			handleSwipe();

		}
	);

}





function handleSwipe() {


	const distance = touchEndX - touchStartX;



	if (Math.abs(distance) < 50) {

		return;

	}



	// swipe left

	if (distance < 0) {

		change(1);

	}


	// swipe right

	else {

		change(-1);

	}

}





/* =========================
   KEYBOARD CONTROLS
========================= */


document.addEventListener(
"keydown",
function(event) {


	const modal =
	document.getElementById("modal");



	if (modal.style.display !== "flex") {

		return;

	}



	if (event.key === "ArrowRight") {

		change(1);

	}



	if (event.key === "ArrowLeft") {

		change(-1);

	}



	if (event.key === "Escape") {

		closeGallery();

	}


});