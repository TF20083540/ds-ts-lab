import {
    ColleagueV2,
    Friend,
    Buddy,
    BuddyList,
    Administrator,
  } from "./myTypes";
  import { friends } from "./01-basics";

  const colleague1: ColleagueV2 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2: ColleagueV2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3: ColleagueV2 = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };

  export const colleagues = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };

  function makeBuddyList(
    name: string,
    buddies: Buddy[],
    admin?: Administrator
  ): BuddyList {
    return {
      name,
      members: buddies,
      administrator: admin,
    } as BuddyList;
    // The as operator above casts an object to a specific type.
  }
  // Tests for makeBuddyList
  const myFootballBuddies = makeBuddyList(
    "Football team",
    [colleague1, friends.current[0], colleague2],
    colleague1
  )
  
  const myBandBuddies = makeBuddyList(
      "Band name",
      [colleague1, friends.current[1]]
      // No administrator
    )
  
    console.log("=====================================");
    console.log("===== TypeAliases Example Start =====");

  console.log(myFootballBuddies)
  console.log(myBandBuddies)
  //--------------------------------------
  function findBuddyContact(list: BuddyList, name: string): string | undefined {
    for (const buddy of list.members) {
      if (buddy.name === name) {
        if ("phone" in buddy) {
          return buddy.phone;
        }
        else {
          return buddy.contact.email;
        }
      }
      return undefined;
    }
  }
  // Test for findBuddyContact.
  console.log("Contact buddy at: ", findBuddyContact(myFootballBuddies, "Ralph Graham"));

  console.log("===== TypeAlliases Example Ends ======");
  console.log("======================================");
  console.log("")

    console.log("======================================");
    console.log("===== TypeAlliases Labwork Start =====");

    function isFriend(member: any): member is Friend {
        //Check if the member is a Friend, and return it.
        //console.log("Checking isFriend type:")
        //console.log(member);
        return typeof member.name === 'string' && typeof member.age === 'number';
      
      }
      
      
    function getBuddyListFriends(list: BuddyList): Friend[]{
      
        //console.log("BuddyList constents:")
        //console.log(list);
      
        const friendsList: Friend[] = list.members.reduce((result, member) => {
            if (isFriend(member)) {
                //console.("Friend Detected");
                result.push(member);
            }
            
            //console.log(friendsList);
            return result;
        }, [] as Friend[]);
      
        return friendsList;
    }

    console.log(getBuddyListFriends(myFootballBuddies));
    //Expected all data from Paul Fleming.

    console.log("===== TypeAlliases Labwork Ends ======");
    console.log("======================================");
    console.log("")