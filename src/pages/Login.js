import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className = "login">
        <form className = "logincontainer">
           <div className="mb-3">
               <label forHTML="exampleInputEmail1" className="form-label">Email address</label>
               <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
               
            </div>
            <div className="mb-3">
                <label forHTML="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" forHTML="exampleCheck1">Check me out</label>
            </div>
            <Link to = '/home'>
            <button type="submit" className="btn btn-primary">Submit</button>
            </Link>
        </form>
    </div>
  )
}

export default Login