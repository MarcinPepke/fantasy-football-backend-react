import React, { useState } from 'react';
import {createTeam} from "../api";
import {useNavigate} from "react-router-dom";

const CreateTeam = () => {
    const navigate = useNavigate();
    const [teamName, setTeamName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (teamName.trim()) {
            createTeam(teamName.trim()).then(r => navigate("/transfers"));
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
                    onChange={(e) => {
                        setTeamName(e.target.value)
                        console.log(teamName)
                    }}
                />
                <button type="submit">Create Team</button>
            </form>
        </div>
    );
};

export default CreateTeam;
