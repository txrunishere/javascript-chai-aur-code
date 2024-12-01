# JavaScript and Classes

## OOP (Object Oriented Programming)

## Object

- Colloction of Properties and Methods. For ex., toUpperCase(), toLowerCase(), and we write new Promise() is also a Object

## Parts of OOP

- Object Literals

- It Includes :

1. Constructor function
2. Prototypes
3. Classes
4. Instances (new, this)

## 4 pillers of OOP

- Abstraction: Abstraction focuses on hiding implementation details and showing only the essential features.

- Implementation: JavaScript does not have built-in abstract classes, but you can simulate abstraction using base classes or interfaces-like patterns

```
class Shape {
    constructor(name) {
        if (new.target === Shape) {
            throw new Error("Cannot instantiate abstract class");
        }
        this.name = name;
    }

    calculateArea() {
        throw new Error("Must override method");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

const circle = new Circle(5);
console.log(circle.calculateArea()); // 78.53981633974483
```

- Encapsulation: Encapsulation in JavaScript is achieved by grouping related data and methods inside an object or class and controlling access to that data using public and private methods.

- Implementation: Encapsulation can be enforced using classes and private fields (# in modern JavaScript).

```
class Person {
    #name; // private field
    #age;  // private field

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }
}

const person = new Person("Alice", 30);
console.log(person.getName()); // Alice
// console.log(person.#name); // Error: Private field '#name' must be declared
```

- Inheritance: Inheritance allows a class to acquire the properties and methods of another class.

- Implementation: Use the extends keyword to create a subclass.

```
class Animal {
    speak() {
        return "Some sound";
    }
}

class Dog extends Animal {
    speak() {
        return "Bark";
    }
}

const dog = new Dog();
console.log(dog.speak()); // Bark
```

- Polymorphism: Polymorphism allows methods to behave differently based on the object that invokes them.

- Implementation: Achieved through method overriding in subclasses.

```
class Animal {
    speak() {
        return "Some sound";
    }
}

class Dog extends Animal {
    speak() {
        return "Bark";
    }
}

class Cat extends Animal {
    speak() {
        return "Meow";
    }
}

const animals = [new Dog(), new Cat()];
animals.forEach(animal => console.log(animal.speak())); // Bark, Meow

```
