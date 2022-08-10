
import { capitalizeFirstLetter } from "../../utils/helpers";
import React, { useEffect } from 'react';
//We could choose to hardcode all of the categories, but that would lead to 
//less DRY code. Instead, we'll use the .map() function inside a JSX expression. 
//First we'll define the categories in an array above the return statement. 
//Instead of just listing each category's name, we'll create objects that 
//contain each category's name and a short description. That way, we can use 
//that same data elsewhere in the app.

//Whenever we map over anything in JSX, the outermost element must have a key 
//attribute that's set to be something unique. This helps React keep track of 
//items in the virtual DOM.  We've seen object keys and primary/foreign keys 
//used to uniquely identify properties or items in a database.

//In this case, we used category.name because we don't expect any categories to 
//share the same name. Often the key will be an id.

//Note also the use of parentheses in the map callback to return JSX. 
//When you map over an array in a JSX expression, you should return only a
// single JSX element—like how you can only return a single element from a 
//React component.

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;
    //Notice in the preceding code block that the first argument is the callback
    // function, and the second argument is an array with a single element, 
    //currentCategory. The second argument directs the hook to re-render the 
    //component on changes to the value of this state. In other words, if 
    //currentCategory changes now, the component will re-render so that the change 
    //in document.title will be visible to the user.
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li className="mx-2">
                        <span>Contact</span>
                    </li>
                    {/* Rather than setting up event listeners with VanillaJS,  */}
                    {/* //though, we'll use the built-in onClick() method. */}
                    {categories.map((category) => (
                        <li
                            //The preceding line of code means that 
                            //currentCategory.name === category.name will get evaluated, 
                            //and as long as it is true, then the second bit of the short 
                            //circuit, navActive, will be returned.
                            className={`mx-1 ${currentCategory.name === category.name && 'navActive'
                                }`}
                            key={category.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category)
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;