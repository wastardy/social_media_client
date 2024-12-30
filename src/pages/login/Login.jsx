import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';

const Login = () => {

    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    });
    
    const [error, setError] = useState(false);
    
    const navigate = useNavigate();

    const handleChange = (event) => {
        setInputs(prev => ({
            ...prev, 
            [event.target.name] : event.target.value
        }));
    }
        
    const { login } = useContext(AuthContext);

    const handleLogin = async (event) => {
        event.preventDefault();
        
        try {
            await login(inputs);
            navigate('/')
        }
        catch (error) {
            setError(error.response?.data || 'An unexpected error occurred');
            console.error('---> smth has gone wrong in handleLogin():', error.message);
        }
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
                        <input 
                            type="text" 
                            placeholder='Username'
                            name='username'
                            onChange={handleChange}
                        />
                        <input 
                            type="password" 
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                        />
                        { error && error }
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login