import "./App.css";
import Expenses from "./components/Expenses/Expenses";
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
  
  return (
    <div className="App">
      <Expenses 
        expenses = {expenses}/>      
    </div>
  );
}

export default App;
