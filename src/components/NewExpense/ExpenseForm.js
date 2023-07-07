
import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {

    // using multiple states to manage variable
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');

    // single state approach to manage variables

    const [userInpur, setUserInput] = useState({
        title : "",
        amount : "",
        date : ""
    });


    
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        console.log(event.target.value);

        //setting avriable in single state
        setUserInput({
            ...userInpur,
            title : event.target.value
        })

        //above assignment has issue as states are not updated instantly but they are scheduled 
        // and you might be operating on stale data use method below and prevState provided by default by react

        setUserInput( (prevState) => {
            return {
                ...prevState,
                title : event.target.value
            };
        });

    }

    const dateChangeHandler = (event) => {
        setTitle(event.target.value);
        console.log(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setTitle(event.target.value);
        console.log(event.target.value);
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2000-01-01" max="2100-01-01" onChange={dateChangeHandler}/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'> Add Expense </button> 
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;