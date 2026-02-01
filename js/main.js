/* =====================
   IMAGE 3D TILT
===================== */
const tilt = document.querySelector(".tilt img");

tilt.addEventListener("mousemove", (e) => {
  const rect = tilt.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = ((y / rect.height) - 0.5) * 10;
  const rotateY = ((x / rect.width) - 0.5) * -10;

  tilt.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

tilt.addEventListener("mouseleave", () => {
  tilt.style.transform = "rotateX(0) rotateY(0)";
});

/* =====================
   CURSOR GLOW
===================== */
const hero = document.getElementById("hero");
const glow = document.querySelector(".glow");

hero.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

/* ======================
   SCROLL REVEAL
====================== */
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

cards.forEach(card => observer.observe(card));
