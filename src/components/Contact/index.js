
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

//Notice that we named the function ContactForm, not Contact. The name
//of this function isn't critical and doesn't have to match the name 
//of the component folder. But the name of the function needs to be 
//in the export statement.
function ContactForm() {

    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] =
        //, formState will have three key-value pairs to represent the three user 
        //inputs: name, email, and message. Now let's add the defaultValue attribute 
        //to each of the three form elements that'll handle form data. With this 
        //attribute, we can assign the initial state values to the input fields in 
        //the DOM, 
        useState({ name: '', email: '', message: '' });

    //A feature of this Hook is the ability to initialize the values of the 
    //state. In this case, we want to clear the input fields on the component 
    //loading. Thus, we'll set the initial state to empty strings,
    const { name, email, message } = formState;
    //we're using the setFormState function to update the formState value for 
    //the name property. We assign the value taken from the input field in the
    // UI with e.target.value and assign this value to the property 
    //formState.name. We use the spread operator, ...formState, so we can 
    //retain the other key-value pairs in this object. Without the spread 
    //operator, the formState object would be overwritten to only contain
    // the name: value key pair.

    //Note that console.log(formState) is located outside the handleChange 
    //function declaration—because the asynchronous nature of the setFormState 
    //function will cause the console.log placed in the function body of
    // handleChange to appear delayed in its ability to sync. However, when we
    // place the console.log in the scope of the ContactForm function, we can
    // see that the state is updated properly
    function handleChange(e) {

        //add validation in the handleChange function, allowing validation of the 
        //form data before syncing the form data with the state, formState.

        //Begin by targeting the email <input> element. Then we'll validate 
        //the value of the email input field by using the validateEmail function, 
        //which returns a Boolean: true if valid and false if invalid. Let's 
        //store that return value in a constant called isValid
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            //In this preceding statement, we're checking the message and name 
            //form element values. The nested conditional statement checks whether
            // the values of these elements are blank. If the input values are 
            //blank, an error message is assigned to errorMessage; if not, 
            //errorMessage is set to empty string, meaning that there's no error.
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        //The preceding conditional statement only allows the state to update
        // with the user input if there is no error message, 
        //which is the correct logic.
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    //console.log(formState);  showed rt updates

    //This function should look straightforward. We'll prevent the default action 
    //of the form Submit button and then log the formState object on the Submit 
    //button click
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    {/* Due to keywords reserved in JavaScript, we need to 
                    replace the for attribute in the <label> element to htmlFor, 
                    just as class had to be changed to className previously. */}
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} name="name" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;