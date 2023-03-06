import "./ExpenseItem.css"; //install css file

function ExpenseItem(props) {
  //React will ensure get one parameter
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenceAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{props.data.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div> //can only have one root element
  );
}

export default ExpenseItem;
