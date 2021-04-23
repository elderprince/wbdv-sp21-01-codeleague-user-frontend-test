import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import userService from '../services/user-service'

const Register = () => {
    const [credentials, setCredentials] = useState({username: '', password: '', role: 'USER', email: ''})
    const history = useHistory()
    const register = () => {
        userService.register(credentials)
            .then((user) => {
                console.log(user)
                if(user === 0) {
                    alert("username already taken")
                } else {
                    history.push("/profile")
                }
            })
    }
    return(
        <div>
            <h1>Register</h1>
            <input
                value={credentials.username}
                onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
                className="form-control"
                placeholder="username"/>
                <br/>
            <input
                value={credentials.email}
                onChange={(e) => {setCredentials({...credentials, email: e.target.value})}}
                className="form-control"
                placeholder="email"/>
            <br/>
            <input
                value={credentials.password}
                onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                className="form-control"
                placeholder="password"/>
            <br/>
            <input
                className="form-control"
                placeholder="validate password"/>
            <br/>
            <button onClick={register} className="btn btn-primary">
                Register
            </button>
            <br/>
            <Link to="/login">
                Login
            </Link>
        </div>
    )
}

export default Register;