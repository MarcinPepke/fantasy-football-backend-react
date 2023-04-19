// src/App.js
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TransferWindow from "./TeamView/TransferWindow";
import LoginPage from "./Login/LoginPage";
import PrivateRoute from "./component/AuthWrapper";
import AuthWrapper from "./component/AuthWrapper";
import {login} from "./api";
import Fixture from "./Fixture/Fixture";
const App = () => {

    const handleLogin = async (username, password) => {
        try {
            const { accessToken, refreshToken } = await login(username, password);
            localStorage.setItem('accessToken', accessToken);
        } catch (error) {
            alert('Login failed. Please check your credentials and try again.');
        }
    };
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                    <Route path="/fixture" element={<Fixture  />} />
                    <Route
                        path="/transfers"
                        element={
                            <AuthWrapper>
                                <Routes>
                                    <Route path="/" element={<TransferWindow />} />
                                    <Route path="/" element={<Fixture />} />
                                </Routes>
                            </AuthWrapper>
                        }
                    />

                </Routes>
            </Router>

        </div>
    );
};
export default App;
