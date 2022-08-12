import './App.css';

import data from "./utils/DataArray";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const App = () => {
    const addExpenseHandler = expense => {
        console.log('In App.js');
        console.log(expense);
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={data} />
        </div>
    );
};

export default App;
