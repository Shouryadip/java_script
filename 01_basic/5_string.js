/*
Old way:
Let a = name
Let b = age
let a = prompt("What is your name");
      let b = prompt("What is your age");
      document.write("My name is " + a + "and i am " + b + "years old")


New way:
let a = prompt("What is your name");
      let b = prompt("What is your age");
      document.write(`Hello my name is ${a} and I'm ${b} years old `);

We use ` ` to write complete string and will use ${} to inject variables in it.
*/

let Name="Shourya"
console.log(Name);
console.log(Name.length);
console.log(Name.charAt(2));
console.log(Name.indexOf('a'));

let newName=Name.slice(-6,3)
console.log(newName);


let user="     Shourya    "
console.log(user);
console.log(user.trim());

let rem="shou-rya-dip"
console.log(rem.split("-"));
