'use strict';
/* Задание на урок:

1) Создать переменную personalMovieDB.count и в неё поместить ответ от пользователя на вопрос:
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

// const personalMovieDB.count = +prompt('How many movies did you already watch?', '');

// let personalMovieDB = {
// 	count: personalMovieDB.count,
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

// 'use strict';

// Код возьмите из предыдущего домашнего задания


// const personalMovieDB.count = +prompt('How many movies did you already watch?', '');

// let personalMovieDB = {
// 	count: personalMovieDB.count,
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



let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies did you already watch?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies did you already watch?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Latest watched film?', '').trim(),
                  b = prompt('How would you rate it?', '').trim();
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
        alert('Просмотрено мало фильмов');
        } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Error');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`).trim().toLowerCase;

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        })
    }
};

