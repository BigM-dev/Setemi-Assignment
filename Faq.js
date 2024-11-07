// document.querySelector('.Faq-question')
// .forEach(button=> {
//  button.addEventlistener('click', () =>{
//     const answer= button.nextElementSibling;
//     answer.style.display= answwer.style .display=== 'block' ?  'none': 'block';
//  })
// });


/**
 * 
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */

function power(num1, num2){
    return Math.power(num1,num2)
}
console.log ( power )

// alert('Js is cool')
// console.log(prompt('Which country are youm staying', 'Placeholder:countryname'))
// confirm('Continue Js')
// console.log('Iam learning js')

let person = {
    name: "jihn",
    age: 31,
}

console.log(person)
let myave = function (){
    console.log('lemonade',7)
}
myave();

let score= 99
score--
console.log(score)

let num1= 7
let num2 = 5

console.log(num1 + num2)
console.log(num1 % num2)

let total =10
total++
console.log(total)

// assigning operators
let point = 100
point *= 85
console.log(point)


//
// let num = 1e5
// console.log(typeof num)



 const pi = 3.143

 const num = pi.toFixed(2)

 console.log(num)



 let hobby = 'I am learning js '
 let course = 'Css 1'
//  let result = hobby.concat (course)
let result =`${hobby}with ${course} ` 
 console.log(result)


 let mood ='I am ready ooo'
 console.log(mood.slice(4,11))


// date and time
 let date = new Date()
 console.log(date.getDate())

 let hour= date.getHours()
//  let min = date.getMinutes()
//  console.log(`${hour} ${min}`)


 let day = date.toLocaleDateString( 'default' ,{weekday: 'long'})
 console.log(day)


 //Math Object
let random = Math.random().toFixed(1) * 100
console.log(random)

let min= Math.min(69,1,3,4,8,2,5)
console.log(min)


let numm = (10 + 19);
if(num > 2&& num > 20){
    console.log('True')
}else{
    console.log('false')
}
// let user = prompt("employee")
// if(user === "employee"){
//     console.log("User sucessful")
// }else if(user === "guest"){
//     console.log("User not current")
// }

let myname = "Abdulmalik"
let namelength = myname.length
 if (namelength>11){
     console.log('Yes it is confirmed')
 }else if (namelength>=10){
    console.log("More than five")
 }else {
    console.log("greater than 10")
 }

// Destructuring
const user = {
    firstname: "Malik",
    lastname: "Adekunle",
      todos:{
         todo1  : "Are you cool",
         todo2 : "All is good oo",
         todo3 : "All is good oo",
      } 
};

let{
    firstname,
    lastname,
    todos:{todo1, todo2, todo3}
} = user
console.log(firstname)


// Destructing 
const book = [
    "The little lasd",
    "The little lasd 1",
    "The little lasd 2",
    [
     "The little lasd",
    "The little lasd god",
    "The little lasd 2",
    ]
]
let [tittle1, tittle2, title3, [title4,title5, title6]] = book
console.log(title5)


const colour=['red', 'black', 'green']
 const morecolour=[...colour,'red', 'black', 'green']
 colour.pop()
 console.log(morecolour)

//  const user = {
//     firstname: "Malik",
//     lastname: "Adekunle",
//       todos:{
//          todo1  : "Are you cool",
//       } 
// };

// const updateduser2={
//     ...user,
//     todos;{
//         ...user.todos,
//         employer: "google",
//     }     
// }

// Rest paraeters it will brings in arrays
const colours= function(...colours){
  console.log(colours[3])
}
colours("yellow","orange", "Black","golden")


// Arrow function
const sum= (a, b) => {
   return console.log(a + b)
}

sum (5,6)



 
const greeting = () => console.log("hello,how are you?");
greeting()



const countdown= (num) => {
    // 
    console.log(num)
    
 //base case
 const updated = num + 1
 if(updated <= 10){
     countdown(updated)
 }
}
countdown(1)






// document.addEventListener("DOMContentLoaded", & =>{
//     const questions= document.querySelectorAll('.Faq-question')
//     questions.forEach(question => {
//         question.addEventListener('click', () =>{
//             const answer= question.nextElementSibling;
//             const symbol = question.querySelectorAll('.symbol')
//             answer.style.display = answer.style.display === "block" ? "none" : "block";
//             symbol.textContent = answer.style.display ==="block" ? "-" : "+"
//             questions.forEach(q =>{
//                 if(q !== question){
//                     q.nextElementSibling.style.display = "none"
//                     q.querySelector(".symbol").textContent= "+"
//                 }
//             })
//         })
//     })
// })