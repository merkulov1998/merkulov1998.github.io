<?php

/** @var yii\web\View $this */

$this->title = Yii::$app->name;
?>

<div id="app">
    <div class="container">
            <div v-for="cafe in cafes" :key="cafe.id" class="card">
      <img :src="cafe.imageUrl" alt="" class="card-img">
           <div class="rectangle"></div>
           <h5 class="card-title">{{ cafe.name }}</h5>
          <p class="card-address">Адрес: {{ getAddress(cafe.address) }}</p>
          <p class="card-cuisine">Кухня: {{ getCuisine(cafe.cuisine) }}</p>
          <p class="card-lunch">Бизнес-ланч: {{ getLunch(cafe.lunch) }}</p>
      </div>
  </div>
  <button onclick="selectRandomCard()" class="choose">Выбрать случайную карточку</button>
    <h2>Добавить комментарий</h2>
    <form @submit.prevent="addComment">
      <textarea v-model="newComment.text" rows="4" cols="50" placeholder="Введите комментарий"></textarea>
      <button type="submit">Отправить</button>
    </form>

    <h2>Список комментариев</h2>
    <ul v-if="comments.length !== 0">
      <li v-for="comment in comments" :key="comment.id">{{ comment.text }}</li>
    </ul>
    <div v-else="comments.length === 0">Комментариев пока нет. Добавьте первый!</div>
  </div>
