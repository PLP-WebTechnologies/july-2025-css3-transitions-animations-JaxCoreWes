// simple add function (parameters + return)
function addNumbers(a, b) {
  return a + b;
}

let globalCounter = 0;

// shows local vs global scope
function incrementCounter() {
  let localCounter = 1;
  globalCounter++;
  console.log("Local:", localCounter, "| Global:", globalCounter);
}

// reusable function for triggering an animation class
function toggleAnimation(elementId, className) {
  const el = document.getElementById(elementId);
  el.classList.remove(className);
  void el.offsetWidth; // restart trick
  el.classList.add(className);
}

// modal toggle
function toggleModal(show) {
  const modal = document.getElementById("modal");
  if (show) {
    modal.style.display = "block";
    modal.classList.add("show");
  } else {
    modal.classList.remove("show");
    setTimeout(() => { modal.style.display = "none"; }, 500);
  }
}

// animate box
document.getElementById("triggerBtn").addEventListener("click", () => {
  toggleAnimation("animatedBox", "animate");
  incrementCounter();
  console.log("Sum example:", addNumbers(globalCounter, 5));
});

// modal actions
document.getElementById("toggleModalBtn").addEventListener("click", () => {
  toggleModal(true);
});

document.getElementById("closeModal").addEventListener("click", () => {
  toggleModal(false);
});

window.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    toggleModal(false);
  }
});
