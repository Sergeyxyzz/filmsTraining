/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const ad = document.querySelector('.promo__adv')
const ads = ad.querySelectorAll('img')

movieDB.movies.sort()

console.log(movieDB.movies)

ads.forEach(elem => {
    elem.remove()
})

const genre = document.querySelector('.promo__genre')
genre.textContent = 'ДРАМА'

const promo__bg = document.querySelector('.promo__bg')
promo__bg.style.cssText = `background: url('img/bg.jpg')`

const promoInteractive = document.querySelector('.promo__interactive-list')

const div = document.createElement('div')

let str = ''

movieDB.movies.forEach((elem, i) => {
    str += `<li class="promo__interactive-item">${++i} ${elem}
    <div class="delete"></div></li>`
})

div.innerHTML = `
    <ul class="promo__interactive-list">
        ${str}
    </ul>
    `

promoInteractive.replaceWith(div)