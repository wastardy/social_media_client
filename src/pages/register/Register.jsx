import { Link } from 'react-router-dom';
import './register.scss';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
        name: '',
    });

    const [error, setError] = useState(false);

    const handleChange = (event) => {
        setInputs(prev => ({
            ...prev, 
            [event.target.name] : event.target.value
        }));
    }

    const handleClick = async (event) => {
        event.preventDefault();

        try {
            await axios.post('http://localhost:8800/api/auth/register', inputs);
            alert('User registered successfully!');
        }
        catch (error) {
            if (error.response && error.response.status === 409) {
                setError(true);
            }
            else {
                console.error('---> smth has gone wrong in handleClick():', error.message);
            }
        }
    }

    return (
        <div className='register'>
            <div className="card">
                
                {/* Left Side */}
                <div className="left">
                    <h1>Connectify Media</h1>
                    <p>
                        Connectify is the place where people come together, 
                        share life moments, and stay connected with friends. 
                        Join us to be part of something amazing!
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>    
                </div>

                {/* Right Side */}
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input 
                            type="text" 
                            placeholder='Username' 
                            name='username' 
                            onChange={handleChange}
                        />
                        <input 
                            type="email" 
                            placeholder='Email' 
                            name='email' 
                            onChange={handleChange}
                        />
                        <input 
                            type="password" 
                            placeholder='Password' 
                            name='password' 
                            onChange={handleChange}
                        /> 
                        <input 
                            type="text" 
                            placeholder='Name' 
                            name='name' 
                            onChange={handleChange}
                        />
                        { error && error }
                        <button onClick={handleClick}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register