
const hobbies=["sports","reading","coorking"];

console.log(hobbies[0]);

hobbies.push("nothingg");

hobbies.findIndex((item)=>{
    return item==='sports';
})
// Allows to transform every item of an arrray to new item
hobbies.map((item)=>item + "!");