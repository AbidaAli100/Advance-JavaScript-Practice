//Repeat Method

windows = () => {
    let str = "Car  "
    console.log(str.repeat(10))
}
windows()

//Starts with method

function startMethod() {
    let str = "goodbye"
    console.log("e.g1", str.startsWith("bye", 4)); //true
    console.log("e.g2", str.startsWith("good")); //true
    console.log("e.g3", str.endsWith("bye"));
    console.log("e.g4", str.endsWith("good", str.length - 3)) //true
}
startMethod()

// using if statement

const greet = () => {
    let youSay = "Hi"
    if (youSay.startsWith("Hi")) {
        var iSay = "bye"
    }
    console.log(`you say ${youSay}, and i say ${iSay}`)

}
greet()

//includes method

const includesMethod = () => {
    let name = "my name is abida ali"
    console.log("includes method = ", name.includes("abida"))
}
includesMethod()