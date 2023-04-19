// src/App.js
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TransferWindow from "./TeamView/TransferWindow";
import LoginPage from "./Login/LoginPage";
import PrivateRoute from "./component/AuthWrapper";
import AuthWrapper from "./component/AuthWrapper";
import {login} from "./api";
const App = () => {
    const [userTeam, setUserTeam] = useState({
        players: [],
        totalCost: 0,
        transferPoints: 0,
    });

    const addPlayer = (player) => {
        if (userTeam.players.length >= 15) {
            alert('You cannot have more than 15 players in your team.');
            return;
        }

        const positionCount = userTeam.players.filter((p) => p.position === player.position).length;

        if (
            (player.position === 'Goalkeeper' && positionCount >= 2) ||
            (player.position === 'Defender' && positionCount >= 5) ||
            (player.position === 'Midfielder' && positionCount >= 5) ||
            (player.position === 'Forward' && positionCount >= 3)
        ) {
            alert(`You cannot have more than ${positionCount} ${player.position}s in your team.`);
            return;
        }

        setUserTeam((prevState) => ({
            players: [...prevState.players, player],
            totalCost: prevState.totalCost + player.cost,
            transferPoints: prevState.transferPoints + (prevState.players.length > 11 ? 4 : 0),
        }));
    };

    const removePlayer = (player) => {
        setUserTeam((prevState) => ({
            players: prevState.players.filter((p) => p.id !== player.id),
            totalCost: prevState.totalCost - player.cost,
            transferPoints: prevState.transferPoints + (prevState.players.length > 11 ? 4 : 0),
        }));
    };
    const handleLogin = async (username, password) => {
        try {
            const { accessToken, refreshToken } = await login(username, password);
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
        } catch (error) {
            alert('Login failed. Please check your credentials and try again.');
        }
    };
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                    <Route
                        path="/transfers"
                        element={
                            <AuthWrapper>
                                <Routes>
                                    <Route path="/" element={<TransferWindow />} />
                                    {/* Add other protected routes here */}
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
