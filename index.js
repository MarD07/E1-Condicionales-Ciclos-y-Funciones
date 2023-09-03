//1


function parOimpar (i) {
    if (i % 2 === 0) {
        console.log ("el numero es par")
    }
    else {
        console.log ("el numero es impar")
    }
}

parOimpar (6)


//2


function mayorOmenor (a, b) {
    if (a > b) {
        console.log (a, "es mayor que", b)
    }
    else if (a < b) {
        console.log (a, "es menor que", b)
    }
    else {
        console.log (a, "es igual que", b)
    }
}

mayorOmenor (10, 7)


//3


function multiplo (i) {
    if (i % 5 === 0) {
        console.log ("el numero es multiplo de 5")
    }
    else {
        console.log ("el numero no es multiplo de 5")
    }
}

multiplo (25)


//4


function contador (i) {
    for (let cont = 0; cont <= i; cont++) {
        console.log (cont) ;
    }
}

contador (5)


//5


function repetir (a, b) {
    for (let cont = 1; cont <= a; cont++) {
        console.log (b);
    }
}

repetir (6, "hola")


//6

const verduras = ["lechuga", "tomate", "cebolla", "pimiento"]

function tipoverduras (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log (arr [i])
    }
}

tipoverduras (verduras)


//7


const numeros = [2, 7, 16, 28, 29, 36, 78, 92, 45, 73]

function menoselquinto (num) {
    for (let i = 0; i < num.length; i++) {
        if (i != 4) {
            console.log (num [i])
        }
    }
}

menoselquinto (numeros)


//8


const multi = [ 2, 4, 6, 8]

function numeromulti (x, y) {
    for (let i = 0; i < x.length; i++) {
        console.log (x [i] * y)
    }
}

numeromulti (multi, 10)

