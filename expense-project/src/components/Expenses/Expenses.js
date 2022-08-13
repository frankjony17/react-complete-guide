import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses