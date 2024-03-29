const obj1 = new Object()  // singleton object

const obj2 ={
    name :"Sanchit Srivastava",
    fullname:{
        userfullname:{
            name:"Sanchit",
            lastname:"Srivastava",

        }
    }
} 
console.log(obj2.fullname?.userfullname);
 //nonsingle ton object

obj1.name="Sanchit",
obj1.id ="123",
obj1.email="sanchit@gmail.com"

console.log(obj1);

const obj3 = {1:"a",2:"b",3:"c"}
const obj4= {4:"d"}

const obj5 ={...obj3,...obj4}  //spread operator 

console.log(obj5);

