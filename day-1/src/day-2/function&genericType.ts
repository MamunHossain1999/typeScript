{
    // function and generic type
    const createArray =(param : string) : string[] =>{
        return [param]
    };

    const createArraryWithGeneric = <T>(param: T): T[] =>{
        return [param]
    };

type User ={id:number; name:string}

const res1 = createArray('bangladesh');
const resGeneric = createArraryWithGeneric<string>("bangladesh");
const resGenericObj = createArraryWithGeneric<User>({id:232,name:'mamun'});


// tupple
const createArraryWithTupple = <T,Q>(param1: T, param2:Q): [T,Q] =>{
    return [param1, param2]
};



const res12 = createArraryWithTupple<string,number>('bangladesh',343);
const res123 = createArraryWithTupple<string,{name:string}>("bangladesh",{name:'asia'});



const addCourseToStudent =<T>(student:T)=>{
    const course = 'next level web development'
    return{
        ...student,
        course
    }
}

const student1 = addCourseToStudent({name:'mmm',email:'m@gmail.com',devType:'nwle'})
const student2 = addCourseToStudent({name:'mmdm',email:'mftr@gmail.com',watch:'nwle'})
}