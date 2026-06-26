let images = [];
let index = 0;

function openGallery(project) {
  images = [];

  const base = `assets/${project}/slike`;

  // try loading images 1–20 (adjust if needed)
  for (let i = 1; i <= 20; i++) {
    images.push(`${base}/${i}.jpg`);
  }

  index = 0;

  document.getElementById("modal").style.display = "block";
  document.getElementById("modalImg").src = images[index];
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