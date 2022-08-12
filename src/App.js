import {useState} from "react";

import './App.css';
import EXPENSE from "./utils/DataArray";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const DATA_EXPENSE = EXPENSE;

const App = () => {
    const [expenses, setExpenses] = useState(DATA_EXPENSE)

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
