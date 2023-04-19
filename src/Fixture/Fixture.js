import React, { useState, useEffect } from "react";
import {getBudget, getFixture} from "../api";

function Fixture() {
    const [fixtures, setFixtures] = useState(null);


    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        getFixture()
            .then(fixture => {
                setFixtures(fixture);
            })
            .catch(error => {
                console.error('Error fetching budget data:', error);
            });
    }, []);

    return (
        <div>
            <h2>Team Fixtures</h2>
            {fixtures ? (
                <table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Home Team</th>
                        <th>Score Home</th>
                        <th>Score Away</th>
                        <th>Away Team</th>
                        <th>Minute</th>
                    </tr>
                    </thead>
                    <tbody>
                    {fixtures.map((fixture) => (
                        <tr key={fixture.fixture.id}>
                            <td>{new Date(fixture.fixture.timestamp * 1000).toLocaleDateString()}</td>
                            <td>{fixture.teams.home.name}</td>
                            <td>{fixture.goals.home}</td>
                            <td>{fixture.goals.away}</td>
                            <td>{fixture.teams.away.name}</td>
                            <td>{fixture.fixture.status.elapsed}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading fixtures...</p>
            )}
        </div>
    );
}

export default Fixture;
