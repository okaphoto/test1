document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      if (img.classList.contains("enlarged")) {
        img.classList.remove("enlarged");
      } else {
        document.querySelectorAll(".enlarged").forEach(enlargedImg => {
          enlargedImg.classList.remove("enlarged");
        });
        img.classList.add("enlarged");
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target.tagName !== "IMG" && document.querySelector(".enlarged")) {
      document.querySelector(".enlarged").classList.remove("enlarged");
    }
  });
});
