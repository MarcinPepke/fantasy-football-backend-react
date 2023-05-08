// src/App.js
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import TransferWindow from "./TeamView/TransferWindow";
import LoginPage from "./Login/LoginPage";
import PrivateRoute from "./component/AuthWrapper";
import AuthWrapper from "./component/AuthWrapper";
import {login} from "./api";
import Fixture from "./Fixture/Fixture";
import MyTeamComponent from "./MyTeam/MyTeamComponent";
import Ranking from "./component/Ranking";
import RegisterPage from "./component/Register";
import CreateTeam from "./component/CreateTeam";
import FixtureComponent from "./component/FixtureComponent";
const App = () => {



    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/fixture" element={<Fixture  />} />
                    <Route path="/my-team" element={<TransferWindow  />} />
                    <Route path="/ranking" element={<Ranking  />} />
                    <Route path="/register" element={<RegisterPage  />} />
                    <Route path="/create-team" element={<CreateTeam  />} />
                    <Route path="/fixtures" element={<FixtureComponent  />} />
                    <Route
                        path="/transfers"
                        element={
                            <AuthWrapper>
                                <Routes>
                                    <Route path="/" element={<TransferWindow />} />
                                    <Route path="/" element={<Fixture />} />
                                    <Route path="/" element={<MyTeamComponent />} />
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
