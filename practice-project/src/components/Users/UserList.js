
import styles from './UsersList.module.css'
import Card from "../UI/Card";


const UserList = props => {
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map((user, index) => (
                    <li key={index}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;