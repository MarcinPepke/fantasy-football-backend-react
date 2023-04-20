import React, {useState, useEffect} from "react";
import {
    fetchPlayerStatisticsAndCalculatePoints,
    fetchPlayerStatisticsAndCalculatePointsApi,
    getBudget,
    getFixture
} from "../api";

function Fixture() {


    const [isLoading, setIsLoading] = useState(true);

    const [fixtures, setFixtures] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getFixture()
            .then(fixture => {
                setFixtures(fixture);
            })
            .catch(error => {
                console.error('Error fetching budget data:', error);
            });
        setIsLoading(false);
    }, []);


    useEffect(() => {
        if (!isLoading) {
            const liveMatches = fixtures.filter(match => match.fixture.status.short === 'LIVE');

            if (liveMatches.length > 0) {
                const interval = setInterval(() => {
                    liveMatches.forEach(match => {
                        fetchPlayerStatisticsAndCalculatePointsApi(match.fixture.id).catch((err) => {
                            console.log(err);
                        });
                    });
                }, 2 * 60 * 1000);

                return () => clearInterval(interval);
            }
        }
    }, [fixtures]);


    return (
        <div>
            <h2>Team Fixtures</h2>
            {fixtures ? (
                <div className="fixture-container">
                    <div className="card fixture-card">

                        {fixtures.map((fixture, index) => (
                            <div className="card-body">
                                <h5 className="card-title">{fixture.teams.home.name} vs {fixture.teams.away.name}</h5>
                                <h5 className="card-title">{fixture.goals.home} vs {fixture.goals.away}</h5>
                                <p className="card-text">{new Date(fixture.fixture.timestamp * 1000).toLocaleDateString()} {" "}
                                    {new Date(fixture.fixture.timestamp * 1000).toLocaleTimeString()}
                                </p>
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
