{
  // Reference Type --> Object

const user:{
  readonly company: 'programming-hero' //type --> literal types er kaj holo kono value jodi fixed hoy tahle avabe defind korte hobe
    firstName:string;
    middleName?:string; //optional kono type jodi na thake seta hobe optional
    lastName: string;
    isMarried: boolean;
}={
    firstName: 'mamun',
    middleName: 'hossain',
    lastName: 'alimul',
    company: 'programming-hero',
    isMarried: false,
}

// user.company='PH' //readonly use korle seta r type change kora jabe na ... atake access modifire bole
}