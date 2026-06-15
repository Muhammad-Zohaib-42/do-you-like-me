const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const card = document.querySelector(".card");
const container = document.querySelector(".container")

noBtn.addEventListener("mouseenter", (e) => {
  noBtn.style.transform = `translate(${Math.floor(Math.random() * 200)}px, ${Math.floor(Math.random() * 200)}px)`;
});

noBtn.addEventListener("mousemove", (e) => {
  noBtn.style.transform = `translate(${Math.floor(Math.random() * 200)}px, ${Math.floor(Math.random() * 200)}px)`;
});

yesBtn.addEventListener("click", (e) => {
  card.innerHTML = `
        <div>
            <h2>Yes I Knew It ❤︎</h2>
            <p>Please UnBlock Me!</p>
        </div>
    `;

  setInterval(() => {
    generateCircles();
    removeCircles();
  }, 1000);
});

let circles = [];

function generateCircles() {
  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= 20; i++) {
    const div = document.createElement("div");
    div.className = "circle";
    div.style.height = Math.floor(Math.random() * 30) + "px";
    div.style.left = Math.floor(Math.random() * 100) + "%";
    div.innerText = "❤︎"
    div.style.animationDuration = Math.floor(Math.random() * 5) + "s";

    fragment.appendChild(div);
    circles.push(div);
  }

  container.appendChild(fragment);
}

function removeCircles() {
  circles.forEach((circle) => {
    const circleRectTop = circle.getBoundingClientRect().y;

    if (circleRectTop <= -20) {
      circle.remove();
      circles.splice(circles.indexOf(circle), 1);
    }
  });
}
