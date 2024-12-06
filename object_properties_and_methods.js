// const obj = Object();
// console.log(obj);
// obj.age = 17;
// console.log(obj);

// const obj = new Object();
// console.log(obj);
// obj.name = "Tarun";
// obj.age = 17;
// console.log(obj);


// -------------------------- Static Methods of Object --------------------------


// --> The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

// Object.assign(target)
// Object.assign(target, source1)
// Object.assign(target, source1, source2)
// Object.assign(target, source1, source2, /* …, */ sourceN)

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
// console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }
// console.log(returnedTarget === target);
// Expected output: true

const objAssign = { a: 1 };
const copy = Object.assign({}, objAssign);
// console.log(copy); // { a: 1 }




// --> The Object.defineProperties() static method defines new or modifies existing properties directly on an object, returning the object. 

// Object.defineProperties(obj, props)

const obj = {};
Object.defineProperties(obj, {
    property1: {
        value: true,
        writable: true,
    },
    property2: {
        value: "Hello",
        writable: false,
    },
    // etc. etc.
});
// console.log(obj.property2);




// --> The Object.defineProperty() static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

// Object.defineProperty(obj, prop, descriptor)

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false,
});

// object1.property1 = 77;
// Throws an error in strict mode

// console.log(object1.property1);
// Expected output: 42





// --> The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

// Object.entries(obj)

const objectEntries = {
    a: 'somestring',
    b: 42,
};
  
// for (const [key, value] of Object.entries(objectEntries)) {
//     console.log(`${key}: ${value}`);
// }
  
// Expected output:
// "a: somestring"
// "b: 42"




// --> The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.

// Object.freeze(obj)

const objFreeze = {
  num: 42,
};

// Object.freeze(objFreeze);

// objFreeze.num = 33;
// Throws an error in strict mode

// console.log(objFreeze.num);
// Expected output: 42



// --> The Object.isFrozen() static method determines if an object is frozen.

// Object.isFrozen(obj)

const objIsFrozen = {
    num: 42,
};
// console.log(Object.isFrozen(objIsFrozen));
// Expected output: false
// Object.freeze(objIsFrozen);
// console.log(Object.isFrozen(objIsFrozen));
// Expected output: true




// --> The Object.fromEntries() static method transforms a list of key-value pairs into an object.

const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42],
]);

// const objFromEntries = Object.fromEntries(entries);

// console.log(objFromEntries);
// Expected output: Object { foo: "bar", baz: 42 }




// --> The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.

// Object.hasOwn(obj, prop)

const example = {};
// Object.hasOwn(example, "prop"); // false - 'prop' has not been defined
// example.prop = "exists";
// console.log(Object.hasOwn(example, "prop")); // true - 'prop' has been defined
// example.prop = null;
// Object.hasOwn(example, "prop"); // true - own property exists with value of null
// example.prop = undefined;
// Object.hasOwn(example, "prop"); // true - own property exists with value of undefined





// --> The Object.isExtensible() static method determines if an object is extensible (whether it can have new properties added to it).

// Object.isExtensible(obj)

const objIsExtensible = {};
// console.log(Object.isExtensible(objIsExtensible));
// Expected output: true
// Object.preventExtensions(objIsExtensible);
// console.log(Object.isExtensible(objIsExtensible));
// Expected output: false




// --> The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.

// Object.keys(obj)

const objKeys = {
    a: 'somestring',
    b: 42,
    c: false,
};

// console.log(Object.keys(objKeys));
// Expected output: Array ["a", "b", "c"]
// console.log(Object.values(objKeys));
