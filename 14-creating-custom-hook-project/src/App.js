import React, {useEffect, useState} from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from "./hook/use-http";

function App() {
    const [tasks, setTasks] = useState([]);

    const { isLoading, error, sendRequest: fetchTasks } = useHttp();

    useEffect(() => {
        const transformTasks = taskObject => {
            const loadedTasks = [];

            for (const key in taskObject) {
                loadedTasks.push({ id: key, text: taskObject[key].text });
            }
            setTasks(loadedTasks);
        };
        fetchTasks(
            { url: 'https://react-http-86879-default-rtdb.firebaseio.com/tasks.json' },
            transformTasks
        );
    },[fetchTasks]);

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
          <NewTask onAddTask={taskAddHandler} />
          <Tasks
            items={tasks}
            loading={isLoading}
            error={error}
            onFetch={fetchTasks}
          />
        </React.Fragment>
    );
}

export default App;
