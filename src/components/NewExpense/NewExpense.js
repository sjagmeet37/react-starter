import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseForm.css";
import "./NewExpense.css";

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  const onNewExpense = (expense) => {
    props.onNewExpense(expense);
    setShowForm(false);
  };

  const onAddExpenseShowHandler = () => {
    setShowForm(true);
  };

  const onCancelHandler = () => {
    setShowForm(false);
  }

  let newExpenseJsx;
  if (!showForm) {
    newExpenseJsx = (
      <div >
        <button onClick={onAddExpenseShowHandler}> Add Expense </button> 
      </div>
    );
  } else {
    newExpenseJsx = <ExpenseForm newExpense={onNewExpense} onCancelHandler={onCancelHandler}/>;
  }

  return <div className="new-expense">{newExpenseJsx}</div>;
}

export default NewExpense;
