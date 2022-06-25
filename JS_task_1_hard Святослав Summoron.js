// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

// let age_2 = 18 
// let age_3 = 60 


// let checkAge = function(age){
//     if (typeof age == "number"){
//     if (age < age_2){
//         console.log("You don't have acess couse your age is", age, "it's less then", age_2)
//     } else if (age >= age_2 && age < age_3){
//         console.log ("Welcome!")
//     } else if (age > age_3){
//         console.log ("Keep calm and watch Culture channel")
//     } else {
//         console.log ("Technical work")
// }
// } else console.log ("Smth went wrong")
// }

// checkAge(17)
// checkAge(18)
// checkAge(61)

// 2*:
// Преобразовать задание 1* таким о бразом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// let age_2 = 18 
// let age_3 = 60 


// let checkAge = function(age){
//     if (typeof age == "number"){
//     if (age < age_2){
//         console.log("You don't have acess couse your age is", age, "it's less then", age_2)
//     } else if (age >= age_2 && age < age_3){
//         console.log ("Welcome!")
//     } else if (age > age_3){
//         console.log ("Keep calm and watch Culture channel")
//     } else {
//         console.log ("Technical work")
// }
// } else console.log ("Smth went wrong")
// }

// checkAge(17)
// checkAge(18)
// checkAge(61)
// checkAge('f')

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

let age_2 = 18 
let age_3 = 60 


let checkAge = function(age){
    if (age && !isNaN(age)){
    if (age < age_2){
        alert("You don't have acess couse your age is", age, "it's less then", age_2)
    } else if (age >= age_2 && age < age_3){
        alert ("Welcome!")
    } else if (age > age_3){
        alert ("Keep calm and watch Culture channel")
    } else {
        alert ("Technical work")
}
} else alert ("Smth went wrong")
}

checkAge (prompt("Enter your age"))
