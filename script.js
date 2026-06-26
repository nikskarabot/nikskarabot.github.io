let images = [];
let index = 0;

function openGallery(project) {
  images = [];

  // assume images are numbered 1–10 (simple + fast)
  for (let i = 1; i < 10; i++) {
    const img = "assets/dvma/slike/${i}.jpg";
    images.push(img);
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