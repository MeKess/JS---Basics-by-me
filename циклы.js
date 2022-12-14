//? Циклы
// Все циклы это инструкции!
// Для перебора массивов исп. методы forEach, map, indexOf и тд!
// Для объектов есть возможность конвертации объекта в массив исрользуя Object.keys или Object.values!
// В циклах один и тот же блок кода выполняеться многократно, зависимо от количество итерации!

//? ---------------------------------------------------------------------

//                                                                 /
(' Цикл - for ');
// for (Начальная иструкция; Условие; Итерационное действие) {
//   Блок кода выполняемыйы на каждой итерации
// }
// Цикл - for можно исп. для перебора массивов но не рекомендуеться!
// Рекомендуеться исп. функции высшего пордяка массивов: 'forEach', 'map', 'reduce'!

// Пример:
for (let i = 0; i < 5; i++) {
	console.log(i);
}
//                                                                 /

//                                                                 /
(' Не рекомендуемый метод - Цикл - (for) для массивов ');

// Пример:
const myArray0 = ['first', 'second', 'third'];

for (let i = 0; i < myArray0.length; i++) {
	console.log(myArray0[i]);
}
//                                                                 /

//                                                                 /
(' Рекомендуемый метод массивов - forEach ');

// Пример:
const myArray = ['first', 'second', 'third'];

myArray.forEach((element, index) => {
	console.log(element, index);
});
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' ForEach для объектов --Вызов метода keys-- ');
// Метод ForEach для перебора свойств объектов!
// Если же нужны название свойтсв, то нужно исп. -Object.keys-!
// С пом. метода keys можно получить все ключи определенного объекта в виде массива!

// Пример:
const myObject01 = {
	name: 'Kasim',
	age: 23,
	comments: 10,
};

Object.keys(myObject01).forEach((key) => {
	console.log(key, myObject01[key]);
});
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' ForEach для объектов --Вызов метода values-- ');
// Метод ForEach для перебора свойств объектов!
// С пом. метода values можно сразу получить значение свойств определенного объекта!
// Если надо сразу получить массив значений объекта, и не нужны свойтсва, то -Object.values- хорошо подходить для этого!

// Пример:
const myObj = {
	name: 'Kasim',
	age: 23,
	commentsQty: 11,
};

Object.values(myObj).forEach((value) => {
	console.log(value);
});
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Цикл - while ');
// while (Условие) {
//  Блок кода, выполняемый на каждой итерации
// }
// Позволяеть выполнять блок кода, пока условие правдиво!
// Если условие ложно, то он не выполниться ни разу и мы выйдем из цикла!
// Если условие будет бесконечно правдиво, то мы постоянно будем находиться в цикле!

// Пример:
let i = 0;

while (i < 5) {
	console.log(i);
	i++;
}
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Цикл - do while ');
// do {
//  Блок кода, выполняемый на каждой итерации
// } while (Условие)
// Do While цикл выполниться как минимум один раз!

// Пример:
let v = 0;

do {
	console.log(v);
	v++;
} while (v < 5);
//                                                                 /

// Пример:
let w = 10;

do {
	console.log(w);
	w++;
} while (w < 5);
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Цикл - for in для объектов ');
// for (key in Object) {
//  Действия с каждым свойством объекта
//  Значения свойтства - Object[key]
// }
// [key] - представляеть название свойства в объекте!
// Используя такой цикл можно перебрать все свойства объекта!

// Пример:
const myObject = {
	x: 10,
	y: true,
	z: 'abc',
};

for (const key in myObject) {
	console.log(key, myObject[key]);
}
//                                                                 /

// Пример:
const myObject0 = {
	name: 'Kasim',
	age: 23,
	hasSignedAgreement: true,
	comments: 10,
};

for (const key in myObject0) {
	console.log(key, myObject0[key]);
}
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Цикл - for in для массивов ');
// Используя такой цикл можно перебрать все элементы массива!
// На каждой итерации в этом цикле будеть создаваться новая переменная key!

// Пример:
const myArray10 = [true, 10, 'abc', null];

for (const key in myArray10) {
	console.log(myArray10[key]);
}
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Цикл - for of для строк ');
// Используя цикл for of можно перебрать все символы в строке!

// Пример:
const myString = 'Hello';

for (const letter of myString) {
	console.log(letter);
}
//                                                                 /

//? ---------------------------------------------------------------------

//                                                                 /
(' Цикл - for of для массивов ');
// Цикл for of не для объектов!
// Используя цикл for of можно перебрать все элементы в массиве!

// Пример:
const myArray11 = ['Hello', true, 10, null];

for (const element of myArray11) {
	console.log(element);
}
//                                                                 /
