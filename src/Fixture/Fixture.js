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
                <div className="fixture-container">
                    <div className="card fixture-card">

                        {fixtures.map((fixture, index) => (
                            <div className="card-body">
                                <h5 className="card-title">{fixture.teams.home.name} vs {fixture.teams.away.name}</h5>
                                <p className="card-text">{new Date(fixture.fixture.timestamp * 1000).toLocaleDateString()}</p>
                            </div>
                        ))}

                    </div>
                </div>
            ) : (
                <p>Loading fixtures...</p>
            )}
        </div>
    );
}

export default Fixture;
