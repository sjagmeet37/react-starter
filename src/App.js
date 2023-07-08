import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  let expenses = [
    { id: "1", title: "title1", date: new Date("2023-06-30"), amount: 100 },
    { id: "2", title: "title2", date: new Date("2023-06-30"), amount: 200 },
    { id: "3", title: "title3", date: new Date("2023-06-30"), amount: 300 },
    { id: "4", title: "title4", date: new Date("2023-06-30"), amount: 400 },
    { id: "5", title: "title5", date: new Date("2023-06-30"), amount: 500 },
    { id: "6", title: "title6", date: new Date("2023-06-30"), amount: 600 },
    { id: "7", title: "title7", date: new Date("2023-06-30"), amount: 700 },
    { id: "8", title: "title8", date: new Date("2023-06-30"), amount: 800 },
    { id: "9", title: "title9", date: new Date("2023-06-30"), amount: 900 },
  ];

  const [expenseList, setExpenseList] = useState(expenses);
  
  const addExpense = (expense) => {
      console.log(expense);
      setExpenseList((prevState) => {
          return [...prevState, expense];
      });
      expenses.push(expense);
  }

  return (
    <div className="App">
      <NewExpense 
      onNewExpense={addExpense}/>
      <Expenses 
        expenses = {expenseList}/>      
    </div>
  );
}

export default App;
