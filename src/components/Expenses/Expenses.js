import "./Expenses.css"
import Cards from "../UI/Cards";

import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesList";

function Expenses(props) {

const [filterYear, setFilterYear] = useState('2020');
  
const onExpenseFilter = (year) => {
    setFilterYear(year);
}

let expenses = props.expenses.filter(expense => {
  return filterYear === expense.date.getFullYear().toString();
});


return (
  <div>
    
    <Cards className="expenses">
    <ExpensesFilter 
    selectedYear= {filterYear}
    onExpenseFilter={onExpenseFilter}/>

    <ExpenseList 
      expenses={expenses} />

    </Cards>
  </div>

  );
}

export default Expenses;