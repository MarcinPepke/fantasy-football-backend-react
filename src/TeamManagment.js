// src/components/TeamManagement.js
import React, { useState, useEffect } from 'react';
import PlayerList from './PlayerList';
import PlayerCard from './PlayerCard';

const TeamManagement = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        // Fetch the user's team and set the state.
    }, []);

    return (
        <div>
            <h2>Team Management</h2>
            <PlayerList team={team} setTeam={setTeam} />
            <div>
                {team.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                ))}
            </div>
        </div>
    );
};

export default TeamManagement;
