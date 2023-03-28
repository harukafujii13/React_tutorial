import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
  //margin external class and internal class
};

export default Card;

//the className prop can be used to add any custom classes to the element that is being styled. 
//This is what is happening in the <Card className={classes.input}> code, where a custom class named "input" is being added to the Card component.

//So, the <div className={${classes.card} ${props.className}}> and <Card className={classes.input}> 
//are related in that the className prop is used to apply CSS classes to both elements, 
//with the Card component defining the overall styling for the card and the custom class 
//applied to it further customizing its appearance.
