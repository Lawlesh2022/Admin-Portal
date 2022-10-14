import React from 'react'
import "./User.css"
import{PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish} from "@mui/icons-material"
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div className = "user">
        <div className = "userTitleContainer">
            <h1 className = "userTitle">Edit User</h1>
           <Link to = "/newUser">
               <button className = "userAddButton">Create</button>
            </Link>
        </div>
        <div className = "userContainer">
            <div className = "userShow">
                <div className = "userShowTop">
                    <div className = "userShowTopTitle">
                        <span className = "userShowUsername">John Smith</span>
                        <span className = "userShowUserTitle">Frontend Developer</span>
                    </div>
                </div>
                <div className = "userShowBottom"></div>
                <span className = "userShowTitle">Account Detail</span>
                <div className = "userShowInfo">
                    <PermIdentity className = "userShowIcon"/>
                    <span className = "userShowInfoTitle">johnsmith99</span>
                </div>
                <div className = "userShowInfo">
                    <CalendarToday className = "userShowIcon"/>
                    <span className = "userShowInfoTitle">12.10.2022.</span>
                </div>
                <span className = "userShowTitle">Contact Detail</span>
                <div className = "userShowInfo">
                    <PhoneAndroid className = "userShowIcon"/>
                    <span className = "userShowInfoTitle">+1 123 456 67</span>
                </div>               
                <div className = "userShowInfo">
                    <MailOutline className = "userShowIcon"/>
                    <span className = "userShowInfoTitle">johnsmith99@gmail.com</span>
                </div>
                <div className = "userShowInfo">
                    <LocationSearching className = "userShowIcon"/>
                    <span className = "userShowInfoTitle">New York | USA</span>
                </div>
            </div>
            <div className = "userUpdate">
                <span className = "userUpdateTitle">Edit</span>
                <form className = "userUpdateForm">
                    <div className = "userUpdateLeft">
                        <div className = "userUpdateItem">
                            <label>Username</label>
                            <input type ="text" placeholder = "johnsmith99" className = "userUpdateInput"/>
                        </div>
                        <div className = "userUpdateItem">
                            <label>Full Name</label>
                            <input type ="text" placeholder = "John Smith" className = "userUpdateInput"/>
                        </div>
                        <div className = "userUpdateItem">
                            <label>Email</label>
                            <input type ="text" placeholder = "johnsmith99@gmail.com" className = "userUpdateInput"/>
                        </div>
                        <div className = "userUpdateItem">
                            <label>Phone</label>
                            <input type ="text" placeholder = "+1 123 456 67" className = "userUpdateInput"/>
                        </div>
                        <div className = "userUpdateItem">
                            <label>Address</label>
                            <input type ="text" placeholder = "New York | USA" className = "userUpdateInput"/>
                        </div>
                    </div>
                    <div className = "userUpdateRight">
                        <div className = "userUpdateUpload">
                            <label htmlFor = "file"><Publish/></label>
                            <input type = "file" id = "file" style = {{display: "none"}}/>
                        </div>
                        <Link to='/users'>
                        <button className = "userUpdateButton">Update</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User