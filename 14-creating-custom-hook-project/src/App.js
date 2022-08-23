import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from "./hook/use-http";

function App() {
    const [tasks, setTasks] = useState([]);

    const transformTasks = (taskObject) => {
      const loadedTasks = [];

      for (const key in taskObject) {
          loadedTasks.push({ id: key, text: taskObject[key].text });
      }
      setTasks(loadedTasks);
    };

    const { isLoading, error, sendRequest } = useHttp(
        { url: 'https://react-http-86879-default-rtdb.firebaseio.com/tasks.json' },
        transformTasks
    );

    useEffect(() => { sendRequest(); },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

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
            onFetch={sendRequest}
          />
        </React.Fragment>
    );
}

export default App;
