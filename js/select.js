// Récupérez les éléments du DOM
const lienHiragana = document.getElementById("hiragana");
const lienKatakana = document.getElementById("katakana");
const lienKanji = document.getElementById("kanji");
const divHiragana = document.getElementById("box__hiragana");
const divKatakana = document.getElementById("box__katakana");
const divKanji = document.getElementById("box__kanji");

// Cachez toutes les divs au départ
divHiragana.style.display = "none";
divKatakana.style.display = "none";
divKanji.style.display = "none";

// Ajoutez des gestionnaires d'événements pour les liens
lienHiragana.addEventListener("click", function() {
  divHiragana.style.display = "flex";
  divKatakana.style.display = "none";
  divKanji.style.display = "none";
});

lienKatakana.addEventListener("click", function() {
  divHiragana.style.display = "none";
  divKatakana.style.display = "flex";
  divKanji.style.display = "none";
});

lienKanji.addEventListener("click", function() {
  divHiragana.style.display = "none";
  divKatakana.style.display = "none";
  divKanji.style.display = "block";
});
