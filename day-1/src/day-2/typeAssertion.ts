{
    // type assertion ---er mane holo ami typescript theke valo type bujte pari
let anything : any;
anything = 'Next level web developer';
anything = 222;
// (anything as number).


const kgToGm = (value:string | number) : string | number | undefined =>{
    if(typeof value === 'string'){
        const convertedValue = parseFloat(value)*1000;
        return `The converted: ${convertedValue}`
    }if(typeof value === "number"){
        return value * 1000
    }
}

const result1 = kgToGm(1000) as number // as use kora hoy tohkn jkhon ami bujte perbo ata ki return kore 
const restult2 = kgToGm('1000') as string


// try catch use kore assertion use
type CustomError ={
    message:string
}

try{

}catch(error){
    console.log((error as CustomError).message)
}










}