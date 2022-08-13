import {useState} from "react";

import './App.css';
import DATA_EXPENSE from "./utils/DataArray";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = DATA_EXPENSE;

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpenseHandler = expense => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
