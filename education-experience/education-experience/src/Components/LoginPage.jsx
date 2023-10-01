import React, { useState } from 'react';
import './login.css'; 

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    


    const handleLoginClick = async () => {
        // Check if email and password are not empty
        if (!email || !password) {
            setError('Please provide both email and password.');
            return;
        }}
    
    return (
        <div>
        <div className="container_login">
        <h1 className="login">Login</h1>
        <div className="input_login">
            <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            type="tel" 
            placeholder="Phone number" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
            <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button onClick={handleLoginClick} className="submit_login-btn">Login</button>
    </div>
    </div>
    
    );
}

export default LoginPage;