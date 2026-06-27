let images = [];
let index = 0;

function openGallery(project) {
	if (project === "dvma") {
		images = Array.from({ length: 26 }, (_, i) => `assets/dvma/slike/${i + 1}.jpg`);
	}

	else if (project === "nu") {
		images = Array.from({ length: 2 }, (_, i) => `assets/nu/slike/${i + 1}.jpg`);
	}

	else if (project === "rvma") {
		images = Array.from({ length: 1 }, (_, i) => `assets/rvma/slike/${i + 1}.jpg`);
	}

	index = 0;
	document.getElementById("modal").style.display = "block";
	document.getElementById("modalImg").src = images[0];
}

function closeGallery() {
	document.getElementById("modal").style.display = "none";
}

function change(dir) {
	index += dir;

	if (index < 0) index = images.length - 1;
	if (index >= images.length) index = 0;

	document.getElementById("modalImg").src = images[index];
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

