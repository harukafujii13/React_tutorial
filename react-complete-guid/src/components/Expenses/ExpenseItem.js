import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"; //install css file

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title); //it must be called inside component function
  // the first element is the current state value
  // the second element is a function for updating that

  // console.log("ExpenseItem evaluated by React");

  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card> //can only have one root element
  );
};

export default ExpenseItem;

//if there is no content between the opening and closing tag
// <ExpenseData></ExpenseData> → <ExpenseData />
