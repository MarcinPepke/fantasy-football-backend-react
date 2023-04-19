// src/components/LoginPage.js
import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() && password.trim()) {
            onLogin(username.trim(), password.trim());
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
