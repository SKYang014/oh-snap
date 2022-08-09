import React from 'react';

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
function Nav() {
    const categories = [
        {
            name: "commercial",
            description:
                "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];


    function categorySelected() {
        console.log(`clicked`)
    }

    return (
        <header>
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
                    <li>
                        <span>Contact</span>
                    </li>
                    {/* Rather than setting up event listeners with VanillaJS,  */}
                    {/* //though, we'll use the built-in onClick() method. */}
                    {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}
                        >
                            <span onClick={() => categorySelected(category.name)} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
export default Nav;