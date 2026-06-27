let images = [];
let index = 0;

function openGallery(project) {
	if (project === "dvma") {
		images = Array.from({ length: 51 }, (_, i) => `assets/dvma/slike/${i + 1}.jpg`);
	}

	if (project === "makey") {
		images = [
			"assets/makey/slike/1.jpg",
			"assets/makey/slike/2.jpg"
		];
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