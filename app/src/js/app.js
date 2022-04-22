let main = document.querySelector("main");
// Menu Toglle
const menuButton = document.querySelector(".bars");
let menu = document.querySelector(".list");

function openMenu() {
  menu.classList.toggle("open");
}

menuButton.addEventListener("click", openMenu);

// Search For Notes
const searchIcon = document.querySelector(".search");
let searchSection = document.querySelector(".search-section");
let SearchbackButton = document.querySelector(".back");

searchIcon.addEventListener("click", searchActions);

function searchActions() {
  document.body.style.overflow = "hidden";

  searchSection.classList.add("show");
  SearchbackButton.addEventListener("click", closeSearchBar);
  function closeSearchBar() {
    searchSection.classList.remove("show");
    document.body.style.overflow = "visible";
  }
}

// Create A Note

// Elements

const newIcon = document.querySelector(".new-circle");
const titleInput = document.querySelector(".title-input");
const noteTextarea = document.getElementById("note-textarea");
const createButton = document.querySelector(".create-note");
const newNoteListTab = document.querySelector(".new-tab");
let createNoteSection = document.querySelector(".create-note-section");
let chengedNumber = document.querySelector(".of-number");
let maxNumberAlert = document.querySelector(".max-letter-alert");
let favoriteNoteSection = document.querySelector(".favorite-notes-section");

newIcon.addEventListener("click", startANote);
newNoteListTab.addEventListener("click", startANote);

function startANote() {
  document.body.style.overflow = "hidden";
  createNoteSection.classList.add("show");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

createButton.addEventListener("click", createNote);

function createNote() {
  if (titleInput.value == "" || noteTextarea.value == "") {
    const closeAlert = document.querySelector(".close-alert");
    function closeTheAlert() {
      closeAlert.parentElement.classList.add("show");
      console.log(closeAlert.parentElement);
    }
    closeAlert.addEventListener("click", closeTheAlert);
  } else {
    // min Note
    let noteBuild = `<div class="note-box">
        <div class="head">
          <div class="title">
            <h3>${titleInput.value}</h3>
          </div>
          <div class="bookmark">
            <button class="favorite">
              <img src="/images/bookmark.svg" alt="" />
            </button>
          </div>
        </div>
        <div class="min-p">
          <p>${noteTextarea.value}</p>
        </div>
      </div>`;

    document.body.style.overflow = "visible";
    createNoteSection.classList.remove("show");
    main.innerHTML += noteBuild;

    titleInput.value = "";
    noteTextarea.value = "";
    chengedNumber.textContent = "0";
    maxNumberAlert.classList.remove("show");

    // Make A Note In Bookmarks
    let bookmarkIcon = document.querySelectorAll(".favorite img");

    bookmarkIcon.forEach((icon) => {
      function makeItFavorite() {
        menu.classList.remove("open");
        if (icon.getAttribute("src") == "/images/bookmark-fill.svg") {
          icon.src = "/images/bookmark.svg";
        } else {
          icon.src = "/images/bookmark-fill.svg";
          let noteBox = document.querySelector(".note-box");
          favoriteNoteSection.appendChild(noteBox);
        }
      }
      icon.addEventListener("click", makeItFavorite);
    });
  }
}

noteTextarea.oninput = lettersNumber;
function lettersNumber() {
  const textArray = noteTextarea.value.split("");
  chengedNumber.textContent = textArray.length;
  if (Number(chengedNumber.textContent) >= 600) {
    maxNumberAlert.classList.add("show");
  } else {
    maxNumberAlert.classList.remove("show");
  }
}
const favoriteBackButton = document.querySelector(".create-back");

favoriteBackButton.addEventListener("click", () => {
  createNoteSection.classList.remove("show");
});

const favoriteTab = document.querySelector(".fav-tab");

favoriteTab.addEventListener("click", () => {
  favoriteNoteSection.classList.add("show");
});
