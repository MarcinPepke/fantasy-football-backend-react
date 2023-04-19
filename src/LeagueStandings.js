// src/components/LeagueStandings.js
import React, { useState, useEffect } from 'react';
import { getLeagueStandings } from './playerService'

const LeagueStandings = () => {
    const [standings, setStandings] = useState([]);

    useEffect(() => {
       // getLeagueStandings().then(setStandings);
    }, []);

    return (
        <div>
            <h2>League Standings</h2>
            {/* Render the league standings in a table or list */}
        </div>
    );
};

export default LeagueStandings;
