// ================================================
// My Space
// Language System — Chapter 0
// ================================================

let currentLanguage = "EN";

const chapterImage = document.querySelector("#chapter-image");

const englishButton = document.querySelector(
    ".language-button:first-child"
);

const frenchButton = document.querySelector(
    ".language-button:last-child"
);

function setLanguage(language) {
    currentLanguage = language;

    englishButton.classList.remove("active");
    frenchButton.classList.remove("active");

    if (language === "EN") {
        englishButton.classList.add("active");

        chapterImage.src = "assets/EN/Images/Chapter0-EN.png";
        chapterImage.alt = "My Space — Chapter 0";

        document.documentElement.lang = "en";
    } else {
        frenchButton.classList.add("active");

        chapterImage.src = "assets/FR/Images/Chapter0-FR.png";
        chapterImage.alt = "My Space — Chapitre 0";

        document.documentElement.lang = "fr";
    }

    console.log("Language:", language);
}

englishButton.addEventListener("click", () => {
    setLanguage("EN");
});

frenchButton.addEventListener("click", () => {
    setLanguage("FR");
});

setLanguage("EN");