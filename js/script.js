/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// 'use strict';

// const numberOfFilms = +prompt('How many movies did you already watch?', '');

// let personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };


// const a = prompt('Latest watched film?', ''),
// 	  b = prompt('How would you rate it?', ''),
// 	  c = prompt('Latest watched film?', ''),
// 	  d = prompt('How would you rate it', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания


// const numberOfFilms = +prompt('How many movies did you already watch?', '');

// let personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Latest watched film?', ''),
// 	      b = prompt('How would you rate it?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {

//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// let i = 0;
// while (i < 2) {
//     const a = prompt('Latest watched film?', ''),
// 	      b = prompt('How would you rate it?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//     }
// }

// let i = 0;
// do {
//     const a = prompt('Latest watched film?', ''),
//           b = prompt('How would you rate it?', '');

//     if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//     }
// } while (i < 2);

// if (personalMovieDB.count < 10) {
//     alert('Просмотрено мало фильмов');
// } else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
//     alert('Вы классический зритель');
// } else if (personalMovieDB.count > 30) {
//     alert('Вы киноман');
// } else {
//     alert('Error');
// }

// console.log(personalMovieDB);


// // Место для первой задачи
// function sayHello(name) {
//     return "Hello, " + name;
// }
// sayHello('Artur');

// // Место для второй задачи
// function returnNeighboringNumbers(num) {
//     return console.log([num - 1, num, num + 1])
// }
// returnNeighboringNumbers(5);

// // Место для третьей задачи
// function getMathResult(num, count) {
//     let result = '';
//     if (typeof count != 'number' || count <= 0) {
//         return num
//     } else {
//         for (let i = 1; i <= count; i++) {
//             result += num * i;
//             if (i !== count) result += '---';
//         }
//         console.log(result);
//         return result
//     }
// }

// getMathResult(10, 4);

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// 'use strict';

// // Код возьмите из предыдущего домашнего задания

// let numberOfFilms;

// function start () {
//     numberOfFilms = +prompt('How many movies did you already watch?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('How many movies did you already watch?', '');
//     }
// }

// start();

// let personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };




// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Latest watched film?', '').trim(),
//               b = prompt('How would you rate it?', '').trim();
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//     alert('Просмотрено мало фильмов');
//     } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
//         alert('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         alert('Вы киноман');
//     } else {
//         alert('Error');
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB();

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`).trim();
//     }
// }

// writeYourGenres();


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs() {
//         const { languages } = this.skills;
//         return `Мне ${this.age} и я владею языками: ${languages.join(' ').toUpperCase()}`;
//     }
// };

// console.log(personalPlanPeter.showAgeAndLangs());

// function showExperience(plan) {
//     const { exp } = plan.skills;
//     return exp;
// };

// function showProgrammingLangs(plan) {
//     const { programmingLangs} = plan.skills;
    
//     let result = '';

//     for (let key in programmingLangs) {
//         result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }
//     return result;
// };

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if (arr.length === 0) {
//         return `Семья пуста`;
//     }

//     let result = arr.join(' ');

//     return `Семья состоит из: ${result}`;
// }

// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => console.log(city.toLowerCase()));
// }

// standardizeStrings(favoriteCities);


const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== 'string') {
        return "Ошибка!";
    }

    return str.split('').reverse().join('');
};

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

const allCurrencies = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return "Нет доступных валют";
    }

    return `Доступные валюты:\n${arr.filter(curr => curr !== missingCurr).join('\n')}`.trimEnd();
}

console.log(availableCurr(allCurrencies, 'CNY'));