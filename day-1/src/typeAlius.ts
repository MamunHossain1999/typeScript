{
    // type alias
    type Student ={
        name: string;
        age: number;
        contactNo?:string;
        gender:string;
        address:string;
    }

    const student:Student = {
        name:' mamun',
        age: 223,
        gender: 'male',
        contactNo: '012934564',
        address: 'ctg',
    }


    const student2:Student = {
        name:' mamun',
        age: 223,
        gender: 'male',
        contactNo: '012934564',
        address: 'ctg',
    }


    type UserName = string
    type IsAdmin = boolean

    const userName:UserName = 'mamun'
    const isAdmin: IsAdmin= true

    type Add = (num1:number, num2:number)=>number;
    const add:Add=(num1, num2)=> num1+num2;
}