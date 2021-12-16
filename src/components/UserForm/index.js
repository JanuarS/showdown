import React, {useState} from "react";
import "./style.css";

/* 
    UserForm components used to register new users and login existing users

*/

const UserForm = ({addUser}) => {
    const INITIAL_STATE = {
        username: "",
        email: "",
        password: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    const [isInvalid, setIsInvalid] = useState(true); 

    const handleChange = (evt) => {
        const {name, value} = evt.target;

        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        addUser(formData);
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
                id="username" 
                type="text" 
                name="username"
                placeholder="username" 
                value={formData.username} 
                onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input 
                id="email" 
                type="email" 
                name="email"
                placeholder="email" 
                value={formData.email} 
                onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input 
                id="password" 
                type="password" 
                name="password"
                placeholder="password" 
                value={formData.password} 
                onChange={handleChange}
            />

            <button>Submit</button>
        </form>
    )
}

export default UserForm;