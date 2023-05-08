import React, {useState, useEffect} from 'react';
import {fetchingCurrentGameweekRankingData, fetchingOverallRankingData} from "../api";
import {Tab, Tabs} from "@material-ui/core";
import NavbarComponent from "./NavbarComponent";


const Ranking = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };


    const [overallRankings, setOverallRankings] = useState([]);
    const [gameweekRankings, setGameweekRankings] = useState([]);

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
            <NavbarComponent />
            <Tabs value={selectedTab} onChange={handleTabChange}>
                <Tab label="Overall Ranking"/>
                <Tab label="Gameweek Ranking"/>
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
                    overallRankings.map((ranking) => {
                        return (
                            <tr>
                                <td>{ranking.team.name}</td>
                                <td>{ranking.team.owner.username}</td>
                                <td>{ranking.team.currentGameweekPoints}</td>
                                <td>{ranking.team.totalPoints}</td>
                            </tr>
                        )
                        }
                    )
                }
                {selectedTab === 1 &&
                    gameweekRankings.map((ranking) => {
                        return (
                            <tr>
                                <td>{ranking.team.name}</td>
                                <td>{ranking.team.owner.username}</td>
                                <td>{ranking.team.currentGameweekPoints}</td>
                                <td>{ranking.team.totalPoints}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default Ranking;
