{

    // nullable type // unkhown type
    const searchName =(value: string | null)=>{
        if(value){
            console.log('Searching');
        }else{
            console.log('There is nothing to search');
        }
    }
    searchName('st')


    const getSpeedInMeterPerSecond = (value: unknown)=>{
        if(typeof value === "number"){
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);

        }else if(typeof value === 'string'){
            const [result, unit] =value.split(" ")
            const convertedSpeed = (parseFloat(result)* 1000) / 3600;
            console.log(`the speed is ${convertedSpeed} ms^-1`);
        }else{
            console.log('wrong input')
        }
    }
    getSpeedInMeterPerSecond(null)


}