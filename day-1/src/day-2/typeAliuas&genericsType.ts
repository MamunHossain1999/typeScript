{
    //generics type 

    //avabe dynamic kore
type GenericArray<T> = Array<T>; // <> ai chinho diye generic type defind kora hoy 
// T mane holo parameter

// const rollNumbers: number[] = [1,2,3]; normal type
const rollNumbers: GenericArray<number> = [1,2,3]; //generic type
 
// const mentors: string[] = ['m','n','d'];
const mentors : GenericArray<string> = ['m','n','d'];

// const boleArray : boolean[] = [true, false, true]'
const boleArray : GenericArray<boolean> = [true, false, true];


type User ={
    name: string;
    age: number
}
const user : GenericArray<User> = [
    {
        name: 'mamun',
        age: 34,
    },
    {
        name: 'jm',
        age: 234
    }
]


const add = (x:number, y:number)=> x+y;
add(30,34);  //optional


//generic tuple

type GenericTuple<x,y> = [x,y];

const manush : GenericTuple<string, string> = ['mm','hd'];



const UserWithId : GenericTuple<number,{name:string, email:string}> = [133, {name:'am', email:'m@gmail.com'}]






















}