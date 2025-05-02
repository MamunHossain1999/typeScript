{
  // interface generic type
  interface Developer<T, X=null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releasseYear: number;
    };
    smartWatch: T;
    bike?: X // thakteo pare avar na thaktew pare
  }

  type PoorDeveloper = { //type aliuas
    brand: string;
    model: string;
    display: string;
  };

//   const poorDeveloper: Developer<PoorDeveloper,null> = { opore jodi null set kore dey defaul vabe tahle r akhne null diy hobe na
    const poorDeveloper: Developer<PoorDeveloper> = {
    name: "mamun",
    computer: {
      brand: "asus",
      model: "343",
      releasseYear: 2030,
    },
    smartWatch: {
      brand: "mm",
      model: "e3re",
      display: "oi8i",
    },
  };

interface  RishDeveloper { // Interface type
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: Boolean;
  }

interface BIKE {
    model: string;
    brand: string;
}  
  const richDeveloper: Developer<RishDeveloper,BIKE> = {
    name: "mamundfd",
    computer: {
      brand: "asus",
      model: "343",
      releasseYear: 2030,
    },
    smartWatch: {
      brand: "mm454",
      model: "e3re",
      heartTrack: true,
      sleepTrack: true,
    },
    bike:{
        model:'3434',
        brand: 'sdskf'
    }
  };
}
