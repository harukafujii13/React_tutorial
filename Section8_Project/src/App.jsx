import React, {useState} from "react"
import AddUser from "./assets/components/Users/AddUser";
import UsersList from "./assets/components/Users/UsersList";


function App(){
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  
  return(
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  )
}

export default App

//The empty array {[]} passed as the users prop in this JSX expression means that initially, 
// there are no users to be displayed in the UsersList component.
// Once the AddUser component is used to add new users to the list and the users prop is updated with the new data, 
// the UsersList component will re-render and display the updated list of users.
