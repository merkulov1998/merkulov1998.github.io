function selectRandomCard() {
  // Удаляем класс "highlight" у всех карточек
  var cards = document.getElementsByClassName("card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.remove("highlight");
  }

  // Генерируем случайное число от 0 до количества карточек минус 1
  var randomIndex = Math.floor(Math.random() * cards.length);

  // Добавляем класс "highlight" выбранной карточке
  cards[randomIndex].classList.add("highlight");

  // Выводим название выбранной карточки
  var cardTitle = cards[randomIndex].querySelector(".card-title").innerText;
  console.log("Название выбранной карточки: " + cardTitle);
}
