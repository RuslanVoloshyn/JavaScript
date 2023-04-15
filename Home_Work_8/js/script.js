//Вивести на сторінку в один рядок через кому числа від 10 до 20.

let resultString = "";
for (let i = 10; i <= 20; i++) {
	resultString += `${i}${i == 20 ? "" : ","}`;
}
console.log(resultString)
//Вивести квадрати чисел від 10 до 20.
let arr = []
for (let i = 10; i <= 20; i++) {
	arr = [i] = (i + 10) ** 2;
}
console.log(`${arr.join(", ")}`);
//Вивести таблицю множення на 7.
for (i = 1; i < 11; i++) {
	console.log(`${i} * 7 = ${i * 7}`);
}
//Знайти суму всіх цілих чисел від 1 до 15.
for (i = 0; i < 15; i++) {
	arr[i] = i+ 1;
}
console.log(arr.reduce((sum, item) => sum +item, 0));
// //Знайти добуток усіх цілих чисел від 15 до 35.
for (i = 15; i <= 35; i++) {
	arr[i] = i + 15;
}
console.log(arr.reduce((sum, item) => sum +item. 0));
//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
value = 0;
for (i = 1; i < 500; i++) {
	value += i;
}
console.log(value / 500);
//Вивести суму лише парних чисел в діапазоні від 30 до 80.
value = 0;
for (i = 30; i < 80; i++) {
	if (i % 2 === 0) {
		value += i;
	}
}
console.log(value);
//Вивести всі числа в діапазоні від 100 до 200 кратні 3.
arr = [];
for (i = 100; i < 201; i++) {
	if (i % 3 === 0) {
		arr.push(i);
	}
}
console.log(arr);
//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
arr = [];
value = 59;
for (i = 1; i < value + 1; i++) {
	if (value % i === 0) {
		arr.push(i);
	}
}
console.log(`${value} = ${arr}`);
//Визначити кількість його парних дільників.


let counter = 0;
let valueNew = 0;
arr.forEach(function (item) {
	if (item % 2 === 0) {
		counter++;
		valueNew += item;
	}
});

alert(`10) Кількість парних дільників числа ${value} = ${counter}`);
alert(`11) Сума парних дільників числа ${value} = ${valueNew}`);
//Знайти суму його парних дільників.
//Надрукувати повну таблицю множення від 1 до 10.
for (i = 1; i < 11; i++) {
	for (let j = 1; j < 11; j++) {
		console.log(`${i} * ${j} = ${i * j}`);
	}
}
