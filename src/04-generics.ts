import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

console.log("==================================");
console.log("===== Generics Example Start =====");

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

//Again, slight change to the first console.log. the command was originally
// console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')  ))
//but that is not possible. This is in the example code. Simply copying the section
//over produces compiler errors.
//I'm now 100% sure that my previous corrections were infact correct!

console.log(findMatch<Friend>(friends.current, (f) => f.name.startsWith('Jane')  ))
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'  ))

console.log("===== Generics Example Ends ======");
console.log("==================================");
console.log("")

console.log("==================================");
console.log("===== Generics Labwork Start =====");

function sort<T>(data: T[], criteria: (a: T, b: T) => number): T[] {

    //console.log("data from param")
    //console.log(data)

    //console.log("Extension ordered");
    //console.log(data.slice().sort(criteria));

    const newCopy = data.slice().sort(criteria);

    return newCopy
  
}


//console.log("First test");
//Same mistake again here
// Sort friends by age
console.log(sort<Friend>(friends.current, (a, b) => a.age - b.age));

//console.log("Second test")
// Sort colleagues by extension number
console.log(
  sort<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);

console.log("===== Generics Labwork Ends ======");
console.log("==================================");
console.log("")