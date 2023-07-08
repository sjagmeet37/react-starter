import "./Expenses.css"
import Cards from "../UI/Cards";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {

const [filterYear, setFilterYear] = useState('2020');
  
const onExpenseFilter = (year) => {
    console.log(year);
    setFilterYear(year);
}

const expenses = props.expenses;
console.log(expenses)
console.log(typeof expenses )

return (
  <div>
    
    <Cards className="expenses">
    <ExpensesFilter 
    selectedYear= {filterYear}
    onExpenseFilter={onExpenseFilter}/>

    {expenses.map(expense => 
      <ExpenseItem
        key={expense.id}
        name={expense.title}
        amount={expense.amount}
        date={expense.date}
    />
    )}

    </Cards>
  </div>

  );
}

export default Expenses;