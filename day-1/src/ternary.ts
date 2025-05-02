{
    // ternary operator
    const age: number =25;

    if(age>= 18){
        console.log('adult')
    }

    const isAdult = age >= 18 ? 'adult' : 'not adult'
    console.log({isAdult})


    // nullish coalescing operator 
    //null / undefined ---> decision making korar jnno use kora hoy
    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'guest';
    const result2 = isAuthenticated ? isAuthenticated : 'guest'
    console.log({result1}, {result2})



    type User ={
        name: string;
        address:{
            city:string;
            road:string;
            presentAddress: string;
            permanentAddress?: string
        }
    }

    const user: User={
        name: 'mamun',
        address: {
            city: 'pg',
            road:'god',
            presentAddress:'pg town'
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? 'No permanentAddress'; //atake bole nullish operator
    console.log({permanentAddress})
}