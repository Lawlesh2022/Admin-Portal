import { LineStyle, Timeline, TrendingUp, Person, Mail, Feedback, Message, ManageSearch, ManageAccounts, Report} from '@mui/icons-material'
import React from 'react'
import "./Sidebar.css"
import{Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className = "sidebar">
        <div className = "sidebarWrapper">
            <div className = "sidebarMenue">
                <h3 className = "sidebarTitle">Dashboard</h3>
                <ul className = "sidebarList">
                <li className= "sidebarListItem active">
                    <LineStyle className = "sidebarIcon"/>
                    <Link to ="/">Home</Link>                    
                </li>
                <li className= "sidebarListItem">
                    <Timeline className = "sidebarIcon"/>
                    Analytics
                </li>
                <li className= "sidebarListItem">
                    <TrendingUp className = "sidebarIcon"/>
                    Sales
                </li>
                </ul>
            </div>
            <div className = "sidebarMenue">
                <h3 className = "sidebarTitle">Quick Menu</h3>
                <ul className = "sidebarList">
                <li className= "sidebarListItem active">
                    <Person className = "sidebarIcon"/>
                    <Link to = "/users"> Users</Link>                   
                </li>
                <li className= "sidebarListItem">
                    <Person className = "sidebarIcon"/>
                    Admin User
                </li>
                <li className= "sidebarListItem">
                    <Person className = "sidebarIcon"/>
                    User Creation
                </li>
                <li className= "sidebarListItem">
                    <Person className = "sidebarIcon"/>
                    User Updation
                </li>
                <li className= "sidebarListItem">
                    <Person className = "sidebarIcon"/>
                    User Deletion
                </li>
                </ul>
            </div>
            <div className = "sidebarMenue">
                <h3 className = "sidebarTitle">Notification</h3>
                <ul className = "sidebarList">
                <li className= "sidebarListItem active">
                    <Mail className = "sidebarIcon"/>
                    Mail
                </li>
                <li className= "sidebarListItem">
                    <Feedback className = "sidebarIcon"/>
                    Feedback
                </li>
                <li className= "sidebarListItem">
                    <Message className = "sidebarIcon"/>
                    Messages
                </li>
                </ul>
            </div>
            <div className = "sidebarMenue">
                <h3 className = "sidebarTitle">Staff</h3>
                <ul className = "sidebarList">
                <li className= "sidebarListItem active">
                    <ManageSearch className = "sidebarIcon"/>
                    Manage
                </li>
                <li className= "sidebarListItem">
                    <ManageAccounts className = "sidebarIcon"/>
                    Manage Accounts
                </li>
                <li className= "sidebarListItem">
                    <Report className = "sidebarIcon"/>
                    Reports
                </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar