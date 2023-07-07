import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css"

function NewExpense(props) {

    const onNewExpense = (expense) => {

        props.onNewExpense(expense);
        console.log(expense);

    }

    return (
        <div className="new-expense">
            <ExpenseForm 
                newExpense = {onNewExpense}/>
        </div>
    );
}

export default NewExpense;