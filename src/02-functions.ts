import {colleagues, friends } from './01-basics';
import {Friend, Friends, Colleague, ColleagueHistory } from './myTypes';

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
};

//console.log(older(friends[0]));

function allOlder(f: Friends){

    //console.log(f);
    //console.log(f.current.length);
        
        let friendAges: string[] = [];
        f.current.forEach((element: {name : string,  age: number }) => {
            console.log(element.age);
            element.age += 1;
            friendAges.push(element.name + " is now "+ element.age.toString());
            //friendAges.map(f => element.age.toString());
        })

        //console.log(friendAges);
        return friendAges;
        
}

let testing : Friends = friends;
console.log(allOlder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

  //Add new colleague to colleague[]
  function addColleague(cs: Colleague[], val_name: string , val_department: string, val_email: string) {
    const colleagueArray = cs;
    console.log("addColleagues test begins.");
    console.log(colleagueArray); // Debug;

    let newColleague: Colleague = {
        name: val_name,
        department: val_department,
        contact: {
            email: val_email,
            extension: highestExtension(cs).contact.extension + 1
          } 

    }
    console.log("newColleague data.");
    console.log(newColleague);
    console.log("end newColleague data.");

    console.log("Old size of array: " + colleagueArray.length);
    colleagueArray.push(newColleague);
    console.log("New size of array: " + colleagueArray.length);


    console.log("addColleague test ends.");
    //return colleagueArray;
  }

  //Test addColleague
  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
