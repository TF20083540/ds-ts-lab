export interface Friend {
    name: string;
    phone: string;
    age: number
}

/*
export interface Friends {
    
}*/

//Replacement friends export

export interface Friends {
    current: Friend[],
    former: Friend[]
}
    


export interface Colleague {
    name: string;
    department: string;
    contact: {
      email: string;
      extension: number
    } 
  }

export interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}