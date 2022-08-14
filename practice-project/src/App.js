import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import List from "./utils/Users";


function App() {
    const [userList, setUserList] = useState(List)

    const addUserHandler = (userName, userAge) => {
        setUserList((prevUserList) => {
            return [{
                id: prevUserList.length + 1,
                name: userName,
                age: userAge
            }, ...prevUserList];
        })
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UserList users={userList}/>
        </div>
    );
}

export default App;
