
const hobbies=["sports","reading","coorking"];

console.log(hobbies[0]);

hobbies.push("nothingg");

hobbies.findIndex((item)=>{
    return item==='sports';
})
// Allows to transform every item of an arrray to new item
const editedHobbies = hobbies.map((item)=>item + "!");
console.log(editedHobbies);

//transform array item to object using map
// extra () parenthesis around {} to tell js, it's not a function body, new object initialization
editedHobbies = hobbies.map((item)=> ({text: item }));

//return from a function
function transform(numbers) //numbers is int array
{
    return numbers.map((item) =>{
        return {text: item};
    })
} 

//destructuring js Array
const emp = ["firstname", "lastname"];
const [firstname, lastname] = emp;
console.log(firstname);
console.log(lastname);

//destructuring js Objects

const user = {
    name:"name",
    age:"34"
}

console.log(user.name);
console.log(user.age);

// destructuring object, [name, age] can't be alias, has to be object properties
const {name, age} = user;
console.log(name);
console.log(age);

// for alias object properties
const {name: username, age: userage} = user;
console.log(username);
console.log(userage);

/*
Destructuring in Function Parameter Lists
The destructuring syntax explained in the previous lecture can also be used in function parameter lists.

For example, if a function accepts a parameter that will contain an object it can be destructured to "pull out" the object properties and make them available as locally scoped variables (i.e., variables only available inside the function body).

Here's an example:
*/
function storeOrder(order) {
  localStorage.setItem('id', order.id);
  localStorage.setItem('currency', order.currency);
}
//Instead of accessing the order properties via the "dot notation" inside the storeOrder function body, you could use destructuring like this:

function storeOrder({id, currency}) { // destructuring
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}
/*
The destructuring syntax is the same as taught in the previous lecture - just without creating a constant or variable manually.

Instead, id and currency are "pulled out" of the incoming object (i.e., the object passed as an argument to storeOrder).

It's very important to understand, that storeOrder still only takes one parameter in this example! It does not accept two parameters. Instead, it's one single parameter - an object which then just is destructured internally.

The function would still be called like this:
*/
storeOrder({id: 5, currency: 'USD', amount: 15.99}); // one argument / value!





