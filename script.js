//First level:
//1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//Выведите столбец чисел от 1 до 100.

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

//Выведите столбец чисел от 11 до 33.
for (let i = 11; i <= 33; i++) {
    console.log(i);
}

//Дан массив с элементами [1, 2, 3, 4, 5].
//С помощью цикла for найдите сумму элементов этого массива. 
//Запишите ее в переменную result.
let array = [1, 2, 3, 4, 5];
let result = 0;
for (let i = 0; i < array.length; i++) {
     result += array[i];
}
console.log(result);
