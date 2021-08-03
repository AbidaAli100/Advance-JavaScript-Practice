/*
const person ={ name:'fatima', 
introduce: function(){ console.log(`hello ${person.name}) } } 
The above lines of code is throwing an error.
 Fix the code so it prints hello with the name in person object.
*/

const person = {
    name: 'fatima',
    introduction: function() {
        console.log(`hello I am ${person.name}`)
    }

}
person.introduction() //.. hello I am fatima  = output

person.name = "ANJUM"
person.introduction()


//practice
const fastFood = {
    name: "chips",
    description: function() {
        console.log('Young generation eat ' + this.name + ' the most')
    }
}
fastFood.description()