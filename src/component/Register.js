// src/components/LoginPage.js
import React, { useState } from 'react';
import {login, register} from "../api";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');





    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() && password.trim()) {
            register(username.trim(), password.trim()).then(() => navigate("/login"));

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
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
};

export default RegisterPage;
