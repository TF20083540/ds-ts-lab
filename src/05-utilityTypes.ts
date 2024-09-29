import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, FriendPartial, EventPass } from "./myTypes";

function updateFriend(friend: Friend, updates: FriendPartial ) : Friend {
  return { ...friend, ...updates}
}

//Mistake again
//console.log(updateFriend(friends[0], {..}
//Should be as corrected.


    console.log("==========================================");
    console.log("===== Utility Types Example #1 Start =====");

console.log(updateFriend(friends.current[0], {
  phone: '08712345',
  dob: new Date("1998-10-22")
}))

//By supplying the object we wish to update and specifying a parameter
//to use new updated information, we can inject the new data from the
//FriendPartial object into the Friend object.

    console.log("===== Utility Types Example #1 Ends ======");
    console.log("==========================================");
    console.log("")

    console.log("==========================================");
    console.log("===== Utility Types Example #2 Start =====");


function secureFindFriends(
    friends: Friend[],
    criteria: (f: Friend) => boolean
  ): SecureFriendContact[] {
    const matches = friends.filter(criteria);
    return matches.map((f) => {
      const secure: SecureFriendContact = {
        name: f.name,
        phone: f.phone,
      };
      return secure;
    });
  }

  let result = secureFindFriends(
      friends.current,
      (f: Friend) => f.age < 30
  )

  console.log(result)
  //result[0].phone = '08654321' // Read-only demonstration.

    console.log("===== Utility Types Example #2 Ends ======");
    console.log("==========================================");
    console.log("")

    console.log("==========================================");
    console.log("===== Utility Types Example #3 Start =====");

    function generateEventPass(colleague: Colleague): EventPass {
        const passCode = Math.round(Math.random() * (1000 - 1) + 1);
        return {
          name: colleague.name,
          department: colleague.department,
          passCode: passCode,
        };
      }
      console.log(generateEventPass(colleagues.current[0]));

    console.log("===== Utility Types Example #3 Ends ======");
    console.log("==========================================");
    console.log("")


    console.log("=======================================");
    console.log("===== Utility Types Labwork Start =====");

    function intersection(friends: Friend[], colleagues: Colleague[] ): (Friend & Colleague)[] {
        let result2: (Friend & Colleague)[] = [];
        friends.reduce((res, friend) => {
          const colleague = colleagues.find((col) => col.name === friend.name);
          if (colleague) {
            // Colleague is also a Friend
            //??
            result2.push({ ...friend, ...colleague });
            //console.log("Friend Data");
            //console.log(friend);
            //console.log("Colleague Data")
            //console.log(colleague);
            
          }
          return res;
        }, result2);

        //console.log("result2 Contents Start");
        //console.log(result2);
        //console.log("result2 Contents End")
        return result2;
    }
      
      

    console.log(intersection(friends.current, colleagues.current));
    console.log("===== Utility Types Labwork Ends ======");
    console.log("=======================================");
    console.log("")