import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

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
  let jsx = "";
  expenses.forEach((expense) => {
    jsx += (
      <ExpenseItem
        name={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
