{
// spreed operator
// rest operator
// destructuring



// learn spread operator
const bros1:string[] = ['nan','dfd','dfd']
const bros2:string[] = ['nadfn','ddffd','ddfd']

bros1.push(...bros2)


const mentors1 = {
    typescript: 'mezba',
    redux:'mir',
    dbms:'mizan'
}

const mentors2 ={
    prisma: 'firoz',
    next: 'tonmo',
    cloud: 'nahid'
}

const mentorlist ={
    ...mentors1,
    ...mentors2
}


// rest operator
// const greetFriends = (friend1:string, friend2:string, friend3:string)=>{
    const greetFriends = (...friends:string[])=>{
    // console.log(`Hi ${friend1}, ${friend2},${friend3}`); //ai liner poriborte forEach use kora holo
     friends.forEach((friend:string)=>console.log(`Hi ${friend}`))   

    greetFriends('abul', 'babul', 'kabul')
}








}