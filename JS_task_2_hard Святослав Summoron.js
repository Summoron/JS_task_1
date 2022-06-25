// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
let a=1
while (a <= 10){
console.log (2 ** a)
a++
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

let exp = function (b){
    if(b && !isNaN(b)){
    console.log(2**b)
} else{
    console.log (b,"isn't a number")
}
}
exp("2")
exp(2)
exp("q")

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее

let c =1
let d = ":)"
while (c <=5){
    console.log(c, d.repeat(c))
    c++
    
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 

let smile = function(stroka, amountofRows){
    for(i=1; i<= amountofRows; i++){
        console.log (i, stroka.repeat(i))
    }
}
smile("stroka", 5)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.

function structure(word){ 
    let vovels = ["a", "e", "i", "o", "u"]
    let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
    let Vcount=0
    let Ccount=0 
        for(let char of word.toLowerCase()){            
        if (vovels.includes(char)) 
        Vcount+=1
     else if(consonants.includes(char)) 
     Ccount+=1
    
}
console.log(Vcount, Ccount)
}

structure("Case-")

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом

function ispalindrom(palindrom){
    return palindrom.toLowerCase() === palindrom.toLowerCase().split('').reverse().join('')
}
console.log(ispalindrom("Abba"))