import React from 'react'; //react module
import ReactDOM from 'react-dom'; //react-dom module
import './test.css' //importing  css file
//1. TO DISPLAY IN REACT :


//ReactDOM.render(<h1>Hello Shruti</h1>,document.getElementById('root')); first method to dispaly
/* var  h1 =document.createElement('h1');
h1.innerHTML="hello world";
document.getElementById('root').appendChild(h1);  other method to display */
//if you want to display multiple elements you can enclose it in div tag
//ReactDOM.render(<div><h1>Hello Shruti</h1> <h3>How are you</h3></div>,document.getElementById('root'));
//If your react version is  greater than 16 you can return array of elements
//ReactDOM.render([<h1>Hello Shruti</h1>, <h3>How are you</h3>,<p>What do you do?</p>],document.getElementById('root'));


//2. REACT FRAGMENT


//React Fragment
/*ReactDOM.render(<React.Fragment>
  <h1>Hello Guys</h1>
  <h3>Kese Ho</h3>
  </React.Fragment>,
  document.getElementById('root')
  
);
*/
//in 16.2 react version a new fragment syntax was introduced 
/*ReactDOM.render(<>
  <h1>Hello Guys</h1>
  <h3>Chai Pelo</h3>
  </>,
  document.getElementById('root')
  
); */


//3. JAVASCRIPT EXPRESSIONS IN JSX


//If you want to use javascript in jsx 
//write javascript inside pair of curly braces
//const name="Shruti Vohra";
//ReactDOM.render(<p>My name is name</p>,document.getElementById('root')); wrong
//ReactDOM.render(<p>My name is {name}</p>,document.getElementById('root')); correct
//ReactDOM.render(<><p>My name is {name}</p>
//<h1>My favourite number is {Math.random()} </h1>

//</>,document.getElementById('root'));
//We can use only expressions inside these curly braces and not statements


//# 4. TEMPLATE LITERALS IN JSX



//Template  Literals in jsx
//To print multiple expression in a single line
//# method1  using multiple times curly braces
/*const fname="Shruti";
const lname="Vohra"
ReactDOM.render(<h1>My name is  {fname} {lname}</h1>,document.getElementById('root')); */
//#method 2
//Using concatenation
/*const fname="Aditi";
const lname="Goel"
ReactDOM.render(<h1>My name is  {fname+" "+lname}</h1>,document.getElementById('root')); */
//#3 method 3
//Using Template Literals
/*const fname="Aditi";
const lname="Goel"
const company="Shopclues";
ReactDOM.render(

  <>
    <h1>{`My name is ${fname} ${lname}`}</h1>
    <h1>{`I am working in ${company}`}</h1>
  </>,
  document.getElementById('root')

); */
//Template Literals Are written inside curly braces in jsx and if u want to use js inside it 
//syntax is ${javascript expression}
//Template Literals use backticks instead of quotes to define  A  string


//# 5. JSX ATTRIBUTES 


// JSX attributes
// HTML attributes provide additional information about HTML elements.
//JSX attributes are same as HTML attributes
//The only difference is  in JSX the attributes are written in camelCase
/*ReactDOM.render(

  <>
    <h1 contentEditable="true">My name is Shruti</h1>
    
  </>,
  document.getElementById('root')

); */
// The empty tags must be a self closing tag in JSX
// Every tag must be close in JSX
/*const link="https://www.facebook.com/";
ReactDOM.render(

  <>
    <h1 contentEditable="true">My name is Shruti</h1>
    <a href={link} target="_blank">
    <img src="" alt="picture"/>
    </a>
    
  </>,
  document.getElementById('root')

);
*/

//6. Importing Styling And CSS in ReactJs
//You have to import CSS file in your js file as import'./index.css'
// ReactDOM.render(<>
// <h1 className="para">Hello Shruti This Side</h1>
// </>,document.getElementById('root'));
// //in react we do not write class attribute insted we use className;


//7. Inline CSS in React JS
//Treat inline css as a object in JSX also the property value should be wriiren in quotes
//Also the CSS properties should be written in camelCAse.
//Use double curly braces for inline CSS

//ReactDOM.render(<>
  // <h1  style={{color:'red',textAlign:'center'}}>Hello Shruti This Side</h1>
  // </>,document.getElementById('root'));
  
// Other Way of Writing inline CSS first create object then provide the name of the object
// const obj = {
//   color:"blue",
//   margin: "200px 400px"
// };

// ReactDOM.render(<>
//    <h1  style={obj}>Hello Shruti This Side</h1>
//    </>,document.getElementById('root'));





