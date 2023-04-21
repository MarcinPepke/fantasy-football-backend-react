import React, {useState, useEffect} from 'react';
import {fetchingCurrentGameweekRankingData, fetchingOverallRankingData} from "../api";
import { Tab, Tabs } from "@material-ui/core";


const Ranking = () => {
    const [overallRankings, setOverallRankings] = useState([]);
    const [gameweekRankings, setGameweekRankings] = useState([]);


    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    useEffect(() => {
        fetchingOverallRankingData().then((ranking) => {
            console.log(ranking);
            setOverallRankings(ranking);
        });
        fetchingCurrentGameweekRankingData().then((ranking) => {
            console.log(ranking);
            setGameweekRankings(ranking);
        });


    }, []);


    return (
        <div className="ranking-container">
            <Tabs value={selectedTab} onChange={handleTabChange}>
                <Tab label="Overall Ranking" />
                <Tab label="Gameweek Ranking" />
            </Tabs>
            <h2>Ranking</h2>

            <table className="ranking-table">
                <thead>
                <tr>
                    <th>Team Name</th>
                    <th>Player Name</th>
                    <th>Weekly Points</th>
                    <th>Total Points</th>
                </tr>
                </thead>
                <tbody>
                {selectedTab === 0 &&
                    overallRankings.map((ranking) => (
                        ranking.team.name
                    ))
                }
                {selectedTab === 1 &&
                    gameweekRankings.map((ranking) => (
                        ranking.team.id
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default Ranking;
