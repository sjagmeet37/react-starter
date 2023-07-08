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
return (
  <div>
    
    <Cards className="expenses">
    <ExpensesFilter 
    selectedYear= {filterYear}
    onExpenseFilter={onExpenseFilter}/>
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
  </div>

  );
}

export default Expenses;