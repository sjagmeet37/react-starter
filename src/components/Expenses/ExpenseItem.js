import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Cards from "../UI/Cards";
import { useState } from "react";

function ExpenseItem(props) {
 
  const [name, setName] = useState(props.name);
  const clickHandler = function() {
    setName("Updated name");
    console.log("Clicked !!!!!!")
  }

  // setTimeout(() => {setName('Timout Name')}, 10000);
  return (
    <Cards className="expense-item">
        <ExpenseDate 
        date={props.date}/>
      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Click for Event</button>
      </div>
    </Cards>
  );
}

export default ExpenseItem;
