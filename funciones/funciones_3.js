function suma(num1, num2) {
    return num1 + num2
}

function multiplica (num1, num2) {
    return num1 * num2
}

function suma_y_multiplica (num1, num2) {
    return suma(num1, num2) * multiplica(num1, num2)
}

console.log(suma(1, 4))
console.log(multiplica(1, 4))
console.log(suma_y_multiplica(1, 4))
