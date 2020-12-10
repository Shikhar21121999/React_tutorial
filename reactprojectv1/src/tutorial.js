
// This file is filled up of some ES6 code snippets
// That we learn 


// Classes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes


// Classes was introduced in js in 2015 wiht ES6

// Class declarations

class Rectangle{
    // here we declare a class 
    constructor(hieght,width){
        // In js only a single constructor is allowed for a class
        this.hieght=hieght;
        this.width=width;
    }
}

// creating an object of the class 

const rect1=new Rectangle(5,4);
console.log(rect1);


// Hoisting

// unlike function class expression are not hositing
// That is you have to declare classes before using theme

// class expression

// Read from docs



// Sub classing with extends

class Animal{
    // parent class
    constructor(name){
        this.name =name;
    }

    speak(){
        console.log(`{this.name} makes a noise`);
    }
}

class Dog extends Animal{
    
    // Dog class which extends Animal class
    constructor(name,breed){
        // If there is a constructor present in the subclass, it needs to first call super() before using "this".
        super(name);
        this.breed =breed;
    }

    speak(){
        console.log(`${this.name} of breed ${this.breed} barks`);
    }


}

let d=new Dog("mitzie","Lebrador")
d.speak()