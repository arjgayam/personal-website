const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

const secret = "pragna";
let typedBuffer = "";
let heartTimer = null;

const heartOverlay = document.createElement("div");
heartOverlay.className = "heart-pop";
heartOverlay.innerHTML = `<span class="heart-pop__emoji">❤️</span>`;
document.body.appendChild(heartOverlay);

const showHeart = () => {
  heartOverlay.classList.add("is-visible");
  clearTimeout(heartTimer);
  heartTimer = setTimeout(() => {
    heartOverlay.classList.remove("is-visible");
  }, 1000);
};

document.addEventListener("keydown", (event) => {
  if (event.metaKey || event.ctrlKey || event.altKey || event.key.length !== 1) {
    return;
  }

  typedBuffer = (typedBuffer + event.key.toLowerCase()).slice(-secret.length);

  if (typedBuffer === secret) {
    showHeart();
  }
});
