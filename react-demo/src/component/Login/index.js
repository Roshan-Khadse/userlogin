import {Link} from 'react-router-dom'
import './index.css'

const Login =()=>{
    return(
        <div className="login-container">
            <form className="form-container">
                <h1 className="heading">User Login</h1>
                <label htmlFor="email" className="input-text">EMAIL ID</label>
                <input type="text" id="email" className="input-field" placeholder="Email ID"/>
                <label htmlFor="password" className="input-text">PASSWORD</label>
                <input type="password" id="password" className="input-field" placeholder="Password"/>
                <div>
                <button type="submit" className="login-button">Login</button>
                </div>
                <Link to={'/registration'}>
                <p>New User ? Do Registration</p>
                </Link>
            </form>
        </div>
    )
}
export default Login