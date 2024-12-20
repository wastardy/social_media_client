import { Link } from 'react-router-dom';
import './login.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Login = () => {

    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        login();
    }

    return (
        <div className='login'>
            <div className="card">
                
                {/* Left Side */}
                <div className="left">
                    <h1>Welcome to Connectify!</h1>
                    <p>
                        Connectify is the place where people come together, 
                        share life moments, and stay connected with friends. 
                        Join us to be part of something amazing!
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                </div>

                {/* Right Side */}
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder='Username'/>
                        <input type="password" placeholder='Password'/>
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login