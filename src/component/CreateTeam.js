import React, { useState } from 'react';

const CreateTeam = ({ onCreateTeam }) => {
    const [teamName, setTeamName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (teamName.trim()) {
            onCreateTeam(teamName.trim());
        }
    };

    return (
        <div className="create-team">
            <h2>Create Your Team</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="team-name">Team Name:</label>
                <input
                    type="text"
                    id="team-name"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                />
                <button type="submit">Create Team</button>
            </form>
        </div>
    );
};

export default CreateTeam;
