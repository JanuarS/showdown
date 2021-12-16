import React, {useState} from "react";
import UserForm from "../UserForm";
import { v4 as uuid } from "uuid";
import "./style.css"

const UsersList = () => {
    const [users, setUsers] = useState([]);

    const renderUsers = () => {
        return (
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username}
                    </li>
                ))}
            </ul>
        );
    };

    const addUser = user => {
        let newUser = {...user, id: uuid()};
        setUsers(users => [...users, newUser]);
    };

    return (
        <div className="UsersList">
            <UserForm addUser={addUser} />
            {renderUsers()}
        </div>
    );

};

export default UsersList;