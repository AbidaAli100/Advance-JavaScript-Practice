//sets
window.onload = function() {


    let names = new Set();
    names.add("Abida").add("lexa").add("ali").add("ali").add("hajbibi")
        //it will not add the last value because it takes unique values..



    //delete method 
    console.log(names.delete("Abida"))
        //it will return a boolean value  .. true//false
        //we cannot repeate(.delete) 


    //size methode
    console.log(names.size)

    //has method
    console.log("has method = ", names.has("ali")) //it will return a boolean

    //clear method
    // names.clear() 
    //.. it will clear the set.. //Set(0) {} will the the answer
    console.log(names)
}