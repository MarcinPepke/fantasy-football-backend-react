/*
import React, {useEffect, useState} from 'react';
import {fetchUserTeam} from "../api";

const MyTeamComponent = () => {

    const[wait,setWait] = useState(true);
    const [lineup, setLineup] = useState({
        Goalkeeper: [],
        Defender: [],
        Midfielder: [],
        Attacker: [],
    });
    const [firstSquad, setFirstSquad] = useState({
        Goalkeeper: [],
        Defender: [],
        Midfielder: [],
        Attacker: [],
    });

    const [bench, setBench] = useState({
        Goalkeeper: [],
        Defender: [],
        Midfielder: [],
        Attacker: [],
    });

    useEffect(() => {
        fetchUserTeam().then((teamData) => {
            if (teamData) {
                const lineupData = {
                    Goalkeeper: Array.isArray(teamData) ? teamData.filter(player => player.position === 'Goalkeeper') : [],
                    Defender: Array.isArray(teamData) ? teamData.filter(player => player.position === 'Defender') : [],
                    Midfielder: Array.isArray(teamData) ? teamData.filter(player => player.position === 'Midfielder') : [],
                    Attacker: Array.isArray(teamData) ? teamData.filter(player => player.position === 'Attacker') : [],
                };
                console.log(lineupData)
                setLineup(lineupData);
                setWait(false);
            }
        })}, []);

        useEffect(() => {
            if(!wait) {
                const newLineup = {
                    Goalkeeper: lineup.Goalkeeper.slice(0, 1),
                    Defender: lineup.Defender.slice(0, 4),
                    Midfielder: lineup.Midfielder.slice(0, 3),
                    Attacker: lineup.Attacker.slice(0, 3),
                };

                const newBench = [...lineup.Goalkeeper.slice(1), ...lineup.Defender.slice(4), ...lineup.Midfielder.slice(3), ...lineup.Attacker.slice(3),];

                setFirstSquad(newLineup);
                setBench(newBench);
            }
        }, [lineup]);


        const handleMoveToBench = (playerId) => {
            // Handle moving a player from the lineup to the bench
        };

        const handleMoveToLineup = (playerId) => {
            // Handle moving a player from the bench to the lineup
        };

        return (
            <div>
                <h2>My Team</h2>
                <div className="lineup">
                    <h3>Lineup</h3>
                    {firstSquad.map(player => (
                        <div key={player.id}>
                            {player.name} - {player.position}
                            <button onClick={() => handleMoveToBench(player.id)}>Move to Bench</button>
                        </div>
                    ))}
                </div>
                <div className="bench">
                    <h3>Bench</h3>
                    {bench.map(player => (
                        <div key={player.id}>
                            {player.name} - {player.position}
                            <button onClick={() => handleMoveToLineup(player.id)}>Move to Lineup</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    };
    export default MyTeamComponent;
*/
