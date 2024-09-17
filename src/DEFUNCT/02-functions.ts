//import { friends } from './01-basics'
import {Friend, Colleague } from './myTypes'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))



function allOlder(f: Friends){
    
    /*
    let friendAges: string[] = [];
    friends.forEach((element: { age: number }) => {
        element.age += 1;
        friendAges.map(friends => element.age.toString());
    })
    return friendAges;
    */

    console.log(f);

}

console.log(allOlder(Friends));