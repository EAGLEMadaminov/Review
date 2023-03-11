const reviews = [
  {
    name: "Keeley Bosco",
    email: "katlyn@jenkinsmaggio.net",
    timestamp: "2015-04-25 13:57:36 +0700",
    creditcard: "1228-1221-1221-1431",
    img: "https://picsum.photos/id/64/100",
    text: "We are glad to introduce our brand new Tax Guide App, a perfect solution for individual tax management our clients have been waiting for. It is available now for all iOS and Android device owners.",
  },
  {
    name: "London Scout",
    email: "juvenal@johnston.name",
    timestamp: "2015-04-25 09:02:04 +0700",
    creditcard: "1228-1221-1221-1431",
    img: "https://picsum.photos/id/838/100",
    text: "Since 2008, I’ve been providing my clients with quality photography and retouching services. Some of my works were awarded on a national level. Below are some facts about me.",
  },
  {
    name: "Gonzalo Poblete",
    email: null,
    timestamp: "2015-04-25 13:16:03 +0700",
    creditcard: null,
    img: "https://picsum.photos/id/453/100",
    text: "I was so happy with the pictures Jonathan took. He was very kind and patient with my two-month old and my energetic 6 y.o. children. I will be going to Jonathan from now on!",
  },
  {
    name: "Benjamin Combs",
    email: "emery_kunze@rogahn.net",
    timestamp: "2015-04-25 14:22:22 +0700",
    creditcard: "1228-1221-1221-1431",
    img: "https://picsum.photos/id/823/100",
    text: "I offer high-quality photography & retouch services to individual and corporate clients all over the US.",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

//show prev person
prevBtn.addEventListener("click", function () {
  currentItem -= 1;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show next person
nextBtn.addEventListener("click", function () {
  currentItem += 1;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

//show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});

// show person by item
function showPerson() {
  const item = reviews[currentItem];
  author.textContent = item.name;
  img.src = item.img;
  info.textContent = item.text;
}
