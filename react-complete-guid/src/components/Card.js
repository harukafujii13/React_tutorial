import "./Card.css";
function Card(props) {
  const classes = "card " + props.className; // <div class = "card expenseItemのクラス名"
  return <div className={classes}>{props.children}</div>;
}

export default Card;

// props.childrenはExpenseItemの以下の該当
// <ExpenseDate date={props.date} />
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
