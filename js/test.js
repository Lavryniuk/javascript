

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



// // Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++) {
// 		result[i] = arr[i];
// 	}
// 	console.log(result);
    
//     // Не трогаем
//     return result;
// }

// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
    
// 	for (let i = 0; i < data.length; i++) {
// 		if (typeof(data[i]) === 'number') {
// 			data[i] = data[i] * 2;
// 		} else if (typeof(data[i]) === 'string') {
// 			data[i] = `${data[i]} - done`;
// 		}
// 		console.log(data);
// 	}
    
//     // Не трогаем
//     return data;
// }

// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
    
//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     // //for (let i = 0; i <= data.length; i++) {
//     //     result[i] = data[data.length - 1 - i]
//     // }
    
// 	console.log(result);
//     // Не трогаем
//     return result;
// }


// //

// another triangle
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
// console.log(result);

// trening of cycles


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {            
//     result += '*';
//     }
    
//     result += "\n";
// }
// console.log(result);
// *
// **
// ***
// ****
// *****
// ******


// const lines = 5;
// let result = '';

// for (let i = 1; i <= lines; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }

// for (let i = lines - 1; i >= 1; i--) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// const lines = 5;
// let result = '';

// for (let i = 1; i <= lines; i++) {
//     for (let j = 0; j < i; j++) {
//         result += i;
//     }
//     result += '\n';
// }
// console.log(result);
// 1
// 22
// 333
// 4444
// 55555


// const lines = 5;
// let result = '';

// for (let i = 1; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += ' ';
//     }
//     for (let k = 0; k < i * 2 - 1; k++) {
//         result += i;
//     }
//     result += '\n';
// }
// console.log(result);
//     1
//    222
//   33333
//  4444444
// 555555555

// const lines = 9;
// let result = '';

// for (let i = lines; i >= 1; i--) {
//     for ( let j = 0; j < lines - i; j++) {
//         result += ' ';
//     }
//     for (let k = 0; k <= 1 * i - 1; k++) {
//         result += i;
//     }
//     result += '\n';
// }
// console.log(result);
// 999999999
//  88888888
//   7777777
//    666666
//     55555
//      4444
//       333
//        22
//         1


// const numbers = [2, 4, 6, 8, 10];
// let result = [];

// for (let i = 0; i < numbers.length; i++) {
//     result[i] = numbers[i] * 2;
// }
// console.log(result);


// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     console.log("Start: " + (amount * curr));
//     return amount * curr;
// }
// function promotion( result) {
//     console.log("With discount: " + (result * discount));
// }

// promotion(convert(500, usdCurr));


// calculator
// function calc(firstInt, secondInt, operator) {
//     if (typeof firstInt != 'number' || typeof secondInt != 'number') {
//         return "Ошибка: аргументы должны быть числами";
//     } 
//     if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
//         return "Ошибка: неизвестный оператор";
//     }

//     let result;
//     switch (operator) {
//         case '+':
//             result = firstInt + secondInt;
//             break;
//         case '-':
//             result = firstInt - secondInt;
//             break;
//         case '*':
//             result = firstInt * secondInt;
//             break;
//         case '/':
//             result = firstInt / secondInt;
//             break;
//     }
//     return result;
// }
// console.log(calc(2, 7, '*'));


// function calculateVolumeAndArea(edge) {
//     if (typeof edge != 'number' || edge <= 0 || !Number.isInteger(edge)) {
//         return "При вычислении произошла ошибка";
//     }
    
//     let volume = edge * edge * edge;
//     let surfaceArea = 6 * edge * edge;

//     return `Объем куба: ${volume}, площадь всей поверхности: ${surfaceArea}`;
// }

// console.log(calculateVolumeAndArea(10));


// function getCoupeNumber(seat) {
//     if (typeof seat != 'number' || seat < 0 || !Number.isInteger(seat)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }
//     if (seat === 0 || seat > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     return `Ваше купе: номер ${Math.ceil(seat / 4)}`;
// }

// console.log(getCoupeNumber(30));

// function getTimeFromMinutes(minutes) {
//     if (typeof minutes != 'number' || minutes < 0 || !Number.isInteger(minutes)) {
//         return "Ошибка, проверьте данные";
//     }
//     if (minutes === 0 || minutes > 600) {
//         return "Ошибка, проверьте данные";
//     }

//     let hours = Math.floor(minutes / 60);
//     let leftMinutes = minutes % 60;

//     let hourStr = '';

//     switch (hours) {
//         case 0:
//             hourStr = 'часов';
//             break;
//         case 1:
//             hourStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hourStr = 'часа';
//             break;
//         default:
//             hourStr = 'часов';

//     }
//     return `Это ${hours} ${hourStr} и ${leftMinutes} минут`;
// } 

// console.log(getTimeFromMinutes(15));

// function findMaxNumber (num1, num2, num3, num4) {
//     if (arguments.length !== 4 ||
//         typeof num1 != 'number' ||
//         typeof num2 != 'number' ||
//         typeof num3 != 'number' ||
//         typeof num4 != 'number') {
//             return 0;
//         } else {
//             return Math.max(num1, num2, num3, num4);
//         }
// }

// console.log(findMaxNumber(3, 8, 2.1, "15"));


// function fib(a) {
//     if (typeof a != 'number' || a <= 0 || !Number.isInteger(a)) {
//         return '';
//     } 
//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < a; i++) {
//         if (i + 1 === a) {
//             result += `${first}`;
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }
// console.log(fib(15));


// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;


// console.log(Object.keys(options).length);

// let counter = 0;

// for ( let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for ( let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);


// const users = {
//     count: 0,
//     active: [],
//     inactive: [],
//     addUser(name, status) {
//         if (status === 'active') {
//             this.active.push(name);
//         } else {
//             this.inactive.push(name);
//         }
//         this.count++;
//     },
//     showUsers() {
//         console.log(`Всего пользователей: ${this.count}`);
//         console.log(`Активные: ${this.active.join(', ')}`);
//         console.log(`Неактивные: ${this.inactive.join(', ')}`);
//     }
// };

// users.addUser('Alice', 'active');
// users.addUser('Mark', 'inactive');
// users.addUser('Bob', 'active');
// users.showUsers();


// const todoList = {
//     tasks: [],
//     addTask(task) {
//         this.tasks.push(task);
//         console.log(`Задача "${task}" добавлена.`);
//     },

//     removeTask(task) {
//         const index = this.tasks.indexOf(task);
//         if (index !== -1) {
//             this.tasks.splice(index, 1);
//             console.log(`Задача "${task}" удалена.`);
//         } else {
//             console.log(`Задача "${task}" не найдена`);
//         }
//     },

//     showTasks() {
//         if (this.tasks.length === 0) {
//             console.log(`Список задач пуст`);
//         } else {
//             console.log(`Ваши задачи:`);
//             this.tasks.forEach((task, index) => {
//                 console.log(`${index + 1}. ${task}`);
//             });
//         }
//     }
// };

// todoList.addTask("Выучить JS");
// todoList.addTask("Сделать проект");
// todoList.showTasks();
// todoList.removeTask("Сделать проект");
// todoList.removeTask("Сделать проект"); //check
// todoList.showTasks();

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


// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof str !== 'string') {
//         return "Ошибка!";
//     }

//     return str.split('').reverse().join('');
// };

// console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// const allCurrencies = [...baseCurrencies, ...additionalCurrencies];

// function availableCurr(arr, missingCurr) {
//     if (arr.length === 0) {
//         return "Нет доступных валют";
//     }

//     return `Доступные валюты:\n${arr.filter(curr => curr !== missingCurr).join('\n')}`.trimEnd();
// }

// console.log(availableCurr(allCurrencies, 'CNY'));


// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 5
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {

//     let shopsArea = 0;

//     data.shops.forEach(item => {
//         shopsArea += item.width * item.length;
//     });

//     let needToPay = shopsArea * data.height * data.moneyPer1m3;

//     return needToPay <= data.budget ? 'Бюджета достаточно' : 'Бюджета недостаточно';
// };

// console.log(isBudgetEnough(shoppingMallData));


// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();

//     let arrGroup = [];

//     for (let i = 0; i < 3; i++) {
//         arrGroup.push(arr.splice(0, 3));
//     };

//     arrGroup.push(`Оставшиеся студенты: ${!arr.length ? `-` : arr.join(', ')}`);
//     return arrGroup;
// }

// console.log(sortStudentsByGroups(students));


// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     !prop ? answer = 'Закрыто' : answer = 'Открыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {

//     let sum = (+fDish.price.slice(0, -1)) + (+sDish.price.slice(0, -1));

//     return sum < +average.slice(0, -1) ? 'Цена ниже средней' : 'Цена выше средней';
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[3], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors = [{name: 'Mike', age: 32}];
//     return copy;
// }

// console.log(transferWaitors(restorantData));

//recursion

// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Artur',
//         progress: 25
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }],

//         semi: {
//             students: [{
//                 name: 'Test',
//                 progress: 100
//             }]
//         }
//     }
// };

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// console.log(getTotalProgressByIteration(students));


// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     } else {
//         let total = [0, 0];

//         for (let subData of Object.values(data)) {
//             const subDataArray = getTotalProgressByRecursion(subData);
//             total[0] += subDataArray[0];
//             total[1] += subDataArray[1];
//         }

//         return total;
//     }
// }

// const result = getTotalProgressByRecursion(students);

// console.log(result[0]/result[1]);


// function factorial(n) {
//     if (n === 1 || n <=0 ) {
//         return 1;
//     } else if (isNaN(n) || !Number.isInteger(n)) {
//         return 'not a number';
//     } else {
//         return n * factorial(n - 1);
//     }
// };

// console.log(factorial(3));

function sumOfAllNumberBetween(n) {
    if (typeof n != 'number' || n <= 0) {
        return 0;
    } if (n < 1) { 
        return n;
    } else {
        return n + sumOfAllNumberBetween(n - 1);
    }
}

console.log(sumOfAllNumberBetween(5.5));

function fib(n) {
    if (typeof n !== 'number' || n <= 0) {
        return 'not a valid number';
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    }else {
        return fib(n - 1) + fib(n - 2);
    }
}
console.log(fib(3));

function showNumbers(n) {
    if (typeof n !== 'number' || n <=0) {
        return 'not a valid number';
    } else if (n === 1) {
        return 1;
    } else {
        return `${showNumbers(n - 1)} ${n}`;
    }
}
console.log(showNumbers(3));

//recursion of string

function counterA(n) {
    if (typeof n !== 'string' || n.length == 0) {
        return 0;
    } 

    let firstLetter = n[0] === 'a' ? 1 : 0;
    return firstLetter + counterA(n.slice(1));
}
console.log(counterA("banan"))

function reverseStr(n) {
    if (typeof n !== 'string' || n.length === 0) {
        return '';
    } else {
        return n[n.length -1] + reverseStr(n.slice(0, -1));
    }
}
console.log(reverseStr("banana"))

function isPalindrome(n) {
    if (typeof n !== 'string' || n.length <= 1) {
        return true;
    } else if (n[0] !== n[n.length - 1]){
        return false;
    } else {
        return isPalindrome(n.slice(1, -1));
    }
}
console.log(isPalindrome('banab'))

function replaceA(n) {
    if (typeof n !== 'string' || n.length <= 1) {
        return '';
    } else {
        let firstLetter = n[0] === 'a' ? '@' : n[0];
        return firstLetter + replaceA(n.slice(1));
    }
}
console.log(replaceA('banab'))

function removeVovels(n) {
    if (typeof n !== 'string' || n.length === 0) {
        return '';
    } else {
        let vovels = 'aeiou';
        let firstLetter = vovels.includes(n[0].toLowerCase()) ? '' : n[0];
        return firstLetter + removeVovels(n.slice(1));
    }
}
console.log(removeVovels('bAnab'))

function replaceSpaces (n) {
    if (typeof n !== 'string' || n.length === 0) {
        return '';
    }

    let firstSymbol = n[0] === ' ' ? "_" : n[0];
    return firstSymbol + replaceSpaces(n.slice(1))
}
console.log(replaceSpaces('b An   ab'))

//recursion of array

function sumArray(n) {
    if (!Array.isArray(n) || n.length === 0) {
        return 0;
    }

    return n[0] + sumArray(n.slice(1));
}
console.log(sumArray([3, 5, 2]))

function containNumber (data, n) {
    if (!Array.isArray(data) || data.length === 0) {
        return false;
    }

    if (data[0] === n) {
        return true;
    }

    return containNumber(data.slice(1), n);
}
console.log(containNumber([3, 5, 2], 5))

function findMax(data) {
    console.log(data);
    if (!Array.isArray(data) || data.length === 0) {
        return 0;
    }
    if (data.length === 1) {
        return data[0];
    }

    let maxRest = findMax(data.slice(1));
    return Math.max(data[0], maxRest);
}
console.log(findMax([3, 5, 2]))

function reverseArray(data) {
    console.log(data);
    if (!Array.isArray(data) || data.length === 0) {
        return [];
    }
    if (data.length === 1) {
        return data;
    }

    return [data[data.length - 1], ...reverseArray(data.slice(0, -1))];
}
console.log(reverseArray([1, 2, 3, 4, 5]))

function isPalindromeArray (data) {
    if (!Array.isArray(data) || data.length <= 1) {
        return true;
    }
    if (data[0] !== data[data.length - 1]) {
        return false;
    }

    return isPalindromeArray(data.slice(1, - 1))
}
console.log(isPalindromeArray([1, 2, 3, 2, 1]))


//Date //if looking Date throuth browser-locate time/date, if terminal-UTC
const now = new Date('2025-03-05');
new Date.parse('2025-03-05');

console.log(now.setHours(18));
console.log(now);

// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTime());


let start = new Date();

for (let i = 0; i < 1000000000; i++) { //don't do more or u will break the system)
    let some = i ** 3;
}

let end = new Date();

console.log(`${end - start}`);