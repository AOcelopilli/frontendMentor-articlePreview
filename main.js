const d = document,
  $btnShare = d.getElementById("btn-share"),
  $shareProfile = d.querySelector("[data-share-profile]"),
  $shareMedia = d.querySelector("[data-share-media]");

d.addEventListener("click", (e) => {
  if (e.target == $btnShare) {
    $btnShare.classList.toggle("active");
    $shareMedia.classList.toggle("active");
  }
});
