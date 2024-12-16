import './register.scss';

const Register = () => {
    return (
        <div className='register'>
            <div className="card">
                
                {/* Left Side */}
                <div className="left">
                    <h1>Welcome to Connectify!</h1>
                    <p>
                        Connectify is the place where people come together, 
                        share life moments, and stay connected with friends. 
                        Join us to be part of something amazing!
                    </p>
                    <span>Do you have an account?</span>
                    <button>Login</button>
                </div>

                {/* Right Side */}
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder='Username'/>
                        <input type="text" placeholder='Name'/>
                        <input type="email" placeholder='Email'/>
                        <input type="password" placeholder='Password'/>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register