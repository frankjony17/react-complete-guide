import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import {useState} from "react";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2022')

    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expenses => {
        return expenses.date.getFullYear().toString() === filterYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />

            {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
};

export default Expenses