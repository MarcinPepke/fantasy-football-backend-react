import React, {useState} from 'react';
import {isTeam, login} from "../api";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    async function onLogin(username, password) {
        try {
            const {accessToken} = await login(username, password);
            localStorage.setItem('accessToken', accessToken);
        } catch (error) {
            alert('Login failed. Please check your credentials and try again.');
        }
    }

    async function hasTeam() {
        return await isTeam();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username.trim() && password.trim()) {
            await onLogin(username.trim(), password.trim())
            let hasTeamUser = await hasTeam();
            console.log(hasTeamUser)
            hasTeamUser ? navigate("/transfers") : navigate("/create-team");

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
