import "./ExpenseItem.css"
function ExpenseItem() {

    let expenseDate = new Date();
    let expenseName = "Fuel";
    let expenseAmount = 290
;    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div  className="expense-item__description">
                <h2>{expenseName}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem