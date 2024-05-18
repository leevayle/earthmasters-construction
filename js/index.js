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

document.getElementById("sidenav").addEventListener('click', () => {
    Hidesidebar();
});

// Add scroll event listener to hide the side navigation bar on scroll
window.addEventListener("scroll", handleScroll);
