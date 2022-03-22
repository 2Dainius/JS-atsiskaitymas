/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator{
    sum(num1, num2){
        return num1 + num2;
    }
    sub(num1, num2){
        return num1 - num2;
    }
    multi(num1, num2){
        return num1 * num2;
    }
    div(num1, num2){
        return num1 / num2;
    }
}

const example = new Calculator()
console.log(example.sum(15, 78))
console.log(example.sub(100, 23))
console.log(example.multi(15, 10))
console.log(example.div(72, 9))