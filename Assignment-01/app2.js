/*
 const person= { name:'fatima' } const introduction = function()
 { console.log(`Hello ${this.name}`) }
  Use call,bind and apply methods so that the this of introduction 
  function refers to person object.
*/

const person1 = {
    name: 'fatima'
}
const introduction = function() {
    console.log(`Hello ${this.name}`)
}

// call method
introduction.call(person1)