{
  // type aliuas
  type User1 = {
    // array te type alius use kora better
    name: string; //sob doroner primitive type er jonno type alius use korbo
    age: number; // type alius primitive type a use kora jabe er jnno &--> ata use korte hobe
  };

  //interface
  interface User2 {
    //object a interface use kora better but type alius o use kora jabe
    name: string;
    age: number;
  }

  //type aliuas role add korar jnno
  type UserWithRoll1 = User1 & { role: string };

  //interface diye role add korear jnno avabe
  interface UserWithRoll2 extends User2 {
    role: string;
  }

  const user1: UserWithRoll2 = { // jekono ta use kora jabe
    name: "mamun",
    age: 34,
    role: "manager",
  };


  //js --> object , arrray-> object function -> object
  type Roll1 = number[]; // array te use kora type aliuas

  interface Roll2 {
    [index: number] : number // interface diye array type defind kora
  }

const rollNumber1:Roll2 =[1,2,3]
 



// function defind

type Add1 = (num1:number, num2:number) => number; // type aliuas

interface Add2 {
    (num1:number, num2:number) : number; // interface
}
const add:Add2 = (num1, num2)=> num1+num2






// konta kokhon use korbo 

// array or function er jonno type aliuas use korbo 
// object er jnno interface or type aliuas dutay use kora jabe

}
