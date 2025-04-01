// Intentional errors in JavaScript

function testFunction() {
    let x = 10;
    const y; // Syntax Error: Missing initializer

    if(x == 10) {
        console.log("X is 10");
    }
    
    undeclaredVar = "This is an undeclared variable"; // Reference Error
    
    console.log(z); // Reference Error: z is not defined
}

testFunction();
