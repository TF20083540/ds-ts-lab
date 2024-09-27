import {colleagues, friends } from './01-basics';
import {Friend, Friends, Colleague, ColleagueHistory, EmailContact } from './myTypes';

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
function highestExtension(cs: Colleague[]){
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

  //Add new colleague to colleague[]
  function addColleague(cs: Colleague[], val_name: string , val_department: string, val_email: string) {
    const colleagueArray = cs;
    //console.log("addColleagues test begins.");
    //console.log(colleagueArray); // Debug;

    let newColleague: Colleague = {
        name: val_name,
        department: val_department,
        contact: {
            email: val_email,
            extension: highestExtension(cs).contact.extension + 1
          } 

    }
    colleagueArray.push(newColleague);

    //console.log("newColleague data.");
    //console.log(newColleague);
    //console.log("end newColleague data.");

    //console.log("Old size of array: " + colleagueArray.length);
    //colleagueArray.push(newColleague);
    //console.log("New size of array: " + colleagueArray.length);


    //console.log("addColleague test ends.");
    //return colleagueArray;
  }

  //Test addColleague

  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

  console.log("=================================");
  console.log("=== sortColleagues example Start===");
  function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW
  
  console.log("=== sortColleagues example end===");
  console.log("=================================");
  console.log("");

  


  console.log("===================================");
  console.log("=== Higher Order Functions Start===");
  function findFriends(
    friends: Friends,
    finder: (f1: Friend) => boolean
  ): 
   string[] {
    //The function should simply search through the array  for the correct Friend entry.
    //const found: Friend[] = friends.current;
    //const single: Friend = found.find(finder);
    const found: Friend[] = friends.current.filter(finder);
    //var testString: string[] = [];
    
    //testString.push("Test");
    //console.log(found.find(finder));
    //console.log("Verify comparrison");
    //console.log(result);

    const results = found.map((ce) => (ce.name));

    //Cheeky one-liner I found out of curiosity, combining the two seperate commands above together.
    //const plop = friends.current.filter(finder).map((ce) => (ce.name));

    //testString.push();

    return results
  }

  //console.log("First Function")
  console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
  //console.log("Second Function")
  console.log(findFriends(friends, (friend) => friend.age < 35));
  console.log("=== Higher Order Functions Emds ===");
  console.log("===================================");
  console.log("");

/* //Expected results
[ 'Paul Fleming' ]
[ 'Paul Fleming', 'Jane Costello' ]
*/

//--Next Section: Optionals - Optionals
//Example
console.log("===================================");
console.log("===== Optionals Example Start =====");







console.log("===== Optionals Example Emds ======");
console.log("===================================");
console.log("")

//Lab
console.log("===================================");
console.log("===== Interests Labwork Start =====");







console.log("===== Interests Labwork Ends ======");
console.log("===================================");
console.log("")