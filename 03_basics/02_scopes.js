var c = 300 // Global Scope: We use global scope inside any statement

if (true) {
  let a = 10;
  const b = 20;
  c = 30; // Block Scope: we use it inside a statement but don't outside the statement
}

// console.log(a);
// console.log(b);
// console.log(c);
