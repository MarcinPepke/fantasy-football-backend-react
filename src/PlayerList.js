// src/components/PlayerList.js
import React, { useState, useEffect } from 'react';
import { getAllPremierLeaguePlayers } from './playerService'

const PlayerList = ({ team, setTeam }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        getAllPremierLeaguePlayers().then(setPlayers);
    }, []);

    // ... Implement handlers for adding/removing players to/from the team.

    const handleAddPlayer = (player) => {
        // Use the addPlayerToTeam function and update the team state.
    };

    const handleRemovePlayer = (player) => {
        // Use the removePlayerFromTeam function and update the team state.
    };

    return (
        <div>
            <h2>Player List</h2>
            {players.map((player) => (
                <li key={player.id}>{player.name}</li>
            ))}
        </div>
    );
};

export default PlayerList;
