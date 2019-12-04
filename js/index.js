
//let bestGreetings= "Hello!";
//alert(bestGreetings);
//bestGreetings ="Javascript";
//alert(bestGreetings);
let age = Number (prompt ("Enter your age"));

alert("Your age is "+ age,);
const nextAge= addOne(age);
alert (nextAge)

if(age>18){
    alert("Welcome!")

} else{ alert ("Acces denied!")
}
 function addOne (num){
    const incremented=num+1;
    return incremented;

 }