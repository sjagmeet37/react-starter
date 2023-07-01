import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Cards from "./Cards";

function ExpenseItem(props) {
 

  return (
    <Cards className="expense-item">
        <ExpenseDate 
        date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Cards>
  );
}

export default ExpenseItem;
