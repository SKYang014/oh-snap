//This App.js file is the center of the application. Think of App.js as the 
//root component, or the wrapper component that houses all of the other 
//components. To effect any change on the application, we need to either 
//modify this file or add components inside it.
import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  //In the preceding expression, we set the initial value of contactSelected 
  //to false. This is to prevent the contact form from showing when a user 
  //initially navigates to the homepage. The Gallery will display instead, 
  //which is the first thing Lyza's customers will want to see.
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      {/* Passing the getter and setter functions into the Nav component will 
      allow this component to modify the state in the App component, which will
      conditionally render based on the user's selection. */}
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {/* Notice the <> and </> that wrap the Gallery and About components. 
          They are called React fragments—a shorthand abbreviation for 
          <React.Fragment></React.Fragment>.

          They're a useful tool in React to allow multiple elements to be grouped
          together. Although in JSX you can only return a single parent element, 
          this rule can be satisfied by wrapping the children components in a 
          React fragment. This also allows you to wrap elements without creating 
           extra DOM nodes, like wrapping with a <div> would do. */}
          {!contactSelected ? (
            <>
              <Gallery currentCategory={currentCategory}></Gallery>
              <About></About>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
//React components must always return a single parent JSX element.
//However, this element may have many children elements.

//Inside the function, it seems that HTML is all that's returned. But
//actually, it's not HTML; it's a language called JSX that can represent 
//HTML in JavaScript. Normally you can't add HTML to JavaScript, at least 
//without making it a string. But it won't break the code in this case, 
//because you're using webpack and React. Think of functions that return 
//JSX as functions that use document.createElement(JSX). In fact, the way 
//React uses JSX behind the scenes is very similar to document.createElement().
