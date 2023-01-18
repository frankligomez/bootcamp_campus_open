// Recursividad
// Cálculo factorial de un número entero
// Factorial de 5 = 5 * 4 * 3 * 2 * 1 = 120

//Función NO recursiva -> Tiene un estado interno
function factorial(num) {
    let fact = num
    for (let i = num -1; i > 0; i = i - 1){
        fact =fact * i
    }
    return fact
}

console.log(factorial(7)) 


function factorial_rec(num) {
    if(num == 1) return 1
    return num * factorial_rec(num - 1)
}

console.log(factorial(7))   
 