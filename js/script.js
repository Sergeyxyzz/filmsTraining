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

let div = document.createElement('div')
let str = ''

const createList = () => {
    movieDB.movies.forEach((elem, i) => {
        str += `<li class="promo__interactive-item">${++i} ${elem.length > 15 ? elem.slice(0, 15) + '...' : elem}
        <div class="delete"></div></li>`
    })
    
    div.innerHTML = `
        <ul class="promo__interactive-list">
            ${str}
        </ul>
        `
}

createList()

promoInteractive.replaceWith(div)

const accept = document.querySelector('.add button')

const inp = document.querySelector('.adding__input')

var lovely = document.querySelector('input[type=checkbox]');   

accept.addEventListener('click', (e) => {
    e.preventDefault()
    str = ''

    movieDB.movies.push(inp.value)
    movieDB.movies.sort()
    console.log(movieDB.movies)

    if (inp.value.trim() === '') {
        movieDB.movies.shift()
        accept.removeEventListener('click')
    }

    if (lovely.checked) {
        console.log(`${inp.value} - вы добавили любиый фильм`)
    } 
    
    movieDB.movies.forEach((elem, i) => {
        str += `<li class="promo__interactive-item">${++i} ${elem.length > 15 ? elem.slice(0, 15) + '...' : elem}
        <div class="delete"></div></li>`
    })
    
    div.innerHTML = `
        <ul class="promo__interactive-list">
            ${str}
        </ul>
    `

    inp.value = ''
})


document.querySelectorAll('.delete').forEach((btn, i) => { // удалить элемент можно легко через родителя
    btn.addEventListener('click', () => {
        btn.parentElement.remove()
        movieDB.movies.splice(i, 1)
    })
})

