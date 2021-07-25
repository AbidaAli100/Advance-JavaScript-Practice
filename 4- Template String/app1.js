window.onload = function() {
    var temp = `My name is Abida Ali`
    console.log(temp);
}

//second example

window.onload = function() {
    function studentData(name, Age) {
        console.log("The student Name is " + name + " and She is " + Age + "years old.");
        console.log(`Students name is ${name} and she is ${Age} years Old`); //easy way

    }
    studentData("Sara", 22)
}


//third prob

let carName = "Corolla";
console.log(`this is a ${carName} car.`);

//
window.onload = function() {
    function myName(names, age) {
        console.log(`my name is ${names} and i am ${age} years old.`);
    }
    myName("Abida Aly", 22);
}