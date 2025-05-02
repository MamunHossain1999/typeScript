{
    // union type
// type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
// type FullStackDeveloper = 'frontendDeveloper' | 'expartDeveloper'

type Developer = FrontendDeveloper | FullStackDeveloper


// const newDeveloper : FrontendDeveloper = 'juniorDeveloper'

type User = {
    name: string;
    email: string;
    gender: 'male' | 'female';
    bloodGroup: 'o+' | 'a+' | 'ab+'; //string leteral
};

const user: User ={
    name: 'mamun',
    email:'mam',
    gender: 'male',
    bloodGroup: 'o+'
}


// intersection
type FrontendDeveloper ={
    skills: string[];
    designation1: 'Frontend Developer'
}

type BackendDeveloper ={
    skills: string[];
    designation2: 'Backend Developer'
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

const FullStackDeveloper: FullStackDeveloper ={
    skills: ['html', 'css', 'express'],
    designation1:'Frontend Developer',
    designation2: 'Backend Developer'
}

}