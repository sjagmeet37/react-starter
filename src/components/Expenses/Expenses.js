import "./Expenses.css"
import Cards from "../UI/Cards";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {

const [filterYear, setFilterYear] = useState('2020');
  
const onExpenseFilter = (year) => {
    setFilterYear(year);
}

let expenses = props.expenses.filter(expense => {
  return filterYear === expense.date.getFullYear().toString();
});

let expenseContent = <p>No items fount!</p>

if(expenses.length > 0) {
    expenseContent = expenses.map(expense => 
      <ExpenseItem
        key={expense.id}
        name={expense.title}
        amount={expense.amount}
        date={expense.date}
    />
    );
}


return (
  <div>
    
    <Cards className="expenses">
    <ExpensesFilter 
    selectedYear= {filterYear}
    onExpenseFilter={onExpenseFilter}/>

    {expenseContent}

    </Cards>
  </div>

  );
}

export default Expenses;