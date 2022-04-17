// Menu Toglle
const menuButton = document.querySelector(".bars");
let menu = document.querySelector(".list");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Make A Note In Bookmarks
let bookmarkIcon = document.querySelectorAll(".favorite img");

bookmarkIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    menu.classList.remove("open");
    if (icon.getAttribute("src") == "/images/bookmark-fill.svg") {
      icon.src = "/images/bookmark.svg";
    } else {
      icon.src = "/images/bookmark-fill.svg";
      //   alert("This Note Is Now In The Favorites");
    }
  });
});
