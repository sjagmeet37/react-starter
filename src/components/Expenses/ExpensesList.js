import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css'

function ExpenseList(props) {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  }

  const expenses = props.expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      name={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
))

  return (<ul className="expenses-list">
    {expenses}
  </ul>);
}

export default ExpenseList;
