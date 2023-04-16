let arrLength = 0;
do {
	arrLength = parseInt(prompt("Enter array lengthh"));
} while (arrLength <= 0 && isNaN(arrLength));
let arr = [];
console.log("Empty array", arr);
for (let i = 0; i < arrLength; i++) {
	let entereValue = prompt(`Enter #${i + 1} element of array`);
	arr.push(entereValue);
}
console.log("Filled array", arr);
arr.sort((a, b) => a - b);
console.log("Sorted array", arr);
arr.splice(1, 3);
console.log("Removed item from array", arr);
