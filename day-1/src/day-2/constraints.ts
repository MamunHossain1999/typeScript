{
// constraints

//extends kore je type deya holo atake constraints bole ,,,mane id, name, email lagbey
const addCourseToStudent = <T extends {id: number; name:string; email:string}>(student:T)=>{
    const course = 'Next level web development';
    return{
        ...student,
        course,
    };
};

const student1 = addCourseToStudent<{
    id:number;
    name:string;
    email:string;
    devType:string
}>({
    id: 333,
    name: 'mmau',
    email: 'ms@gamil.com',
    devType: 'gdfgdf'
});


const studen2 = addCourseToStudent({
    id: 33333,
    name: 'mmaudfdf',
    email: 'ms@gadfdmil.com',
    devType: 'gdfdfgdf'
});






}