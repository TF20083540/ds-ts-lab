import {Friend, Friends, Colleague, ColleagueHistory } from './myTypes';

const friend1 : Friend = {
  name: "Paul Fleming",
  phone: "087-12345",
  age: 25,
  dob: new Date("1998-11-20") ,
};

const friend2 : Friend = {
  name: "Jane Costello",
  phone: "086--12345",
  age: 31,
  interests: ['Music', 'Sport']
};

//Added friend3 for Utility Types Debugging
const friend3 : Friend = {
  name: "Matt Mercer",
  phone: "086--420691",
  age: 44,
  interests: ['Gaming', 'Music', "Anime"]
};
  
  //export const friends = [friend1, friend2];

//Replacement friends const test

export const friends = {
    current: [friend1, friend2, friend3],
    former: [],
  };


  //console.log(friends[1]);
  
  //   -------------------
  const colleague1 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3 = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };

  //Added colleague4 for Utility Types Debugging.
  const colleague4 = {
    name: "Matt Mercer",
    department: "Engineering 3",
    contact: {
      email: "cbmm@company.com",
      extension: 575,
    },
  };

  export const colleagues = {
    current: [colleague1, colleague2, colleague3, colleague4],
    former: [],
  };
  
  //console.log(colleagues.current[0]);