import React from "react";
import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};


export default UsersList;

//Each list item displays the user's name and age, which are accessed through the users object using the dot notation. 
// The age is displayed in parentheses after the name.

