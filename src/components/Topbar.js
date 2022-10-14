import React from 'react'
import "./Topbar.css";
import { NotificationsNone, Language, Settings} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className = "topbar">    
        <div className = "topbarWrapper">
             <div className = "topLeft">
                <span className = "logo">Adminportal</span>
             </div>
             <div className = "topright">
                <Link to = '/'>
                <button className = "logoutButton">Logout</button> 
                </Link>
                <div className = "topbariconsContainer">
                     <NotificationsNone/>
                     <span className = "topiconBadge">2</span>
                </div>            
                <div className = "topbariconsContainer">
                     <Language/>
                     <span className = "topiconBadge">2</span>
                </div>            
                <div className = "topbariconsContainer">
                     <Settings/>                    
                </div>
                <img src = "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "img" className = "topimage"/>
              </div>                        
        </div>       
    </div>
  )
}

export default Topbar