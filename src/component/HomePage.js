// src/components/HomePage.js
import React from 'react';
import TeamManagement from '../TeamManagment';
import LeagueStandings from '../LeagueStandings';

const HomePage = () => {
    return (
        <div>
            <TeamManagement />
            <LeagueStandings />
        </div>
    );
};

export default HomePage;
