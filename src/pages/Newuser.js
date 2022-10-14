import React from 'react'
import "./Newuser.css"
import{Link} from 'react-router-dom'


const Newuser = () => {
  return (
    <div className = "newUser">
        <h1 className = "newUserTitle">New User</h1>
        <form className = "newUserForm">
            <div className = "newUserItem">
                <label>Username</label>
                <input type = "text" placeholder = "john"/>
            </div>
            <div className = "newUserItem">
                <label>Fullname</label>
                <input type = "text" placeholder = "John Smith"/>
            </div>
            <div className = "newUserItem">
                <label>Email</label>
                <input type = "text" placeholder = "john@gmail.com"/>
            </div>
            <div className = "newUserItem">
                <label>Password</label>
                <input type = "password" placeholder = "password"/>
            </div>
            <div className = "newUserItem">
                <label>Phone</label>
                <input type = "text" placeholder = "+1 123 456 78"/>
            </div>
            <div className = "newUserItem">
                <label>Address</label>
                <input type = "text" placeholder = "New York | USA"/>
            </div>
            <div className = "newUserItem">
            <label>Gender</label>
                <div className = "newUserGender">                
                    <input type = "radio" name = "gender" id = "male" value = "Male"/>
                    <label for = "male">Male</label>
                    <input type = "radio" name = "gender" id = "female" value = "Female" />
                    <label for = "female">Female</label>
                    <input type = "radio" name = "gender" id = "other" value = "Other" />
                    <label for = "other">Other</label>
                </div>
            </div>
            <div className = "newUserItem">
            <label>Active</label>
            <select className = "newUserSelect" name = "active" id = "active">
                <option value = "yes">Yes</option>
                <option value = "no">No</option>
            </select>
            </div>
            <div>
                <Link to = '/users'>
                <button className = "newUserButton">Create</button>
                </Link>
            </div>
        </form>
    </div>
  )
}

export default Newuser