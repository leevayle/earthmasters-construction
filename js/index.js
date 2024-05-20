function Showsidebar() {
    document.getElementById("sidenav").style.display = "flex";
    document.getElementById("sidenav").style.position = "fixed";
    document.getElementById("mobilenavcont").style.left = "0%";
}

function Hidesidebar() {
    document.getElementById("sidenav").style.display = "none";
    document.getElementById("mobilenavcont").style.left = "-90%";
}

function handleScroll() {
    Hidesidebar();
}

document.getElementById("close").addEventListener("click", () => {
    Hidesidebar();
});

document.getElementById("open").addEventListener("click", () => {
    Showsidebar();
});

// document.getElementById("sidenav").addEventListener('click', () => {
//     Hidesidebar();
// });

// Add scroll event listener to hide the side navigation bar on scroll
// window.addEventListener("scroll", handleScroll);


const homeElement = document.querySelector('.home');
const images = [ // Replace with your image URLs
  "url(../images/bgs/man-looking.jpg)",
  "url(../images/bgs/bulldozer.jpg)",
  "url(../images/bgs/town city.jpg)",
  "url(../images/bgs/unfinished tower.jpg)",
];

let currentImageIndex = 0;

function changeImage() {
  homeElement.classList.add('fade-out'); // Add a class for fading out

  setTimeout(() => {
    homeElement.style.backgroundImage = images[currentImageIndex];
    homeElement.classList.remove('fade-out'); // Remove fade-out class
    homeElement.classList.add('fade-in'); // Add a class for fading in
  }, 1000); // Delay after fade-out for transition effect (adjust as needed)

  currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeImage, 5000); // Change image every 5 seconds

// Initial image display
changeImage();

