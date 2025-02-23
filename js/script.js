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

'use strict';

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

// console.log( NaN || 2 || undefined ); //2


// console.log( NaN && 2 && undefined ); //nan


// console.log( 1 && 2 && 3 ); //3


// console.log( !1 && 2 || !3 ); //false


// console.log( 25 || null && !3 ); //25


// console.log( NaN || null || !3 || undefined || 5); //5


// console.log( NaN || null && !3 && undefined || 5); //5


// console.log( 5 === 5 && 3 > 1 || 5); //true


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// console.log(hamburger && cola || fries === 3 && nuggets);


// for (let i = 0; i < 3; i++) {
// 	console.log(i);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(j);
// 	}
// }

//make a triangle

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

// 	for (let j = 0; j < i; j++) {
	
// 		result += '*';
// 	}

// 	result += '\n';
// }

// console.log(result);


// // Место для первой задачи
// function firstTask() {
//     // Пишем решение вот тут
//     for (let i = 5; i <=10; i++) {
// 		console.log(i);
// 	}
    
// }

// // Место для второй задачи
// function secondTask() {
//     // Пишем решение вот тут
//     for (let i = 20; i >=10; i--) {
// 		if (i === 13) {
// 			break;
// 		}
// 		console.log(i);
// 	}
    
// }

// // Место для третьей задачи
// function thirdTask() {
//     // Пишем решение вот тут
//     for ( let i = 2; i <= 10; i++) {
// 		if (i % 2 === 0) {
// 			console.log(i);
// 		}
// 	}
    
// }

// // Место для четвертой задачи

// // Цикл, который нужно переписать:

// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// function fourthTask() {
//     // Пишем решение вот тут
    
// 	let i = 2;
// 	while (i <= 16) {
// 		if (i % 2 !== 0) {
// 			console.log(i);
// 		}
// 		i++;
// 	}

    
// }

// // Место для пятой задачи

// function fifthTask() {
//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
    
//     for (let i = 5; i <= 10; i++) {
// 		arrayOfNumbers[arrayOfNumbers.length] = i;
// 	}
// 	console.log(arrayOfNumbers);

//     // Не трогаем
//     return arrayOfNumbers;
// }