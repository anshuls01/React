//scope is global
let userMessage = "it s userMessage variable";

const localVariable = "variable declared using const, scope is local";

// Anonymous function

let f1 = ()=>{
    console.log("it's a an anonymous functions");
}

f1();

//export anonymous function
// export default function()
// {
//     console.log("hello");
// }
// OR   'Only one default allowed per file'
export default ()=>{
    console.log("hello");
}

//Anonymous function with parameters
(firstName, lastName) =>{
    console.log(firstName + ' ' + lastName);
}

