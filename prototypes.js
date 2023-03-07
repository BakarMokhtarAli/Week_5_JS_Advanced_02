// In this assignment, you will be creating a a constructor function named "Person" and then create your whole family from that constructor.


// Create "Person" constructor function
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"


// Move the "Speak" method outside of the constructor function and into the prototype.
// Create an object named "Me" using the "Person" constructor function
// Call the "Speak" method on the "Me" object
// Console log all your results

function Person(items){
    this.name=items.name;
    this.age=items.age;
    this.hobby=items.hobby;
}

Person.prototype.speak=function(){
    return `hello My name is ${this.name} and I'm ${this.age} Years old. I Love ${this.hobby}`
}

const me = new Person({
    name:'Abuukar Macalain Mukhtar',
    age:19,
    hobby:'footBall'
})



function brother(items){
    Person.call(this,items)
}
brother.prototype=Object.create(Person.prototype)

const myBrother = new brother({
    name:'Mohamed Macalin Mukhtar',
    age:22,
    hobby:'footBall',
})


function sisters(items){
    brother.call(this,items)
}

sisters.prototype=Object.create(brother.prototype)
const mySister = new sisters({
    name:'Fatuma Macalin Mukhtar',
    age:20,
    hobby:'movies'
})
function Mom(items){
    sisters.call(this, items)
}
Mom.prototype=Object.create(sisters.prototype)
const myMom = new Mom({
    name:'Aamino Maxamed Cali',
    age:38,
    hobby:'watching',
})
function Daddy(items){
    Person.call(this, items)
}
Daddy.prototype=Object.create(Person.prototype)
const myDad = new Daddy({
    name:'Mukhtar Cali Barre',
    age:39,
    hobby:'Travelling'
})
console.log(me.speak())
console.log(myBrother.speak())
console.log(mySister.speak())
console.log(myMom.speak())
console.log(myDad.speak())