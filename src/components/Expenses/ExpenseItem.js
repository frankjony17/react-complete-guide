// import React, { useState } from 'react';

import './ExpenceItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle("Update Title");
    //     console.log("Clicked!!!");
    // };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
                {/*<button onClick={clickHandler}>Button</button>*/}
            </div>
        </Card>
    );
};

export default ExpenseItem;