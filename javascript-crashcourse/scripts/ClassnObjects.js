
const emp = {
    name:"employee name",
    age: "123",
    greet(){
        console.log("Hello :" + emp.name + " age :" + emp.age);
    }
}

console.log(emp.name);
console.log(emp.age);
console.log(emp.greet());

class user {
    
    constructor(firstname, lastname)
    {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet()
    {
        console.log("Hi");
    }
}

const userObject = new user("first","last");
console.log(userObject);
console.log(userObject.greet());
console.log(userObject.firstname + userObject.lastname);