
// Function to redirect user when clicking on view more services
function redirectToPage() {
  window.location.href = "./services.html"; // replace with your target URL
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("view-more");
  if (button) {
      button.onclick = redirectToPage;
  }
});
