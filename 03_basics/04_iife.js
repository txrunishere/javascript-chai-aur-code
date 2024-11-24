// Immediately Invoked Function Expressions (IIFE)


// Named IIFE
(function chai() {
  console.log("Hello World");
})(); 


// Simple arrow IIFE
(() => {
    console.log("Hii, i am a arrow function");
})(); 


// IIFE with arguments and parameters
((name) => {
    console.log(`Hii, ${name}`);
})('tarun');


// ****NOTE: always use a semicolan after use a IIFE