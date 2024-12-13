/*Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint
*/






/* Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

let myFunction = function(){
    console.log("Hello World");
}

const hero=["shourya","array","example"];
console.log(hero)


//memory

// stack(premitive)     heap(non-premetive)

//stack
let name="Shourya"
let anothername=name
anothername="Ranti"
console.log(name);
console.log(anothername);

//heap
let user1={
    Name:"Shourya",
    age:20
}
let user2=user1
user2.Name="Ranti"
console.log(user1.Name);
console.log(user2.Name);

