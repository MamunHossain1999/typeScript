{
    // destructuring


    // object destructuring
    const user ={
        id:123,
        name:{
            firstName: 'mamun',
            lastName: 'hossain'
        },
        contactNo:'0120400040',
        address: 'bongshijar'
    }

    const {contactNo, name:{firstName}}=user; //akhne tpye use kora jabe na


    // array destructuring
    const myFirends = ['hi','by', 'chis','er','dfdf'];
    const [,,bestFriend, ...rest]=myFirends //koma kaj holo jodi kono friend k bad dite chai ,,,,r rest kaj holo bad deyer por theke jot friend ase sob nibo

}