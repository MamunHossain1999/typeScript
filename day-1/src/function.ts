{
    // learnig function



// normal function
function add(num1:number, num2:number){
    return num1 + num2
}
add(34,64)

// Arrow function
const addArrow = (num1:number, num2:number): number => num1+num2

// object --> function--> method
// object er vitore kono function likle setake function na bole setha hobe method
const poorUser ={
    name:'mamun',
    balance: 5,
    addBalance(balance:number):string {
        return `My new balance is: ${this.balance+balance}`
    },
};


// callback function 
const arr:number[]= [1,23,45]; //squre ber kora array theke
const newArray:number[] = arr.map((elem:number):number => elem*elem)
}