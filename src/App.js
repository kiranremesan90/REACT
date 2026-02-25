
// function greet(name = "Guest") {
//   console.log(`hello ${name}`);
// }

// greet();
// greet("jiji");

// export default greet;

// function App() {
//   const fruits = ["Apple", "Orange", "Banana"];

//   return (
//     <ul>
//       {fruits.map((fruit, index) => (
//         <li key={index}>{fruit}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;

// import styles from "./App.module.css";

// function App() {
//   return (
//     <h1 className={styles.title}>
//       CSS module styling
//     </h1>
//   );
// }

// export default App;


// import React,{Component} from "react";
// class Welcome extends Component{
//   render(){ 
//     return <h1>Hello from class Component</h1>;
//   }
// }
// export default Welcome;


// import Student from "./Student";

// function App() {
//   return (
//     <div>
//       <Student name="jiji" />
//       <Student name="gomez" />
//     </div>
//   );
// }

// export default App;
// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={() => setCount(count + 1)}>
//         count
//       </button>
//     </div>
//   );
// }

// export default Counter;



// function HELLOAPP(){
// function handleclick(){
// alert ("Button clicked!");
// }
// return(
//   <div>
//     <button onClick={handleclick}>click me </button>
//   </div>
// );


// }
// export default HELLOAPP;



// import { useState } from "react";

// function HELLOAPP() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <p>Hello {name}</p>
//     </div>
//   );
// }

// export default HELLOAPP;

// function HELLOAPP(){
//   function handleSubmit(e){
//     e.preventDefault();
//     alert ("Form submitted");
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit"></button>
//     </form>
//   );
// }
// export default HELLOAPP;

function HELLOAPP(){
  function handleFocus(){
    console.log("Input Focused");
  }
  function handleBlur(){
    console.log("Input blurred");
  }
  return(
    <input
    type="text"
    onFocus={handleFocus}
    onBlur={handleBlur}
    />
  );
}
export default HELLOAPP;

