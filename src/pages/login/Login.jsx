import './login.scss';

const Login = () => {
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
                    <button>Register</button>
                </div>

                {/* Right Side */}
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder='Username'/>
                        <input type="password" placeholder='Password'/>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login