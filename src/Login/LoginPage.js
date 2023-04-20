// src/components/LoginPage.js
import React, { useState } from 'react';
import {login} from "../api";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    async function onLogin(username, password) {
        try {
            const {accessToken, refreshToken} = await login(username, password);
            localStorage.setItem('accessToken', accessToken);
        } catch (error) {
            alert('Login failed. Please check your credentials and try again.');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() && password.trim()) {
            onLogin(username.trim(), password.trim()).then(r => navigate("/transfers"));

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
