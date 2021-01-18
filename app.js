// Elements to animate
const container = document.querySelector(".card-container");
const card = document.querySelector(".card");
const cardInfo = document.querySelector(".card-info");
const cardImage = document.querySelector(".card-image");
const cardIcon = document.querySelector(".card-image-icon--wrapper");
const title = document.querySelector(".card-title");
const price = document.querySelector(".card-price");
const cardButtons = document.querySelector(".card-button-group");
const description = document.querySelector(".card-description");
const sizes = document.querySelector(".card-selection-group");

// Animation variables
const translateZNumber = 20;

// Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
  let yAxis = (window.innerWidth / 2 - e.pageY) / 40;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = `all 0.035s ease-in`;

  // POP
  cardImage.style.transform = `translateZ(${
    translateZNumber + 100
  }px) rotateZ(10deg)`;
  cardIcon.style.transform = `translateZ(${translateZNumber}px)`;
  title.style.transform = `translateZ(${translateZNumber + 60}px)`;
  cardInfo.style.transform = `translateZ(${translateZNumber + 50}px)`;
  description.style.transform = `translateZ(${translateZNumber + 40}px)`;
  sizes.style.transform = `translateZ(${translateZNumber + 30}px)`;
  cardButtons.style.transform = `translateZ(${translateZNumber + 50}px)`;
});

// Animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = `all 0.5s ease`;
  // POP
  title.style.transform = "translateZ(0)";
  cardImage.style.transform = "translateZ(0) ";
  cardInfo.style.transform = "translateZ(0)";
  description.style.transform = "translateZ(0)";
  cardButtons.style.transform = "translateZ(0)";
  sizes.style.transform = "translateZ(0)";
  cardIcon.style.transform = "translateZ(0)";
});
