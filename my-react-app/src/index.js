import React from 'react';
import ReactDOM from 'react-dom/client';

const title = (
  <center><h1>Happy Birthday!</h1>
  <h2>To the best mom in the world</h2></center>
  
);
const subtitle = (
  <center><h2>To the best mom in the world</h2></center>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(title);





// class Car {
//   constructor(name) {
//     this.brand = name;
//   }
//   present() {
//     return  "I have a " + this.brand;
//   }
// }
// class Model extends Car {
//   constructor(name, mod) {
//     super(name);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ", it is a " + this.model
//   }
// }

// const myArray = ["apples", "bannanas", "oranges", "omg fruits"];
// const myList = myArray.map((item) => <p>{item}</p>);

// const mycar = new Model("Ford", "Mustang")

// const myElement = <h1>{myList}</h1>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);