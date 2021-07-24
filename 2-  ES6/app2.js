/* 
Create a variable using let
inside a block and try to reassign the value to that variable
in another block. See if you can reassign the value or not.
 */

function value1() {
    let x = 5;
}

function value2() {
    x = 7;
    console.log(x);
}

/* 
It doesNot work because let cannot be reasigned in anotrher block
it is a local block variable
 */