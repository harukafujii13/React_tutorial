import React from "react";
import classes from './Button.module.css'

const Button = props => {
  return(
  <button className={classes.button} 
  type={props.type || 'button'} 
  onClick={props.onClick}>
    {props.children}
  </button>
  )
}

export default Button;

// The props.children element(s) nested inside the button tags are also rendered. 
// This allows for the passing of child elements to the button component, such as text or icons to be displayed on the button.

// Finally, the component is exported as the default export of the module, 
// making it available for use in other parts of the application.

// This version of the "Button" component is a bit more flexible and customizable compared to the previous one, 
// as it allows for the addition of an onClick event handler and the passing of child elements. 
// This can be useful for creating more complex and dynamic button components.