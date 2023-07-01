import "./Expenses.css"
import Cards from "../UI/Cards";

import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
const expenses = props.expenses;
return (
    <Cards className="expenses">
      <ExpenseItem
        name={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        name={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        name={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        name={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
      <ExpenseItem
        name={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Cards>
  );
}

export default Expenses;