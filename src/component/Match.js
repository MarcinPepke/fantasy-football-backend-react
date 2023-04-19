import React from 'react';

const Match = ({ match }) => {
    return (
        <div className="match">
            <h3>{match.teams.home.name}</h3>
            <p>Date: {match.fixture.date}</p>
        </div>
    );
};

export default Match;
